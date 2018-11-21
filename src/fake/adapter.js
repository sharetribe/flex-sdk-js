import _ from 'lodash';
import createTokenStore from './token_store';
import * as auth from './auth';
import * as api from './api';

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

const defaultHandler = (config, resolve, reject, tokenStore) => {
  switch (config.url) {
    case 'fake-adapter://fake-api/v1/api/users/show':
      return requireAuth(config, reject, tokenStore).then(() => api.users.show(config, resolve));
    case 'fake-adapter://fake-api/v1/api/marketplace/show':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.marketplace.show(config, resolve)
      );
    case 'fake-adapter://fake-api/v1/api/listings/search':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.listings.search(config, resolve)
      );
    case 'fake-adapter://fake-api/v1/api/own_listings/create':
      return requireAuth(config, reject, tokenStore).then(() =>
        api.ownListings.create(config, resolve, reject)
      );
    case 'fake-adapter://fake-api/v1/auth/token':
      return auth.token(config, resolve, reject, tokenStore);
    case 'fake-adapter://fake-api/v1/auth/revoke':
      return requireAuth(config, reject, tokenStore).then(() =>
        auth.revoke(config, resolve, reject, tokenStore)
      );
    default:
      throw new Error(`Not implemented to Fake adapter: ${config.url}`);
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
