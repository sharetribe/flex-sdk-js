import sdkVersion from './version';

/* global window, navigator, process */
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const navigatorUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const nodeVersion =
  typeof process !== 'undefined' && typeof process.versions !== 'undefined'
    ? process.versions.node
    : '';

// User-Agent string for the SDK
// For browsers, append to the browser's user agent string,
let userAgent = `sharetribe-flex-sdk-js/${sdkVersion}`;
if (isBrowser && navigatorUserAgent !== '') {
  userAgent = `${navigatorUserAgent} ${userAgent}`;
} else if (nodeVersion !== '') {
  userAgent = `${userAgent} (node/${nodeVersion})`;
}

const sdkUserAgentString = userAgent;

export { isBrowser, sdkUserAgentString };
