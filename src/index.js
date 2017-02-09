import SharetribeSdk from './sdk';
import * as types from './types';
import browserCookieStore from './browser_cookie_store';

const createInstance = config =>
  new SharetribeSdk(config);

// Export token stores
const tokenStore = {
  browserCookieStore,
};

/* eslint-disable import/prefer-default-export */
export {
  createInstance,
  types,
  tokenStore,
};
