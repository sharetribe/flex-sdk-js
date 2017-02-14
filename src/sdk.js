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
  { path: 'marketplace/show', api: 'api', root: true, method: 'get' },
  { path: 'users/show', api: 'api', root: true, method: 'get' },
  { path: 'listings/show', api: 'api', root: true, method: 'get' },
  { path: 'listings/query', api: 'api', root: true, method: 'get' },
  { path: 'listings/search', api: 'api', root: true, method: 'get' },
  { path: 'token', api: 'auth', root: false, method: 'post' },
  { path: 'revoke', api: 'auth', root: false, method: 'post' },
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
    const { status, statusText, data } = response;
    return Promise.reject({ status, statusText, data });
  }

  // Something happened in setting up the request that triggered an Error
  return Promise.reject(error);
};

const createSdkMethod = (endpoint, httpOpts, authenticationMiddleware) =>
  (params = {}) =>
    // TODO, if needed, generalize to proper middleware pattern
    authenticationMiddleware((authorizationHeaders) => {
      // TODO Maybe we should use deep merge here?
      const headers = { ...httpOpts.headers, ...authorizationHeaders };

      const { api, path } = endpoint;
      const method = endpoint.method || 'get'; // default to GET

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
        headers,
        params: queryParams,
        data: bodyParams,
        url: [api, path].join('/'),
      };

      return axios.request(req).then(handleSuccessResponse).catch(handleFailureResponse);
    });

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
                 [endpoint.api, ...methodPath(endpoint.path)];
      const methodName = mp.join('.');
      const httpOpts = opts[endpoint.api].config;
      const authenticationMiddleware = opts[endpoint.api].authenticationMiddleware;

      return {
        path: [endpoint.api, endpoint.path].join('/'),
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

