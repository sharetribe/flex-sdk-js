# Token store

Token store is a pluggable SDK module, that stores the user's session information.

The SDK ships with three token store implementations. They are:

### Browser cookie store

Reads and stores the session information to HTTP cookie. This token store
is used by default, if SDK is used in environment where cookie are
available (i.e. browser).

The constructor takes the following options:

| Key | Descriotion |
| --- | ----------- |
| `clientId` | The clientId |
| `secure` | Boolean. When `true`, the cookie will be transferred only with HTTPS requests |

**Please note:** Some browsers, like Google Chrome, do not set cookies
when using `file:///` protocol. In this case, you can use [Memory
store](#memory-store).

### Express cookie store

This token store is meant to be used with
[Express.js](https://expressjs.com/) server. Read and stores the
session information to HTTP cookie.

The constructor takes the following options:

| Key | Descriotion |
| --- | ----------- |
| `clientId` | The clientId |
| `req` | Express.js request |
| `res` | Express.js response |
| `secure` | Boolean. When `true`, the cookie will be transferred only with HTTPS requests |

**Example:** Create new SDK instance with Express cookie store:

``` js
const express = require('express');
const cookieParser = require('cookie-parser');
const sharetribeSdk = require('sharetribe-flex-sdk');

const app = express();

// The token store expects that cookieParser middleware is in use
app.use(cookieParser());

app.get('/', (req, res) => {
  // Initialize the SDK instance
  const sdk = sharetribeSdk.createInstance({
    clientId: "<your Client ID>",
    baseUrl: "<your Base URL>",
    tokenStore: sharetribeSdk.tokenStore.expressCookieStore({
      clientId: "<your Client ID>",
      req,
      res,
      secure: true // Set to true, if you are using HTTPS
    }),
  });

  // Call the SDK to preload listings
  sdk.listings.search({ ... }).then((listingsResult) => {
    // do rendering etc.
  });
});
```

**Serious security note:** Always create a new SDK instance per each request! Do not store and reuse the SDK instance or you may end up mixing user sessions.

**❌ Example:** DON'T DO THIS!

``` js
// DON'T DO THIS!
//
let sdk;

app.get('/', (req, res) => {
  // Initialize the SDK instance
  sdk = sharetribeSdk.createInstance({
    clientId: "<your Client ID>",
    baseUrl: "<your Base URL>",
    tokenStore: sharetribeSdk.tokenStore.expressCookieStore({
      clientId: "<your Client ID>",
      req,
      res,
      secure: true // Set true, if you are using HTTPS
    }),
  });

  // Call the SDK to preload listings
  sdk.listings.search({ ... }).then((listingsResult) => {
    // do rendering etc.
  });
});

app.get('/something_else', (req, res) => {
  // OOPS! The previous user session is used here!
  sdk.listings.search({ ... }).then((listingsResult) => {
    // do rendering etc.
  });
});

```

## Memory store

Memory store stores the session information to application memory. The session information is lost when the page is refreshed.

This store is mainly used for testing and development.

In case you are testing locally from `file:///`, you may need to use memory store, because some browsers (e.g. Google Chrome) do not save cookies when using `file:///` making the default [Browser cookie store](#browser-cookie-store) unusable.
