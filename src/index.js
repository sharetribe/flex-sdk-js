import SharetribeSdk from './sdk';
import MultitenantSharetribeSdk from './multitenant_sdk';
import * as types from './types';
import browserCookieStore from './browser_cookie_store';
import expressCookieStore from './express_cookie_store';
import memoryStore from './memory_store';
import { read, write } from './serializer';
import { objectQueryString } from './utils';

const createInstance = config => new SharetribeSdk(config);
const createMultitenantInstance = config => new MultitenantSharetribeSdk(config);

// Export token stores
const tokenStore = {
  memoryStore,
  browserCookieStore,
  expressCookieStore,
};

// Export Transit serialization helpers
const transit = { read, write };

// Export util functions
const util = { objectQueryString };

/* eslint-disable import/prefer-default-export */
export { createInstance, createMultitenantInstance, types, tokenStore, transit, util };
