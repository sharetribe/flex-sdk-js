import axios from 'axios';
import _ from 'lodash';
import { methodPath, assignDeep } from './utils';
import { reader, writer } from './serializer';
import paramsSerializer from './params_serializer';
import browserCookieStore from './browser_cookie_store';
import memoryStore from './memory_store';

const constructAuthHeader = (authToken) => {
  /* eslint-disable camelcase */
  const token_type = authToken.token_type && authToken.token_type.toLowerCase();

  switch (token_type) {
    case 'bearer':
      return `Bearer ${authToken.access_token}`;
    default:
      throw new Error(`Unknown token type: ${token_type}`);
  }
  /* eslint-enable camelcase */
};

const formData = params => _.reduce(params, (pairs, v, k) => {
  pairs.push(`${k}=${v}`);
  return pairs;
}, []).join('&');

const saveToken = (authResponse, tokenStore) =>
  authResponse.then((res) => {
    const authToken = res.data;

    if (tokenStore) {
      tokenStore.setToken(authToken);
    }

    return authToken;
  });

const createAuthenticator = (sdk, tokenStore) => (apiCall) => {
  const storedToken = tokenStore && tokenStore.getToken();

  let authentication;

  if (storedToken) {
    authentication = Promise.resolve(storedToken);
  } else {
    authentication = saveToken(sdk.auth.token({
      client_id: sdk.config.clientId,
      grant_type: 'client_credentials',
      scope: 'public-read',
    }), tokenStore);
  }

  return authentication.then(authToken =>
    apiCall({ Authorization: `${constructAuthHeader(authToken)}` })
      .catch((error) => {
        let newAuthentication;

        if (error.status === 401 && authToken.refresh_token) {
          newAuthentication = saveToken(sdk.auth.token({
            client_id: sdk.config.clientId,
            grant_type: 'refresh_token',
            refresh_token: authToken.refresh_token,
          }), tokenStore);
        } else {
          newAuthentication = saveToken(sdk.auth.token({
            client_id: sdk.config.clientId,
            grant_type: 'client_credentials',
            scope: 'public-read',
          }), tokenStore);
        }

        return newAuthentication.then(freshAuthToken => apiCall({ Authorization: `${constructAuthHeader(freshAuthToken)}` }));
      }));
};

const defaultSdkConfig = {
  baseUrl: 'https://api.sharetribe.com',
  typeHandlers: [],
  endpoints: [],
  adapter: null,
  version: 'v1',
};

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
    authenticationMiddleware: createAuthenticator,
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
    authenticationMiddleware: () => apiCall => apiCall({}),
  },
};

const defaultEndpoints = [
  { apiName: 'api', path: 'marketplace/show', root: true, method: 'get' },
  { apiName: 'api', path: 'users/show', root: true, method: 'get' },
  { apiName: 'api', path: 'listings/show', root: true, method: 'get' },
  { apiName: 'api', path: 'listings/query', root: true, method: 'get' },
  { apiName: 'api', path: 'listings/search', root: true, method: 'get' },
  { apiName: 'auth', path: 'token', root: false, method: 'post' },
  { apiName: 'auth', path: 'revoke', root: false, method: 'post' },
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
const createEndpointFn = (endpoint, httpOpts) => {
  const { apiName, path, method = 'get' } = endpoint;
  const { headers: httpOptsHeaders, ...restHttpOpts } = httpOpts;
  const url = [apiName, path].join('/');

  return ({ params = {}, headers = {} }) => {
    return doRequest({
      params,
      httpOpts: {
        method,
        headers: { ...httpOptsHeaders, ...headers },
        ...restHttpOpts,
        url,
      }
    });
  };
}

const createSdkMethod = (endpoint, httpOpts, authenticationMiddleware) => {
  const endpointFn = createEndpointFn(endpoint, httpOpts);

  return (params = {}) =>
    // TODO, if needed, generalize to proper middleware pattern
    authenticationMiddleware((authorizationHeaders) => {
      return endpointFn({params, headers: authorizationHeaders });
    });
}

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
      endpoints,
      clientId,
    } = this.config;

    if (!clientId) {
      throw new Error('clientId must be provided');
    }

    const tokenStore = createTokenStore(config.tokenStore, clientId);

    // Create endpoint opts
    const opts = _.mapValues(apis, apiDefinition => ({
      config: apiDefinition.config(this.config),
      authenticationMiddleware: apiDefinition.authenticationMiddleware(this, tokenStore),
    }));

    const sdkMethodDefs = [...defaultEndpoints, ...endpoints].map((endpoint) => {
      // e.g. '/marketplace/users/show/' -> ['marketplace', 'users', 'show']
      const mp = endpoint.root ?
                 methodPath(endpoint.path) :
                 [endpoint.apiName, ...methodPath(endpoint.path)];
      const methodName = mp.join('.');
      const httpOpts = opts[endpoint.apiName].config;
      const authenticationMiddleware = opts[endpoint.apiName].authenticationMiddleware;

      return {
        path: [endpoint.apiName, endpoint.path].join('/'),
        methodPath: mp,
        methodName,
        fn: createSdkMethod(endpoint, httpOpts, authenticationMiddleware),
      };
    });

    // Assign all endpoint definitions to 'this'
    sdkMethodDefs.forEach((sdkMethodDef) => {
      assignDeep(this, sdkMethodDef.methodPath, sdkMethodDef.fn);
    });

    this.login = ({ username, password }) =>
      this.auth.token({
        client_id: clientId,
        grant_type: 'password',
        username,
        password,
        scope: 'user',
      }).then(res => res.data).then((authToken) => {
        if (tokenStore) {
          tokenStore.setToken(authToken);
        }

        return authToken;
      });

    this.logout = () => {
      const token = tokenStore && tokenStore.getToken();
      const refreshToken = token && token.refresh_token;

      if (refreshToken) {
        return this.auth.revoke({
          token: refreshToken,
        }).then(res => res.data).then(() => {
          if (tokenStore) {
            tokenStore.setToken(null);
          }

          return Promise.resolve();
        });
      }

      // refresh_token didn't exist so the session can be considered as logged out.
      // Return resolved promise
      return Promise.resolve();
    };
  }
}

