import axios from 'axios';
import _ from 'lodash';
import { fnPath as urlPathToFnPath, assignDeep } from './utils';
import { reader, writer } from './serializer';
import paramsSerializer from './params_serializer';
import browserCookieStore from './browser_cookie_store';
import memoryStore from './memory_store';
import { authenticate, fetchAuthToken, addAuthTokenHeader, clearTokenMiddleware, saveTokenMiddleware, addAuthTokenResponseToCtx, fetchRefreshTokenForRevoke } from './authenticate';
import run from './middleware';

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

const addClientIdToParams = (ctx, next) => {
  const { clientId, params } = ctx;

  return next({ ...ctx, params: { ...params, client_id: clientId }});
}

const unwrapResponseFromCtx = (enterCtx, next) => next(enterCtx).then(({ res }) => res);

const apis = {
  api: {
    config: ({ baseUrl, version, adapter, typeHandlers }) => {
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

      const r = reader(readers);
      const w = writer(writers);

      return {
        headers: { Accept: 'application/transit' },
        baseURL: `${baseUrl}/${version}`,
        transformRequest: [
          // logAndReturn,
          data => w.write(data),
        ],
        transformResponse: [
          // logAndReturn,
          data => r.read(data),
        ],
        adapter,
        paramsSerializer,
      };
    },
  },

  auth: {
    config: ({ baseUrl, version, adapter }) => ({
      baseURL: `${baseUrl}/${version}/`,
      transformRequest: [
        data => formData(data),
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      adapter,
    }),
  },
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
  { path: 'login', endpointFnName: "auth.token", middleware: loginMiddleware },
  { path: 'logout', endpointFnName: "auth.revoke", middleware: logoutMiddleware }
]

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
    return Promise.reject(error);
  }

  // Something happened in setting up the request that triggered an Error
  return Promise.reject(error);
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
}

/**

  Creates an 'endpoint function'.

  'endpoint function' is a 'plain' functions that doesn't do any
  additional logic besides calling the endpoint with the given
  parameters and configurations. Should not be confused with 'sdk
  function', which calls to 'endpoint function' and does some
  additional logic, such as authorization.

  Usage example: TODO
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
      }
    }).then(res => ({ ...enterCtx, res })).catch((error) => {
      error.ctx = enterCtx;
      return Promise.reject(error);
    }).then(next);
  };
}

const createSdkMethod = (ctx, endpointFn, middleware) =>
  (params = {}) =>
    run([
      unwrapResponseFromCtx,
      ...middleware,
      endpointFn,
    ])({ ...ctx, params });

/**
   Take URL and remove the last slash

   Example:

   ```
   normalizeBaseUrl("http://www.api.com/") => "http://www.api.com"
   ```
 */
const normalizeBaseUrl = url => url.replace(/\/*$/, '');

// eslint-disable-next-line no-undef
const hasBrowserCookies = () => typeof document === 'object' && typeof document.cookies === 'string';

const createTokenStore = (tokenStore, clientId) => {
  if (tokenStore) {
    return tokenStore;
  }

  if (hasBrowserCookies) {
    return browserCookieStore(clientId);
  }

  // Token store was not given and we can't use browser cookie store.
  // Default to in-memory store.
  return memoryStore();
};

export default class SharetribeSdk {

  /**
     Instantiates a new SharetribeSdk instance.
     The constructor assumes the config options have been
     already validated.
   */
  constructor(config) {
    this.config = { ...defaultSdkConfig, ...config };

    this.config.baseUrl = normalizeBaseUrl(this.config.baseUrl);

    const {
      endpoints: userEndpointDefinitions,
      clientId,
    } = this.config;

    if (!clientId) {
      throw new Error('clientId must be provided');
    }

    const tokenStore = createTokenStore(config.tokenStore, clientId);

    // Create endpoint opts
    const opts = _.mapValues(apis, apiDefinition => ({
      config: apiDefinition.config(this.config),
    }));

    const endpointDefs = [...endpointDefinitions, ...userEndpointDefinitions].map((epDef) => {
      const { path, apiName, root, method } = epDef;
      const fnPath = urlPathToFnPath(path);
      const fullFnPath = [apiName, ...fnPath];
      const sdkFnPath = root ? fnPath : fullFnPath;
      const fullUrlPath = [apiName, path].join('/');
      const httpOpts = opts[apiName].config;

      const endpointFn = createEndpointFn({ method: epDef.method, url: fullUrlPath, httpOpts });

      return {
        ...epDef,
        fnPath,
        fullFnPath,
        sdkFnPath,
        endpointFn,
      }
    });

    const endpointFns = endpointDefs.reduce((acc, { fullFnPath, endpointFn }) => {
      return _.set(acc, fullFnPath, endpointFn);
    }, {});

    const ctx = {
      tokenStore,
      endpointFns,
      clientId,
    };

    const endpointSdkFns = endpointDefs.map(({ sdkFnPath, endpointFn, middleware }) => {
      return { path: sdkFnPath, fn: createSdkMethod(ctx, endpointFn, middleware) };
    });

    const additionalSdkFns = additionalSdkFnDefinitions.map(({ path, endpointFnName, middleware }) => {
      const sdkFn = createSdkMethod(ctx, _.get(endpointFns, endpointFnName), middleware);
      return { path, fn: createSdkMethod(ctx, _.get(endpointFns, endpointFnName), middleware) };
    });

    // Assign SDK functions to 'this'
    [...endpointSdkFns, ...additionalSdkFns].forEach(({ path, fn }) => _.set(this, path, fn));
  }
}
