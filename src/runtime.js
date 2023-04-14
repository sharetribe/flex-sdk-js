import sdkVersion from './version';

/* global window, process */
const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const nodeVersion =
  typeof process !== 'undefined' && typeof process.versions !== 'undefined'
    ? process.versions.node
    : '';

// User-Agent string for the SDK
// Only server-side, as modifying browser UA string causes
// side effects.
let userAgent = `sharetribe-flex-sdk-js/${sdkVersion}`;
if (isBrowser) {
  userAgent = null;
} else if (!isBrowser && nodeVersion !== '') {
  userAgent = `${userAgent} (node/${nodeVersion})`;
}

const sdkUserAgentString = userAgent;

export { isBrowser, sdkUserAgentString };
