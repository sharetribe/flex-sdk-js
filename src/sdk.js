import axios from 'axios';
import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash } from './utils';
import * as serializer from './serializer';
import paramsSerializer from './params_serializer';
import { authenticate, fetchAuthToken, addAuthTokenHeader, clearTokenMiddleware, saveTokenMiddleware, addAuthTokenResponseToCtx, fetchRefreshTokenForRevoke } from './authenticate';
import run from './middleware';
import { createDefaultTokenStore } from './token_store';

const formData = params => _.reduce(params, (pairs, v, k) => {
  pairs.push(`${k}=${v}`);
  return pairs;
}, []).join('&');

const defaultSdkConfig = {
  baseUrl: 'https://api.sharetribe.com',
  typeHandlers: [],
  endpoints: [],
  adapter: null,
  version: 'v1',
};

const defaultParamsMiddleware = (defaultParams = {}) => ({ params: ctxParams, ...ctx }, next) =>
  next({ ...ctx, params: { ...defaultParams, ...ctxParams } });

const addClientIdToParams = ({ clientId, params, ...ctx }, next) =>
  next({ ...ctx, clientId, params: { ...params, client_id: clientId } });

const unwrapResponseFromCtx = (enterCtx, next) =>
  next(enterCtx).then(({ res }) => res);

const createTransitConverters = (typeHandlers) => {
  const { readers, writers } = typeHandlers.reduce((memo, handler) => {
    const r = {
      type: handler.type,
      reader: handler.reader,
    };
    const w = {
      type: handler.type,
      customType: handler.customType,
      writer: handler.writer,
    };

    memo.readers.push(r);
    memo.writers.push(w);

    return memo;
  }, { readers: [], writers: [] });

  const reader = serializer.reader(readers);
  const writer = serializer.writer(writers);

  return { reader, writer };
};

/**
   Basic configurations for different 'apis'.

   Currently we have two apis:

   - `api`: the marketplace API
   - `auth`: the authentication API

   These configurations will be passed to Axios library.
   They define how to do the requets to the APIs, e.g.
   how the parameters should be serialized,
   what are the headers that should be always sent and
   how to transform requests and response, etc.
 */
const apis = {
  api: ({ baseUrl, version, adapter, typeHandlers }) => {
    const { reader, writer } = createTransitConverters(typeHandlers);

    return {
      headers: { Accept: 'application/transit' },
      baseURL: `${baseUrl}/${version}`,
      transformRequest: [
        // logAndReturn,
        data => writer.write(data),
      ],
      transformResponse: [
        // logAndReturn,
        data => reader.read(data),
      ],
      adapter,
      paramsSerializer,
    };
  },
  auth: ({ baseUrl, version, adapter }) => ({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    baseURL: `${baseUrl}/${version}/`,
    transformRequest: [
      data => formData(data),
    ],
    adapter,
  }),
};

const endpointDefinitions = [
  { apiName: 'api', path: 'marketplace/show', root: true, method: 'get', middleware: [authenticate] },
  { apiName: 'api', path: 'users/show', root: true, method: 'get', middleware: [authenticate] },
  { apiName: 'api', path: 'listings/show', root: true, method: 'get', middleware: [authenticate] },
  { apiName: 'api', path: 'listings/query', root: true, method: 'get', middleware: [authenticate] },
  { apiName: 'api', path: 'listings/search', root: true, method: 'get', middleware: [authenticate] },
  { apiName: 'auth', path: 'token', root: false, method: 'post' },
  { apiName: 'auth', path: 'revoke', root: false, method: 'post' },
];

const loginMiddleware = [
  defaultParamsMiddleware({ grant_type: 'password', scope: 'user' }),
  addClientIdToParams,
  saveTokenMiddleware,
  addAuthTokenResponseToCtx,
];

const logoutMiddleware = [
  fetchAuthToken,
  addAuthTokenHeader,
  clearTokenMiddleware,
  fetchRefreshTokenForRevoke,
];

const additionalSdkFnDefinitions = [
  { path: 'login', endpointFnName: 'auth.token', middleware: loginMiddleware },
  { path: 'logout', endpointFnName: 'auth.revoke', middleware: logoutMiddleware },
];

// const logAndReturn = (data) => {
//   console.log(data);
//   return data;
// };

const handleSuccessResponse = (response) => {
  const { status, statusText, data } = response;

  return { status, statusText, data };
};

const handleFailureResponse = (error) => {
  const response = error.response;

  if (response) {
    // The request was made, but the server responses with a status code
    // other than 2xx

    // TODO Server should send the error JSON. When that is implemented, parse the JSON
    // and return nicely formatted error.
    throw error;
  }

  // Something happened in setting up the request that triggered an Error
  throw error;
};

const doRequest = ({ params = {}, httpOpts }) => {
  const { method = 'get' } = httpOpts;

  let bodyParams = null;
  let queryParams = null;

  if (method.toLowerCase() === 'post') {
    bodyParams = params;
  } else {
    queryParams = params;
  }

  const req = {
    ...httpOpts,
    method,
    params: queryParams,
    data: bodyParams,
  };

  return axios.request(req).then(handleSuccessResponse).catch(handleFailureResponse);
};

/**
  Creates an 'endpoint function'.

  'endpoint function' is a 'plain' functions that doesn't do any
  additional logic besides calling the endpoint with the given
  parameters and configurations. Should not be confused with 'sdk
  function', which calls to 'endpoint function' and does some
  additional logic with middlewares, such as authorization.

  'endpoint function' is meant for SDK's internal use.

  Returns a middleware function.
*/
const createEndpointFn = ({ method, url, httpOpts }) => {
  const { headers: httpOptsHeaders, ...restHttpOpts } = httpOpts;

  return (enterCtx, next) => {
    const { params, headers } = enterCtx;

    return doRequest({
      params,
      httpOpts: {
        method: (method || 'get'),
        // Merge additional headers
        headers: { ...httpOptsHeaders, ...headers },
        ...restHttpOpts,
        url,
      },
    }).then(res => ({ ...enterCtx, res })).catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.ctx = enterCtx;
      throw error;
    }).then(next);
  };
};

/**
   Creates a new SDK function.

   'sdk function' is a function that will be attached to the SDK instance.
   These functions will be part of the SDK's public interface.

   It's meant to used by the user of the SDK.
 */
const createSdkFn = (ctx, endpointFn, middleware) =>
  (params = {}) =>
    run([
      unwrapResponseFromCtx,
      ...middleware,
      endpointFn,
    ])({ ...ctx, params });

// Take SDK configurations, do transformation and return.
const transformSdkConfig = ({ baseUrl, tokenStore, ...sdkConfig }) => ({
  ...sdkConfig,
  baseUrl: trimEndSlash(baseUrl),
  tokenStore: tokenStore || createDefaultTokenStore(tokenStore, sdkConfig.clientId),
});

// Validate SDK configurations, throw an error if invalid, otherwise return.
const validateSdkConfig = (sdkConfig) => {
  if (!sdkConfig.clientId) {
    throw new Error('clientId must be provided');
  }

  return sdkConfig;
};

export default class SharetribeSdk {

  /**
     Instantiates a new SharetribeSdk instance.
     The constructor assumes the config options have been
     already validated.
   */
  constructor(userSdkConfig) {
    // Transform and validation SDK configurations
    const sdkConfig =
      validateSdkConfig(
        transformSdkConfig(
          { ...defaultSdkConfig, ...userSdkConfig }));

    // Instantiate API configs
    const apiConfigs = _.mapValues(apis, apiConfig => apiConfig(sdkConfig));

    // Read the endpoint definitions and do some mapping
    const endpointDefs = [...endpointDefinitions, ...sdkConfig.endpoints].map((epDef) => {
      const { path, apiName, root, method } = epDef;
      const fnPath = urlPathToFnPath(path);
      const fullFnPath = [apiName, ...fnPath];
      const sdkFnPath = root ? fnPath : fullFnPath;
      const url = [apiName, path].join('/');
      const httpOpts = apiConfigs[apiName];

      const endpointFn = createEndpointFn({ method, url, httpOpts });

      return {
        ...epDef,
        fnPath,
        fullFnPath,
        sdkFnPath,
        endpointFn,
      };
    });

    // Create `endpointFns` object, which is object containing all defined endpoints.
    // This object can be passed to middleware in the context so that middleware
    // functions are able to do API calls (e.g. authentication middleware)
    const endpointFns = endpointDefs.reduce(
      (acc, { fullFnPath, endpointFn }) =>
        _.set(acc, fullFnPath, endpointFn), {});

    // Create a context object that will be passed to the middleware functions
    const ctx = {
      tokenStore: sdkConfig.tokenStore,
      endpointFns,
      clientId: sdkConfig.clientId,
    };

    // Create SDK functions from the defined endpoints
    const endpointSdkFns = endpointDefs.map(
      ({ sdkFnPath: path, endpointFn, middleware }) =>
        ({ path, fn: createSdkFn(ctx, endpointFn, middleware) }));

    // Create additional SDK functions
    const additionalSdkFns = additionalSdkFnDefinitions.map(
      ({ path, endpointFnName, middleware }) =>
        ({ path, fn: createSdkFn(ctx, _.get(endpointFns, endpointFnName), middleware) }));

    // Assign SDK functions to 'this'
    [...endpointSdkFns, ...additionalSdkFns].forEach(({ path, fn }) => _.set(this, path, fn));
  }
}
