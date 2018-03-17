## Advanced usage

### Sharing authentication token with Express.js server and browser

In case you're running a Express.js server for server-side rendering, you need to share the authentication information between the browser and the Express.js server.

The SDK uses token stores to implement this. When you use a `browserCookieStore` in the browser and `expressCookieStore` in the server, the server and browser can share the same authentication token by reading and writing to the same cookie.

By default the SDK uses `browserCookieStore` in the browser. You don't need to do any configuration changes in the browser.

In the server, you need to configure the SDK to use `expressCookieStore`:

``` js
const express = require('express');
const cookieParser = require('cookie-parser');
const sharetribeSdk = require('sharetribe-sdk');

const app = express();
const clientId = 'your-client-id';

// The SDK expects that cookieParser middleware is in use
app.use(cookieParser());

app.get('/', (req, res) => {
  // Initialize the SDK instance
  const sdk = sharetribeSdk.createInstance({
    clientId,
    tokenStore: sharetribeSdk.tokenStore.expressCookieStore({
      clientId, req, res,
    }),
  });

  // Call the SDK to preload listings
  sdk.listings.search({ ... }).then((listingsResult) => {
    // do rendering etc.
  });
});
```

### Writing your own token store

Token store is a module that stores user's session information (i.e. access and refresh tokens).

There are some token stores that ship with the SDK:

- Browser cookie store (default)
- Express cookie store
- Memory store (mainly for testing and development)

You can also write your own token store and inject it to the SDK instance.

Any token store must implement the following methods:

#### `getToken() : Object | Promise(Object)`

`getToken` reads the token from the memory. Can return either a JS Object, or a Promise holding the Object as a value.

If `setToken` is called, the `getToken` must return the value that was set.

Example:

``` js
const store = createNewTokenStore();

store.setToken({ token: "a" })
store.getToken() // returns { token: "a" }
store.setToken({ token: "b" })
store.getToken() // returns { token: "b" }
```

#### `setToken(Object) : null | Promise`

Stores the new token. Can return either `null` or a Promise.

#### `removeToken` : null | Promise

Removes token from the store. Can return either `null` or a Promise.



# Development

Install dependencies:

```
$ yarn install
```

Build the package:

```
$ yarn run build
```

Run tests:

```
$ yarn test
```

Run linter:

```
$ yarn run lint
```

Format code (run Prettier):

```
$ yarn run format
```

# REPL

With the REPL you can test and try out the SDK with real results from the API.

To start the REPL, type:

```
> yarn run repl
```

## Globals

The following globals are available:

- `sharetribeSdk`: The SDK module
- `sdk`: SDK instance configured to connect to http://localhost:8088

## Example usage

Fetch and log all listings in a marketplace:

```
> res = sdk.marketplace.show()
> res.then((response) => console.log(response.data))
> { data:
   { id: UUID { uuid: '16c6a4b8-88ee-429b-835a-6725206cd08c' },
     type: 'marketplace',
     links: { self: '/v1/api/marketplace/show' },
     attributes:
      { name: 'Bikesoil',
        description: 'Peer to peer bike rentals in Essex.' },
     relationships: {} },
  meta: {},
  included: [] }
```
