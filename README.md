# README BEFORE YOU README

Each header may contain an additional tag **[DRAFT]**. It means paragraph is not ready, and the underlying code is not implemented. The content of the paragraph is just an idea  which demostrates how it should look in the future. Example code in the paragraph doesn't work, because it's not implemented. Links in the paragraph do not work.

If the header doesn't have **[DRAFT]** tag, it means that the paragraph can be considered "ready". It means that the code examples work, the underlying code that the paragraph is describing is implemented, links work, etc. However, it also means that the content can of course change through the normal PR process.

# Sharetribe SDK for JavaScript [DRAFT]

[![CircleCI](https://circleci.com/gh/sharetribe/sharetribe-sdk-js.svg?style=svg)](https://circleci.com/gh/sharetribe/sharetribe-sdk-js)

JavaScript implementation of Sharetribe SDK to provide easy access to [Sharetribe Marketplace API](./) (TODO: Add link to the API Slate documentation).

- [X] [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) asynchronous API
- [X] Universal: Runs in [Node.js](https://nodejs.org/) and in browser
- [ ] Direct and predictable mapping from API methods and parameters to SDK methods and parameters
- [X] Encodes/decodes basic types, such as UUID, Money and GeoLocation.
- [ ] Easy authentication
- [ ] Clear documentation
- [ ] Human-readable and understandable error messages for debugging
- [ ] Structured (JSON) error messages for logging
- [ ] Access to different environments (e.g. 'test' and 'production')
- [X] Abstracts the native HTTPS communication bindings. Uses [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in browser and [HTTPS module](https://nodejs.org/api/https.html) in Node.js. Let's [Axios](https://github.com/mzabriskie/axios/) to do the heavy-lifting.

# Basic usage

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

## Config options

There are a few config options that can given for the initializatio function:

``` js
var sdk = require('sharetribe-sdk').createInstance({

  // The API ClientID (mandatory)
  clientId: "08ec69f6-d37e-414d-83eb-324e94afddf0",

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

# Examples

**Please note!** The examples **ARE CURRENTLY BROKEN** due to the recent changes. They will be fixed very soon.

You can find all examples under the `[examples/](./examples)` directory:

- [Hello World example in Node.js](./examples/hello-world-node)
- [Hello World example in browser](./examples/hello-world-browser)
- [Universal example: Use the SDK in browser and server to fetch the current ISS space station location](./examples/iss)
- [Fetch listings form local server (localhost:8080)](./examples/local-server)

# Installation [DRAFT]

```
npm install sharetribe-sdk
```

# Documentation [DRAFT]

Full documentation is available at [TODO Add link to Slate](./)

## Types [DRAFT]

The SDK provides some basic types that complement the data types that JavaScript supports out-of-the box. The type conversion is handled by the SDK under the hood.

The full list of supported types:

* UUID - Represents UUIDs ([Universally unique identifiers](https://en.wikipedia.org/wiki/Universally_unique_identifier)) // TODO Add link to doc
* TODO: Add more types here...

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
> res = sdk.marketplace.show({marketplace_id: '16c6a4b8-88ee-429b-835a-6725206cd08c'})
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

# Author [DRAFT]

Developed and maintained by [Sharetribe](https://www.sharetribe.com).

# License

Distributed under [The Apache License, Version 2.0](./LICENSE)
