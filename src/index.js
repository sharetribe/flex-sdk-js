import SharetribeSdk from './sdk';
import * as types from './types';
import browserCookieStore from './browser_cookie_store';
import expressCookieStore from './express_cookie_store';
import memoryStore from './memory_store';

const createInstance = config => new SharetribeSdk(config);

// Export token stores
const tokenStore = {
  memoryStore,
  browserCookieStore,
  expressCookieStore,
};

/* eslint-disable import/prefer-default-export */
export { createInstance, types, tokenStore };
