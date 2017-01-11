# README BEFORE YOU README

Each header may contain an additional tag **[DRAFT]**. It means paragraph is not ready, and the underlying code is not implemented. The content of the paragraph is just an idea  which demostrates how it should look in the future. Example code in the paragraph doesn't work, because it's not implemented. Links in the paragraph do not work.

If the header doesn't have **[DRAFT]** tag, it means that the paragraph can be considered "ready". It means that the code examples work, the underlying code that the paragraph is describing is implemented, links work, etc. However, it also means that the content can of course change through the normal PR process.

# Sharetribe SDK for JavaScript [DRAFT]

[![CircleCI](https://circleci.com/gh/sharetribe/sharetribe-sdk-js.svg?style=svg)](https://circleci.com/gh/sharetribe/sharetribe-sdk-js)

JavaScript implementation of Sharetribe SDK to provide easy access to [Sharetribe Marketplace API](./) (TODO: Add link to the API Slate documentation).

- [ ] [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) asynchronous API
- [ ] Universal: Runs in [Node.js](https://nodejs.org/) and in browser
- [ ] Direct and predictable mapping from API methods and parameters to SDK methods and parameters
- [ ] Easy authentication
- [ ] Clear documentation
- [ ] Human-readable and understandable error messages for debugging
- [ ] Structured (JSON) error messages for logging
- [ ] Access to different environments (e.g. 'test' and 'production')
- [ ] Abstracts the native HTTPS communication binginds. Uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in browser and [HTTPS module](https://nodejs.org/api/https.html) in Node.js.

# Usage [DRAFT]

``` js
var sharetribe = require('sharetribe-sdk')({
  // TODO
  // What do we need here?
  //
  // - environment? (dev/test/staging/production?)
  // - apiKey? (is this needed?)
  // - marketplaceId (is this needed?)
  // - API version?
});

sharetribe.listings.show({search: {keywords: "apartment"}}).then(function(result) {
  console.log(result.data);

  // prints =>
  //
  // [{
  //   "id": "694e130a-d72a-11e6-bf26-cec0c932ce01",
  //   "type": "listing",
  //   "attributes": {
  //     "title": "My Apartment",
  //     "description": "This is my lovely apartment in downtown Helsinki.",
  //     "created_at": Tue Jan 10 2017 11:51:22 GMT+0000 (GMT),
  //     "updated_at": Tue Jan 10 2017 13:44:12 GMT+0000 (GMT)
  //     "price": {
  //       "amount": 5000,
  //       "unit": "per-night",
  //       "currency": "USD"
  //     },
  //     "location": {
  //       "lng": "-73.940652",
  //       "lat": "40.677350",
  //       "address": "1523 Pacific St, Brooklyn, NY 11213"
  //     },
  //     "images": [
  //       {
  //         "width": 800,
  //         "height": 600,
  //         "url": "http://cdn.example.com/fooimage800x600.jpg"
  //       }
  //     ]
  //   }
  // }]

});
```

# Examples

You can find all examples under the `[examples/](./examples)` directory:

- [Hello World example in Node.js](./examples/hello-world-node)
- [Hello World example in browser](./examples/hello-world-browser)

# Installation [DRAFT]

```
npm install sharetribe-sdk
```

# Documentation [DRAFT]

Full documentation is available at [TODO Add link to Slate](./)

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
