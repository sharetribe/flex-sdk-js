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

// Add config options, if needed.
var config = {};

var sharetribe = require('sharetribe-sdk')(config);

sharetribe.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(function(result) {
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
  // });
```

## Config options

There are a few config options that can given for the initializatio function:

``` js
var sharetribe = require('sharetribe-sdk')({

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

You can find all examples under the `[examples/](./examples)` directory:

- [Hello World example in Node.js](./examples/hello-world-node)
- [Hello World example in browser](./examples/hello-world-browser)
- [Universal example: Use the SDK in browser and server to fetch the current ISS space station location](./examples/iss)
- [REPL in Node](./examples/repl-node)

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

# Author [DRAFT]

Developed and maintained by [Sharetribe](https://www.sharetribe.com).

# License

Distributed under [The Apache License, Version 2.0](./LICENSE)
