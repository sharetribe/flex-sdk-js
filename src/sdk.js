import axios from 'axios';
import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash, formData } from './utils';
import * as serializer from './serializer';
import paramsSerializer from './params_serializer';
import { authenticateInterceptors,
         FetchRefreshTokenForRevoke,
         ClearTokenMiddleware,
         FetchAuthToken,
         AddAuthTokenHeader,
         SaveTokenMiddleware,
         AddAuthTokenResponseToCtx,
         AuthInfo } from './authenticate';
import { createDefaultTokenStore } from './token_store';
import contextRunner from './context_runner';

/* eslint-disable class-methods-use-this */

const defaultSdkConfig = {
  baseUrl: 'https://api.sharetribe.com',
  typeHandlers: [],
  endpoints: [],
  adapter: null,
  version: 'v1',
};

const defaultParamsInterceptor = (defaultParams = {}) =>
  ({
    enter: ({ params: ctxParams, ...ctx }) =>
      ({ ...ctx, params: { ...defaultParams, ...ctxParams } }),
  });

class AddClientIdToParams {
  enter({ clientId, params, ...ctx }) {
    return { ...ctx, clientId, params: { ...params, client_id: clientId } };
  }
}

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
      headers: {
        'Content-Type': 'application/transit+json',
        Accept: 'application/transit+json',
      },
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
  { apiName: 'api', path: 'marketplace/show', root: true, method: 'get', interceptors: [...authenticateInterceptors] },
  { apiName: 'api', path: 'users/show', root: true, method: 'get', interceptors: [...authenticateInterceptors] },
  { apiName: 'api', path: 'listings/show', root: true, method: 'get', interceptors: [...authenticateInterceptors] },
  { apiName: 'api', path: 'listings/query', root: true, method: 'get', interceptors: [...authenticateInterceptors] },
  { apiName: 'api', path: 'listings/search', root: true, method: 'get', interceptors: [...authenticateInterceptors] },
  { apiName: 'api', path: 'listings/create', root: true, method: 'post', interceptors: [...authenticateInterceptors] },
  { apiName: 'auth', path: 'token', root: false, method: 'post' },
  { apiName: 'auth', path: 'revoke', root: false, method: 'post' },
];

const loginInterceptors = [
  defaultParamsInterceptor({ grant_type: 'password', scope: 'user' }),
  new AddClientIdToParams(),
  new SaveTokenMiddleware(),
  new AddAuthTokenResponseToCtx(),
];

const logoutInterceptors = [
  new FetchAuthToken(),
  new AddAuthTokenHeader(),
  new ClearTokenMiddleware(),
  new FetchRefreshTokenForRevoke(),
];

const additionalSdkFnDefinitions = [
  { path: 'login', endpointInterceptorName: 'auth.token', interceptors: loginInterceptors },
  { path: 'logout', endpointInterceptorName: 'auth.revoke', interceptors: [...logoutInterceptors] },
  { path: 'authInfo', interceptors: [new AuthInfo()] },
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
   Creates an endpoint interceptor that calls the endpoint with the
   given parameters.
*/
const createEndpointInterceptor = ({ method, url, httpOpts }) => {
  const { headers: httpOptsHeaders, ...restHttpOpts } = httpOpts;

  return {
    enter: (ctx) => {
      const { params, headers } = ctx;
      return doRequest({
        params,
        httpOpts: {
          method: (method || 'get'),
          // Merge additional headers
          headers: { ...httpOptsHeaders, ...headers },
          ...restHttpOpts,
          url,
        },
      }).then(res => ({ ...ctx, res })).catch((error) => {
        const errorCtx = { ...ctx, res: error.response };
        // eslint-disable-next-line no-param-reassign
        error.ctx = errorCtx;
        throw error;
      });
    },
  };
};
/**
   Creates a new SDK function.

   'sdk function' is a function that will be attached to the SDK instance.
   These functions will be part of the SDK's public interface.

   It's meant to used by the user of the SDK.
 */
const createSdkFn = ({ ctx, endpointInterceptor, interceptors }) =>
  (params = {}) =>
    contextRunner(_.compact([
      ...interceptors,
      endpointInterceptor,
    ]))({ ...ctx, params }).then(({ res }) => res);

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

      const endpointInterceptor = createEndpointInterceptor({ method, url, httpOpts });

      return {
        ...epDef,
        fnPath,
        fullFnPath,
        sdkFnPath,
        endpointInterceptor,
      };
    });

    // Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    const endpointInterceptors = endpointDefs.reduce(
      (acc, { fullFnPath, endpointInterceptor }) =>
        _.set(acc, fullFnPath, endpointInterceptor), {});

    // Create a context object that will be passed to the interceptor context runner
    const ctx = {
      tokenStore: sdkConfig.tokenStore,
      endpointInterceptors,
      clientId: sdkConfig.clientId,
    };

    // Create SDK functions from the defined endpoints
    const endpointSdkFns = endpointDefs.map(
      ({ sdkFnPath: path, endpointInterceptor, interceptors = [] }) =>
        ({ path, fn: createSdkFn({ ctx, endpointInterceptor, interceptors }) }));

    // Create additional SDK functions
    const additionalSdkFns = additionalSdkFnDefinitions.map(
      ({ path, endpointInterceptorName, interceptors }) =>
        ({
          path,
          fn: createSdkFn({
            ctx,
            endpointInterceptor: _.get(endpointInterceptors, endpointInterceptorName),
            interceptors,
          }),
        }));

    // Assign SDK functions to 'this'
    [...endpointSdkFns, ...additionalSdkFns].forEach(({ path, fn }) => _.set(this, path, fn));
  }
}
