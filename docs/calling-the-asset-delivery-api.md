# Calling the Asset Delivery APIs

## SDK methods

The [Asset Delivery
API](https://www.sharetribe.com/api-reference/asset-delivery-api.html) allows
retrieving the data of a single asset or a set of assets by alias or by version.
The SDK has corresponding methods for each case.

### assetByAlias()

The `assetByAlias()` method retrieves data for a single asset given a version
alias. It takes an object as its argument and the object must contain:

* `alias`: currently must always have the value `latest`
* `path`: the path of the asset

For example:

```js
const promise = sdk.assetByAlias({
  alias: "latest",
  path: "/content/translations.json"
});
```

### assetByVersion()

The `assetByVersion()` method retrieves data for a single asset given a version
string. It takes an object as its argument and the object must contain:

* `version`: the version string
* `path`: the path of the asset

For example:

```js
const promise = sdk.assetByAlias({
  version: "ESz8ULLX68PiENQV",
  path: "/content/translations.json"
});
```

### assetsByAlias()

The `assetsByAlias()` method retrieves data for a set of assets using the
`latest` alias. It takes an object as its argument and the object must contain:

* `alias`: currently must always have the value `latest`
* `paths`: an array of asset paths

For example:

```js
const promise = sdk.assetsByAlias({
  alias: "latest",
  paths: ["/content/translations.json", "/design/layout.json"]
});
```

Please note that the order of the returned assets may not be the same as the order of `paths`.

### assetsByVersion()

The `assetsByVersion()` method retrieves data for a set of assets given a
version string. It takes an object as its argument and the object must contain:

* `version`: the version string
* `paths`: an array of asset paths

For example:

```js
const promise = sdk.assetsByAlias({
  version: "ESz8ULLX68PiENQV",
  paths: ["/content/translations.json", "/design/layout.json"]
});
```

Please note that the order of the returned assets may not be the same as the order of `paths`.

## Responses

Calling any Asset Delivery API SDK method will always return a
[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
The value of the Promise differs whether the request was successful or error. In
case of successful request the Promise will be *fulfilled* where as in case of
error the Promise will be *rejected*.

**Example:**

```js
const promise = sdk.assetByAlias({ alias: "latest", "path": "/content/translations.json" });

// Handle success response
promise.then(response => { console.log(response)} );

// Handle error response
promise.catch(response => { console.log(response)} );
```

### Success response

A successful response will have the following format:

```
{
  status: 200,
  statusText: 'OK',
  data: // The data returned by the API. Object.
}
```

The response `data` key will not contain any data types beyond the data types
that JSON supports, unlike responses returned by the [SDK methods for the
Marketplace API](./calling-the-api.md).

The API returns the data always in the following format:

```
{
  data: // Either an array of jsonAsset resources or just the data for a single asset
  meta: {} // Object containing metadata, such as version information
  included: [] // Array of included resources
}
```

See the [Asset Delivery API
reference](https://www.sharetribe.com/api-reference/asset-delivery-api.html) for
more information about the response data format. Note that the data inside the
`data` key differs depending on whether a single asset or a set of assets are
queried.

### Error response

An error response will have the following format:

```
{
  status: <HTTP Status code, 4xx or 5xx>,
  statusText: <HTTP Status text>,
  data: // The data returned by the API, for example:
  {
    errors: [
      {
        status: <HTTP Status code, 4xx or 5xx>,
        code: // error code
        title: <HTTP Status text>,
        details: {
          // Additional details, not part of the public API.
        }
      }
    ]
  }
}
```

The error value is always an `instanceof`
[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

**Please note** that the content of the `details` is not part of the public API.
This means that:

- You can use `details` for debugging and error tracking.
- You SHOULD NOT write production code that depends on the content of `details`.
- The content of `details` is not well specified and will change in the future.

## Asset Delivery API documentation

For more information about the Asset Delivery API, see the [reference
documentation
here](https://www.sharetribe.com/api-reference/asset-delivery-api.html).
