# README BEFORE YOU README

Each header may contain an additional tag **[DRAFT]**. It means paragraph is not ready, and the underlying code is not implemented. The content of the paragraph is just an idea  which demostrates how it should look in the future. Example code in the paragraph doesn't work, because it's not implemented. Links in the paragraph do not work.

If the header doesn't have **[DRAFT]** tag, it means that the paragraph can be considered "ready". It means that the code examples work, the underlying code that the paragraph is describing is implemented, links work, etc. However, it also means that the content can of course change through the normal PR process.

# Sharetribe SDK for JavaScript [DRAFT]

[![CircleCI](https://circleci.com/gh/sharetribe/sharetribe-sdk-js.svg?style=svg)](https://circleci.com/gh/sharetribe/sharetribe-sdk-js)

JavaScript implementation of Sharetribe SDK to provide easy access to [Sharetribe Marketplace API](./) (TODO: Add link to the API Slate documentation).

- [X] [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) asynchronous API
- [X] Universal: Runs in [Node.js](https://nodejs.org/) and in browser
- [X] Direct and predictable mapping from API methods and parameters to SDK methods and parameters
- [X] Encodes/decodes basic types, such as UUID, Money and GeoLocation.
- [X] Easy authentication
- [ ] Clear documentation
- [ ] Human-readable and understandable error messages for debugging
- [ ] Structured (JSON) error messages for logging
- [ ] Access to different environments (e.g. 'test' and 'production')
- [X] Abstracts the native HTTPS communication bindings. Uses [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in browser and [HTTPS module](https://nodejs.org/api/https.html) in Node.js. Let's [Axios](https://github.com/mzabriskie/axios/) to do the heavy-lifting.

## Basic usage

``` js

var sharetribeSdk = require('sharetribe-sdk');
var UUID = sharetribeSdk.types.UUID;
var LatLng = sharetribeSdk.types.LatLng;
var LatLngBounds = sharetribeSdk.types.LatLngBounds;

var sdk = sharetribeSdk.createInstance({
  clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
});

// Show marketplace
sdk.marketplace.show({ id: new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01') }).then(function(result) {
  console.log(result);

  // prints =>
  //
  // { status: 200,
  //   statusText: 'OK',
  //   data:
  //   { data:
  //     { id: UUID { uuid: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' },
  //       type: 'marketplace',
  //       attributes:
  //       { name: 'Awesome skies.',
  //         description: 'Meet and greet with fanatical sky divers.' },
  //       relationships: {} },
  //     meta: {},
  //     included: [] },
  //   }
});

// Search listings by location
sdk.listings.search({
  marketplace_id: new UUID('16c6a4b8-88ee-429b-835a-6725206cd08c'),
  origin: new LatLng(12.34, 56.67),
  bounds: new LatLngBounds(new LatLng(47, -124), new LatLng(17, -68))
}).then(function(result) {
  console.log(result);

  // prints =>
  //
  // { status: 200,
  //   statusText: 'OK',
  //   data:
  //    { data: [
  //      { id: UUID { uuid: '9009efe1-25ec-4ed5-9413-e80c584ff6bf' },
  //        type: 'listing',
  //        links: { self: '/v1/api/listings/show?id=9009efe1-25ec-4ed5-9413-e80c584ff6bf' },
  //        attributes:
  //         { title: 'Nishiki 401',
  //           description: '27-speed Hybrid. Fully functional.',
  //           address: '230 Hamilton Ave, Staten Island, NY 10301, USA',
  //           geolocation: LatLng { lat: 40.64542, lng: -74.08508 } } },
  //        relationships: { author: [Object], marketplace: [Object] } },
  //      { id: UUID { uuid: '5e1f2086-522c-46f3-87b4-451c6770c833' },
  //          type: 'listing',
  //          links: { self: '/v1/api/listings/show?id=5e1f2086-522c-46f3-87b4-451c6770c833' },
  //          attributes:
  //           { title: 'Pelago Brooklyn',
  //             description: 'Goes together perfectly with a latte and a bow tie.',
  //             address: '230 Hamilton Ave, Staten Island, NY 10301, USA',
  //             geolocation: LatLng { lat: 40.64542, lng: -74.08508 } },
  //          relationships: { author: [Object], marketplace: [Object] } },
  //      { id: UUID { uuid: 'c6ff7190-bdf7-47a0-8a2b-e3136e74334f' },
  //          type: 'listing',
  //          links: { self: '/v1/api/listings/show?id=c6ff7190-bdf7-47a0-8a2b-e3136e74334f' },
  //          attributes:
  //           { title: 'Peugeot eT101',
  //             description: '7-speed Hybrid',
  //             address: '230 Hamilton Ave, Staten Island, NY 10301, USA',
  //             geolocation: LatLng { lat: 40.64542, lng: -74.08508 } },
  //          relationships: { author: [Object], marketplace: [Object] } } ],
  //      meta: {},
  //      included: [] } }
});
```

## Methods and parameters [DRAFT]

The SDK provides direct mapping of Marketplace API endpoints to SDK methods. Marketplace API endpoints are the endpoints with URL starting with prefix `/api`.

For example:

* `GET /api/marketplace/show => sdk.marketplace.show(queryParams: {})`
* `GET /api/listings/query   => sdk.listings.query(queryParams: {})`
* `GET /api/users/me         => sdk.users.me(queryParams: {})`
* `POST /api/listings/create => sdk.listings.show(bodyParams: {}, queryParams: {})`

Please note the different number of parameters (arity):

* `GET` endpoint SDK method arity is 1. The first parameter is the `queryParams`
* `POST` endpoint SDK method arity is 2. The first parameter is the `bodyParams`, second is the `queryParams`

To see what are the expected parameters for each endpoint, please see the [API documentation]() (TODO Add link to API documentation).

The `/auth` endpoints don't have direct SDK mapping. Instead, you should use these two SDK methods:

* `sdk.login({username: string, password: string})`
* `sdk.logout()`

## Response format

SDK returns always a `Promise`. The value of the Promise differs whether the response is successful (fulfilled) or failure (rejected).

### Success response

A successful response will have the following format:

```
{
  status: 200,
  statusText: 'OK',
  data: // The data returned by the API
}
```

### Error response

A error response will have the following format:

```
{
  status: <HTTP Status code, 4xx or 5xx>,
  statusText: <HTTP Status text>,
  data: // The data returned by the API, for example:
  {
    errors: [
      {
        status: 400,
        code: 'bad-request',
        title: 'Bad request',
        details: { // Not part of the public API
          error: {
            'body-params': {
              title: 'missing-required-key'
            }
          }
        }
      }
    ]
  },
  details: { // Not part of the public API
    ctx: {
      // The internal context object used by SDK
    },
    config: {
      // The internal configurations object used by SDK
    }
  }
}
```

Please note that the `details` (both of them) are not part of the public API. This means that:

- You can use `details` for debugging and error tracking
- You SHOULD NOT write code that depends on the content of `details`.
- The content of `details` is not well specified and may change

## Config options

There are a few config options that can given for the initializatio function:

``` js
var sdk = require('sharetribe-sdk').createInstance({

  // The API ClientID (mandatory)
  clientId: "08ec69f6-d37e-414d-83eb-324e94afddf0",

  // Token store
  //
  // Where the authentication token is stored.
  //
  // Default: sharetribeSdk.tokenStore.browserCookieStore
  //
  tokenStore: sharetribeSdk.tokenStore.expressCookieStore,

  // The API base URL
  baseUrl: "https://api.sharetribe.com/v1/",

  // List of custom type handlers.
  typeHandlers: [
    {
      type: UUID,
      customType: MyUuidType,

      // Writer fn type signature must be:
      // type -> customType
      //
      // E.g.
      // UUID -> MyUuidType
      writer: v => new UUID(v.myUuid),

      // Reader fn type signature must be:
      // customType -> type
      //
      // E.g.
      // MyUuidType -> UUID
      reader: v => new MyUuidType(v.uuid),
    }
  ],

  // List of additional endpoints
  endpoints: [
    {
       // This will create a new sdk method: sdk.listing.show() -> Promise
       path: 'listing/show'
    }
  ],
});
```

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

## Examples

You can find all examples under the `[examples/](./examples)` directory:

- [Fetch listings form local server (localhost:8080)](./examples/local-server)
- [Location search from local server (localhost:8080)](./examples/location-search)
- [Image upload from browser to local server (localhost:8080)](./examples/image-upload)

# Installation

```
npm install sharetribe-sdk --save
```

# Documentation [DRAFT]

Full documentation is available at [TODO Add link to Slate](./)

## Types

The SDK provides some basic types that complement the data types that JavaScript supports out-of-the box. The type conversion is handled by the SDK under the hood.

The full list of supported types:

* UUID - Represents UUIDs ([Universally unique identifiers](https://en.wikipedia.org/wiki/Universally_unique_identifier))
* LatLng(lat: number, lng: number) - Geolocation point
* LatLngBounds(ne: LatLng, sw: LatLng) - Bounding box limited by North-East and South-West corners
* Money(amount: number, currency: string) - Money with currency (amount is integer representing the amount in minor unit, i.e. cents)

### Serializing to JSON

The SDK provides two functions that help you to save the type information even when the data is serialized to JSON and deserialized from JSON:

- `types.reviver`: Function to be passed to `JSON.parse`
- `types.replacer`: Function to be passed to `JSON.stringify`

Example:

```js
const { types: { reviver, replacer } } = require('sharetribe-sdk');

const testData = {
  id: new UUID('f989541d-7e96-4c8a-b550-dff1eef25815')
};

const roundtrip = JSON.parse(JSON.stringify(testData, replacer), reviver);

expect(roundtrip.constructor.name).toEqual('UUID');
```

### Using your own types

If you want to use your own types instead of the types that the SDK provides, the SDK implements a mechanism for you to pass custom conversion methods which let's you convert SDK types to your own types.

The following example converts SDK's `UUID` class to `MyUuid`:

``` js
class MyUuid {
  constructor(uuid) {
    this.myUuid = uuid;
  }
}

const handlers = [{
  type: UUID,
  customType: MyUuid,
  reader: v => new MyUuid(v.uuid), // reader fn type: UUID -> MyUuid
  writer: v => new UUID(v.myUuid), // writer fn type: MyUuid -> UUID
}];

const sdk = sharetribe({}, [], [], handlers);
```

# Development

Install dependencies:

```
$ npm install
```

Build the package:

```
$ npm run build
```

Run tests:

```
$ npm test
```

Run linter:

```
$ npm run lint
```

Use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) conventions.

# REPL

With the REPL you can test and try out the SDK with real results from the API.

To start the REPL, type:

```
> npm run repl
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

# Author

Developed and maintained by [Sharetribe](https://www.sharetribe.com).

# License

Distributed under [The Apache License, Version 2.0](./LICENSE)
