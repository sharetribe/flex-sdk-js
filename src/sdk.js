import axios from 'axios';
import _ from 'lodash';
import { methodPath, assignDeep } from './utils';
import { reader, writer } from './serializer';
import paramsSerializer from './params_serializer';
import browserCookieStore from './browser_cookie_store';
import memoryStore from './memory_store';

const defaultOpts = {
  baseUrl: 'https://api.sharetribe.com',
  typeHandlers: [],
  endpoints: [],
  adapter: null,
  version: 'v1',
};

const defaultEndpoints = [
  { path: 'marketplace/show', api: 'api' },
  { path: 'users/show', api: 'api' },
  { path: 'listings/show', api: 'api' },
  { path: 'listings/query', api: 'api' },
  { path: 'listings/search', api: 'api' },
];

// const logAndReturn = data => {
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

const formData = params => _.reduce(params, (pairs, v, k) => {
  pairs.push(`${k}=${v}`);
  return pairs;
}, []).join('&');

const callAuthAndSaveToken = ({ baseUrl, version, adapter, tokenStore, data }) =>
  axios.request({
    method: 'post',
    baseURL: `${baseUrl}/${version}/`,
    url: 'auth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: formData(data),
    adapter,
  }).then(res => res.data).then((authToken) => {
    if (tokenStore) {
      tokenStore.setToken(authToken);
    }

    return authToken;
  });

const createLoginEndpoint = ({ baseUrl, version, clientId, adapter, tokenStore }) =>
  ({ username, password }) =>
    callAuthAndSaveToken({
      baseUrl,
      version,
      adapter,
      tokenStore,
      data: {
        client_id: clientId,
        grant_type: 'password',
        username,
        password,
        scope: 'user',
      },
    });

const callRemoveAndCleanToken = ({ baseUrl, version, adapter, tokenStore, data }) =>
  axios.request({
    method: 'post',
    baseURL: `${baseUrl}/${version}/`,
    url: 'auth/revoke',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    data: formData(data),
    adapter,
  }).then(res => res.data).then(() => {
    if (tokenStore) {
      tokenStore.setToken(null);
    }

    return Promise.resolve();
  });

const createLogoutEndpoint = ({ baseUrl, version, adapter, tokenStore }) =>
  () => {
    const token = tokenStore && tokenStore.getToken();
    const refreshToken = token && token.refresh_token;

    if (refreshToken) {
      return callRemoveAndCleanToken({
        baseUrl,
        version,
        adapter,
        tokenStore,
        data: {
          token: refreshToken,
        },
      });
    }
    // refresh_token didn't exist so the session can be considered as logged out.
    // Return resolved promise
    return Promise.resolve();
  };


const createAuthenticator = ({ baseUrl, version, clientId, adapter, tokenStore }) => (apiCall) => {
  const storedToken = tokenStore && tokenStore.getToken();

  let authentication;

  if (storedToken) {
    authentication = Promise.resolve(storedToken);
  } else {
    authentication = callAuthAndSaveToken({
      baseUrl,
      version,
      adapter,
      tokenStore,
      data: {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      },
    });
  }

  return authentication.then(authToken =>
    apiCall(authToken)
      .catch((error) => {
        let newAuthentication;

        if (error.status === 401 && authToken.refresh_token) {
          newAuthentication = callAuthAndSaveToken({
            baseUrl,
            version,
            adapter,
            tokenStore,
            data: {
              client_id: clientId,
              grant_type: 'refresh_token',
              refresh_token: authToken.refresh_token,
            },
          });
        } else {
          newAuthentication = callAuthAndSaveToken({
            baseUrl,
            version,
            adapter,
            tokenStore,
            data: {
              client_id: clientId,
              grant_type: 'client_credentials',
              scope: 'public-read',
            },
          });
        }

        return newAuthentication.then(freshAuthToken => apiCall(freshAuthToken));
      }));
};

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

const createSdkMethod = (endpoint, httpOpts, withAuthToken) =>
  (params = {}) =>
    withAuthToken((authToken) => {
      const headers = { Authorization: `${constructAuthHeader(authToken)}` };

      const { api, path } = endpoint;

      return axios.request({
        ...httpOpts,
        headers,
        params,
        url: [api, path].join('/'), // TODO Check if `api` is empty
      }).then(handleSuccessResponse).catch(handleFailureResponse);
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
    this.config = { ...defaultOpts, ...config };

    this.config.baseUrl = normalizeBaseUrl(this.config.baseUrl);

    const {
      baseUrl,
      typeHandlers,
      endpoints,
      adapter,
      clientId,
      version,
      tokenStore,
    } = this.config;

    if (!clientId) {
      throw new Error('clientId must be provided');
    }

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

    const httpOpts = {
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
      paramsSerializer,
      adapter,
    };

    const tokenStoreInstance = createTokenStore(tokenStore, clientId);

    const withAuthToken = createAuthenticator({
      baseUrl,
      version,
      clientId,
      adapter,
      tokenStore: tokenStoreInstance,
    });

    const loginEndpoint = createLoginEndpoint({
      baseUrl,
      version,
      clientId,
      adapter,
      tokenStore: tokenStoreInstance,
    });

    const logoutEndpoint = createLogoutEndpoint({
      baseUrl,
      version,
      adapter,
      tokenStore: tokenStoreInstance,
    });

    this.endpoints = [...defaultEndpoints, ...endpoints].map(endpoint => {
      // e.g. '/marketplace/users/show/' -> ['marketplace', 'users', 'show']
      const mp = methodPath(endpoint.path);

      return {
        path: [endpoint.api, endpoint.path].join('/'),
        methodPath: mp,
        methodName: mp.join('.'),
        method: createSdkMethod(endpoint, httpOpts, withAuthToken),
      }
    });

    // Assign all endpoint definitions to 'this'
    this.endpoints.forEach(({ methodPath, method }) => {
      assignDeep(this, methodPath, method);
    });

    this.login = loginEndpoint;
    this.logout = logoutEndpoint;
  }
}
