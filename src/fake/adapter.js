import _ from 'lodash';
import createTokenStore from './token_store';
import * as auth from './auth';
import * as api from './api';
import assets from './assets';

/**
   This file implements a fake adapters for testing purposes only.

   The test responses are copy-pasted from real API responses.
 */

const adapterHelper = adapterDef => config =>
  new Promise((resolve, reject) => {
    const rejectWithError = errorOrResponse => {
      if (errorOrResponse instanceof Error) {
        return reject(errorOrResponse);
      }

      const error = new Error(`Request failed with status code ${errorOrResponse.status}`);
      error.response = errorOrResponse;

      return reject(error);
    };

    adapterDef.call(null, config, resolve, rejectWithError);
  });

const parseAuthorizationHeader = value => {
  if (!_.isString(value)) {
    return {};
  }

  const splitted = value.split(' ');

  return {
    tokenType: splitted[0],
    accessToken: splitted[1],
  };
};

const requireAuth = (config, reject, tokenStore) => {
  const { accessToken, tokenType } = parseAuthorizationHeader(config.headers.Authorization);

  if (!accessToken && !tokenType) {
    return reject({
      status: 401,
      data: '{}', // FIXME This is not what the server sends

      __additionalTestInfo: 'Authorization header missing',
    });
  }

  const validToken = tokenStore.validToken(accessToken, tokenType);

  if (validToken) {
    return Promise.resolve();
  }

  return reject({
    status: 401,
    data: '{}', // FIXME This is not what the server sends
  });
};

const marketplaceApiHandler = (config, resolve, reject, tokenStore) => {
  switch (config.url) {
    case 'api/users/show':
      return requireAuth(config, reject, tokenStore).then(() => api.users.show(config, resolve));
    case 'api/marketplace/show':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.marketplace.show(config, resolve)
      );
    case 'api/listings/search':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.listings.search(config, resolve)
      );
    case 'api/own_listings/create':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.ownListings.create(config, resolve, reject)
      );

    // This returns an error for listing ID "eeeeeeee-eeee-eeee-eeee-000000000500"
    case 'api/listings/show':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.listings.show(config, resolve, reject)
      );
    default:
      throw new Error(
        `No fake adapter handler implemented for Marketplace API endpoint: ${config.url}`
      );
  }
};

const authApiHandler = (config, resolve, reject, tokenStore) => {
  switch (config.url) {
    case 'auth/token':
      return auth.token(config, resolve, reject, tokenStore);
    case 'auth/revoke':
      return requireAuth(config, reject, tokenStore).then(() =>
        auth.revoke(config, resolve, reject, tokenStore)
      );
    case 'auth/auth_with_idp':
      return auth.authWithIdp(config, resolve, reject, tokenStore);
    case 'auth/multitenant/token':
      return auth.multitenantAuthData(config, resolve, reject, tokenStore);
    case 'auth/multitenant/client_data':
      return auth.multitenantClientData(config, resolve, reject);
    case 'auth/multitenant/auth_with_idp':
      return auth.multitenantAuthWithIdpData(config, resolve, reject, tokenStore);
    default:
      throw new Error(`No fake adapter handler implemented for Auth API endpoint: ${config.url}`);
  }
};

const defaultHandler = (config, resolve, reject, tokenStore) => {
  const apiName = config.url.split('/')[0];
  switch (apiName) {
    case 'api':
      return marketplaceApiHandler(config, resolve, reject, tokenStore);
    case 'auth':
      return authApiHandler(config, resolve, reject, tokenStore);
    case 'assets':
      return assets(config, resolve, reject, tokenStore);
    default:
      throw new Error(
        `No fake adapter handler implemented for: ${config.url}. Unknown api name: ${apiName}`
      );
  }
};

/**
   Create a fake adapter instance.

   Features:

   - Handle requests
   - Store all requests (so that they can be inspected in tests)
   - Implement fake token store
*/
const createAdapter = handlerFn => {
  const requests = [];
  const tokenStore = createTokenStore();
  let offlineAfter;
  const offline = () => offlineAfter != null && requests.length > offlineAfter;
  const handler = handlerFn || defaultHandler;

  return {
    requests,
    tokenStore,
    offlineAfter: numOfRequests => {
      offlineAfter = numOfRequests;
    },
    adapterFn: adapterHelper((config, resolve, reject) => {
      // Store each request to `requests` array
      requests.push(config);

      if (offline()) {
        return reject(new Error('Network error'));
      }

      // Call router to handle the request
      return handler(config, resolve, reject, tokenStore);
    }),
  };
};

export default createAdapter;
