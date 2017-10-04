import { hasBrowserCookies } from './detect';
import browserCookieStore from './browser_cookie_store';
import memoryStore from './memory_store';

/* eslint-disable import/prefer-default-export */

export const createDefaultTokenStore = (tokenStore, clientId, secure) => {
  if (hasBrowserCookies()) {
    return browserCookieStore({ clientId, secure });
  }

  // Token store was not given and we can't use browser cookie store.
  // Default to in-memory store.
  return memoryStore();
};
