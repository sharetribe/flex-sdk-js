# Query parameter serialization

The SDK helps users serialize query parameters from a JavaScript object to a query string. It exposes two helper functions:

- `sharetribeSdk.util.objectQueryString`
- `sharetribeSdk.util.queryString`

## `sharetribeSdk.util.objectQueryString`

Some endpoints in the Sharetribe Marketplace API require a specific syntax that allows
passing one or more key-value pairs as the value of a single query parameter.
The keys and values are colon-separated whereas the pairs are separated by
semicolons. For example, when requesting custom image variants:

``` js
sdk.listings.show({
  id: listingId,
  include: ['images'],
  'fields.image': ['variants.my-variant'],
  'imageVariant.my-variant': 'w:640;h:1280;fit:scale'
}).then(res => {
  // res.data contains the response data
});
```

To simplify building requests like these, the SDK provides a utility method:
`sharetribeSdk.util.objectQueryString`. It serializes an object into the correct
string syntax. Using this method, the request above can be written as follows:

``` js
sdk.listings.show({
  id: listingId,
  include: ['images'],
  'fields.image': ['variants.my-variant'],
  'imageVariant.my-variant': sharetribeSdk.util.objectQueryString({
    w: 640,
    h: 1280,
    fit: 'scale'
  })
}).then(res => {
  // res.data contains the response data
});
```

## `sharetribeSdk.util.queryString`

The SDK exposes the `sharetribeSdk.util.queryString` function, which takes a JavaScript object and returns a query string. For example:

```js
sharetribeSdk.util.queryString({
  id: new UUID('d89795b4-4a8d-4969-8a9c-54e95729644d'),
  include: ['images'],
  'fields.image': ['variants.my-variant'],
  'imageVariant.my-variant': sharetribeSdk.util.objectQueryString({
    w: 640,
    h: 1280,
    fit: 'scale'
  })
})

// Returns: 'id=d89795b4-4a8d-4969-8a9c-54e95729644d&include=images&fields.image=variants.my-variant&imageVariant.my-variant=w%3A640%3Bh%3A1280%3Bfit%3Ascale'
```

Normally, you don't need to call `sharetribeSdk.util.queryString` manually. The following two calls are equal:

```js
sdk.listings.show(
  sharetribeSdk.util.queryString({
    id: new UUID('d89795b4-4a8d-4969-8a9c-54e95729644d'),
    include: ['images'],
    'fields.image': ['variants.my-variant'],
    'imageVariant.my-variant': sharetribeSdk.util.objectQueryString({
      w: 640,
      h: 1280,
      fit: 'scale'
    })
  })
)
```

```js
sdk.listings.show({
  id: listingId,
  include: ['images'],
  'fields.image': ['variants.my-variant'],
  'imageVariant.my-variant': sharetribeSdk.util.objectQueryString({
    w: 640,
    h: 1280,
    fit: 'scale'
  })
})
```

`sharetribeSdk.util.queryString` takes the query parameters as a string, object, or an array of strings or objects.

Examples:

String query parameter is returned as is:

```js
sharetribeSdk.util.queryString('id=d89795b4-4a8d-4969-8a9c-54e95729644d')

// Returns: 'id=d89795b4-4a8d-4969-8a9c-54e95729644d'
```

Object is serialized:

```js
sharetribeSdk.util.queryString({page: 10, perPage: 20})

// Returns: 'page=10&perPage=20'
```

Array of query parameter parts:

```js
sharetribeSdk.util.queryString(['id=d89795b4-4a8d-4969-8a9c-54e95729644d', {page: 10, perPage: 20}])

// Returns: 'id=d89795b4-4a8d-4969-8a9c-54e95729644d&page=10&perPage=20'
```

Query parameter parts are merged left-to-right:

```js
sharetribeSdk.util.queryString(['page=3', {page: 15, perPage: 20}])

// Returns: 'page=15&perPage=20'
```
