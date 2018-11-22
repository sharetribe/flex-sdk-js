# Sharetribe Flex SDK for JavaScript

Use Sharetribe Flex Marketplace API with ease.

[![CircleCI](https://circleci.com/gh/sharetribe/flex-sdk-js.svg?style=svg&circle-token=f2209b7cd8300d10f73d359072d7f03f81bff8f4)](https://circleci.com/gh/sharetribe/flex-sdk-js)

## Table of Contents

* [What is it?](#what-is-it)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Documentation](#documentation)
* [License](#license)

## What is it?

The SDK is the **easiest** way to interact with Sharetribe Flex
Marketplace API.

It handles **groundwork** such as authentication, renewing
authentication tokens and serializing and deserializing data to and from
JavaScript data structures.

This lets you to **concentrate on building your marketplace
front-end** instead of setting up the necessary boilerplate to
communicate with the API.

## Installation

Yarn:

```sh
yarn add sharetribe-flex-sdk
```

## Usage

```js
const sharetribeSdk = require('sharetribe-flex-sdk');

// Create new SDK instance
const sdk = sharetribeSdk.createInstance({
  clientId: '<Your Client ID here>'
});

// Query first 5 listings
sdk.listings
  .query({ per_page: 5 })
  .then(res => {
    // Print listing titles
    res.data.data.forEach(listing => {
      console.log(`Listing: ${listing.attributes.title}`)
    });
  })
  .catch(res => {
    // An error occurred
    console.log(`Request failed with status: ${res.status} ${res.statusText}`);
  });
```

## Examples

See [examples/](https://github.com/sharetribe/flex-sdk-js/tree/master/examples/) directory in Github repository.

## Documentation

[Documentation can be found here](https://sharetribe.github.io/flex-sdk-js/).

## Changelog

See [CHANGELOG.md](https://github.com/sharetribe/flex-sdk-js/tree/master/CHANGELOG.md).

## License

Distributed under [The Apache License, Version 2.0](https://github.com/sharetribe/flex-sdk-js/tree/master/LICENSE)
