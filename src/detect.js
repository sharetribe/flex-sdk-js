/**

   Collection of functions for detecting browser/server capabilities.

 */

/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

export const hasBrowserCookies = () =>
  typeof document === 'object' && typeof document.cookie === 'string';
