import axios from 'axios';
import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash, formData } from './utils';
import * as serializer from './serializer';
import paramsSerializer from './params_serializer';
import { authenticateInterceptors,
         FetchRefreshTokenForRevoke,
         ClearTokenMiddleware,
         FetchAuthTokenFromStore,
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
    const { reader } = createTransitConverters(typeHandlers);

    return {
      headers: {
        Accept: 'application/transit+json',
      },
      baseURL: `${baseUrl}/${version}`,
      transformRequest: [],
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
    // using default transformRequest, which can handle JSON and fallback to plain
    // test if JSON parsing fails
    adapter,
  }),
};

/**
   Take endpoint definitions and return SDK function definition.
 */
const sdkFnDefsFromEndpointDefs = epDefs => epDefs
  .filter(({ internal = false }) => !internal)
  .map(({ apiName, path }) => {
    const fnPath = urlPathToFnPath(path);
    const fullFnPath = [apiName, ...fnPath];

    return {
      path: fnPath,
      endpointInterceptorPath: fullFnPath,
      interceptors: [...authenticateInterceptors],
    };
  });

class TransitRequest {
  enter({ params, headers = {}, typeHandlers, ...ctx }) {
    const { writer } = createTransitConverters(typeHandlers);

    return {
      params: writer.write(params),
      headers: {
        ...headers,
        'Content-Type': 'application/transit+json',
      },
      typeHandlers,
      ...ctx,
    };
  }
}

class MultipartRequest {
  enter({ params, ...ctx }) {
    if (_.isPlainObject(params)) {
      /* eslint-disable no-undef */
      if (typeof FormData === 'undefined') {
        throw new Error('Don\'t know how to create multipart request from Object, when the FormData is undefined');
      }

      const formDataObj = _.reduce(params, (fd, val, key) => {
        fd.append(key, val);
        return fd;
      }, new FormData());
      /* eslint-enable no-undef */

      return { params: formDataObj, ...ctx };
    }

    return { params, ...ctx };
  }
}

/**
   List of all known endpoints

   - apiName: api / auth
   - path: URL path to the endpoint
   - internal: Is this method SDK internal only,
     or will it be part of the public SDK interface
   - method: HTTP method
 */
const endpointDefinitions = [
  { apiName: 'api', path: 'marketplace/show', internal: false, method: 'get', interceptors: [] },
  { apiName: 'api', path: 'users/show', internal: false, method: 'get', interceptors: [] },
  { apiName: 'api', path: 'users/me', internal: false, method: 'get', interceptors: [] },
  { apiName: 'api', path: 'listings/show', internal: false, method: 'get', interceptors: [] },
  { apiName: 'api', path: 'listings/query', internal: false, method: 'get', interceptors: [] },
  { apiName: 'api', path: 'listings/search', internal: false, method: 'get', interceptors: [] },
  { apiName: 'api', path: 'listings/create', internal: false, method: 'post', interceptors: [new TransitRequest()] },
  { apiName: 'api', path: 'listings/update', internal: false, method: 'post', interceptors: [new TransitRequest()] },
  { apiName: 'api', path: 'listings/upload_image', internal: false, method: 'post', interceptors: [new MultipartRequest()] },
  { apiName: 'api', path: 'listings/add_image', internal: false, method: 'post', interceptors: [new TransitRequest()] },
  { apiName: 'auth', path: 'token', internal: true, method: 'post', interceptors: [] },
  { apiName: 'auth', path: 'revoke', internal: true, method: 'post', interceptors: [] },
];

const loginInterceptors = [
  defaultParamsInterceptor({ grant_type: 'password', scope: 'user' }),
  new AddClientIdToParams(),
  new SaveTokenMiddleware(),
  new AddAuthTokenResponseToCtx(),
];

const logoutInterceptors = [
  new FetchAuthTokenFromStore(),
  new AddAuthTokenHeader(),
  new ClearTokenMiddleware(),
  new FetchRefreshTokenForRevoke(),
];

/**
   List of SDK methods that will be part of the SDKs public interface.
   The list is created from the `endpointDefinitions` list.

   The objects in the list have following fields:

   - path (String | Array): The function name and path. I.e. if the path is `listings.show`,
     then there will be a public SDK method `sdk.listings.show`
   - endpointInterceptorPath (String | Array): Path to endpoint interceptor
   - interceptors: List of additional interceptors.

 */
const endpointSdkFnDefinitions = sdkFnDefsFromEndpointDefs(endpointDefinitions);

/**
   List of SDK methods that are not derived from the endpoints.
 */
const additionalSdkFnDefinitions = [
  { path: 'login', endpointInterceptorPath: 'auth.token', interceptors: loginInterceptors },
  { path: 'logout', endpointInterceptorPath: 'auth.revoke', interceptors: [...logoutInterceptors] },
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

// GET requests: `params` includes query params. `queryParams` will be ignored
// POST requests: `params` includes body params. `queryParams` includes URL query params
const doRequest = ({ params = {}, queryParams = {}, httpOpts }) => {
  const { method = 'get' } = httpOpts;

  let data = null;
  let query = null;

  if (method.toLowerCase() === 'post') {
    data = params;
    query = queryParams;
  } else {
    query = params;
    // leave `data` null
  }

  const req = {
    ...httpOpts,
    method,
    data,
    params: query,
  };

  return axios.request(req).then(handleSuccessResponse);
};

/**
   Creates a list of endpoint interceptors that call the endpoint with the
   given parameters.
*/
const createEndpointInterceptors = ({ method, url, httpOpts }) => {
  const { headers: httpOptsHeaders, ...restHttpOpts } = httpOpts;

  return {
    enter: (ctx) => {
      const { params, queryParams, headers } = ctx;
      return doRequest({
        params,
        queryParams,
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

const formatError = (e) => {
  /* eslint-disable no-param-reassign */
  e.details = {};

  if (e.response) {
    const { status, statusText, data } = e.response;
    Object.assign(e, { status, statusText, data });
    delete e.response;
  }

  if (e.ctx) {
    // Move context `ctx` under `details`, i.e. to the non-public part.
    e.details.ctx = e.ctx;
    delete e.ctx;
  }

  if (e.config) {
    // Axios attachs the config object that was used to the error.
    // Move it under `details`, i.e. to the non-public part.
    e.details.config = e.config;
    delete e.config;
  }

  throw e;
  /* eslint-enable no-param-reassign */
};

/**
   Creates a new SDK function.

   'sdk function' is a function that will be attached to the SDK instance.
   These functions will be part of the SDK's public interface.

   It's meant to used by the user of the SDK.
 */
const createSdkFn = ({ ctx, endpointInterceptors, interceptors }) =>

  // GET requests: `params` includes query params. `queryParams` will be ignored
  // POST requests: `params` includes body params. `queryParams` includes URL query params
  (params = {}, queryParams = {}) =>
    contextRunner(_.compact([
      ...interceptors,
      ...endpointInterceptors,
    ]))({ ...ctx, params, queryParams })
    .then(({ res }) => res)
    .catch(formatError);

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
      const { path, apiName, method, interceptors = [] } = epDef;
      const fnPath = urlPathToFnPath(path);
      const fullFnPath = [apiName, ...fnPath];
      const url = [apiName, path].join('/');
      const httpOpts = apiConfigs[apiName];

      const endpointInterceptors = [
        ...interceptors,
        createEndpointInterceptors({ method, url, httpOpts }),
      ];

      return {
        ...epDef,
        fnPath,
        fullFnPath,
        endpointInterceptors,
      };
    });

    // Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    const endpointInterceptors = endpointDefs.reduce(
      (acc, { fullFnPath, endpointInterceptors: interceptors }) =>
        _.set(acc, fullFnPath, interceptors), {});

    // Create a context object that will be passed to the interceptor context runner
    const ctx = {
      tokenStore: sdkConfig.tokenStore,
      endpointInterceptors,
      clientId: sdkConfig.clientId,
      typeHandlers: sdkConfig.typeHandlers,
    };

    const userDefinedSdkFnDefs = sdkFnDefsFromEndpointDefs(sdkConfig.endpoints);

    // Create SDK functions
    const sdkFns = [
      ...endpointSdkFnDefinitions,
      ...additionalSdkFnDefinitions,
      ...userDefinedSdkFnDefs].map(
        ({ path, endpointInterceptorPath, interceptors }) =>
          ({
            path,
            fn: createSdkFn({
              ctx,
              endpointInterceptors: _.get(endpointInterceptors, endpointInterceptorPath) || [],
              interceptors,
            }),
          }));

    // Assign SDK functions to 'this'
    sdkFns.forEach(({ path, fn }) => _.set(this, path, fn));
  }
}
