/**

   Collection of functions for detecting browser/server capabilities.

 */

/* eslint-disable import/prefer-default-export */

// eslint-disable-next-line no-undef
export const hasBrowserCookies = () => typeof document === 'object' && typeof document.cookies === 'string';
