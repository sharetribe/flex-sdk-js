# Calling the API

## API Endpoints

The SDK provides direct mapping from API endpoints to SDK methods.

For example:

`GET /api/marketplace/show` maps to `sdk.marketplace.show(...)`

`GET /api/listings/query` maps to `sdk.listings.query(...)`

`POST /api/own_listings/create` maps to `sdk.ownListings.create(...)`

## Parameters

You can pass a set of parameters to the SDK method you call. The
*query* endpoints take one parameter, where as the *command* endpoints
take three parameters.

**Please note:** The SDK does not validate the parameters. The
parameter validation is only done in the client side. In case of
invalid parameters, the request fill fail.

### Query method parameters

The *query* (GET) methods take only one parameter:

* `queryParams`: Object of query parameters

**Example:**

```js
sdk.listings.query({perPage: 5})

// Calls GET /api/listings/query?perPage=5
```

The `queryParams` is optional. If the endpoint doesn't require any
query parameters, you can call the SDK method without any parameters.

### Command method parameters

The *command* (POST) methods take three parameters:

* `bodyParams`: Object of body parameters
* `queryParams`: Object of query parameters
* `opts`: Additional options

**Example:**

```js
sdk.ownListings.create({title: 'New listings', price: new Money(5000, 'USD')}, {expand: true});

// Calls POST /api/own_listings/create?expand=true
// with title and price serialized in the request body
```

All parameters are optional. If the endpoint doesn't require any body
parameters, query parameters or options, you can call the SDK method
without any parameters.

If you wonder what the `new Money(...)` is, have a look at [Types](./types.md).

### Command method options

The third parameter for *command* methods is `opts`.

Here's a list of available `opts`:

* `onUploadProcess`: Takes a callback function that is called with [ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent).

**Example:**

```js
const logProgress = (progressEvent) => {
  const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
  console.log(percentCompleted + '% completed');
}

sdk.listings.uploadImage({ image: file }, {}, { onUploadProgress: logProgress })
```

## Response

Calling any SDK method will always return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). The value of the Promise differs whether the request was successful or error. In case of successful request the Promise will be *fulfilled* where as in case of error the Promise will be *rejected*.

**Example:**

```js
const promise = sdk.listings.query();

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

The API returns the data always in the following format:

```
{
  data: // Either an array of resources or just a single resource
  meta: {} // Object containing metadata, such as pagination information
  included: [] // Array of included responses
}
```

**Example:** Response from query that returns multiple listings.

```
{
  status: 200,
  statusText: 'OK',
  data: {
    data: [
      {
        id: '5a8d820f-8cb9-4855-96bf-5a6e1db31362',
        type: 'listing',
        attributes: {
          title: '...'
          description: '...',

          // other attributes here ...
        },
        relationships: {
          author: {
            data: {
              id: '...',
              type: 'user'
            }
          },
          images: {
            data: [
              {
                id: '...',
                type: 'image'
              }

              // other listing images here ...
            ]
          }
        }
      }
    ],
    meta: {
      totalItems: 210,
      totalPages: 210,
      page: 1,
      perPage: 1
    },
    included: [
      {
        id: '...',
        type: 'image',
        attributes: { ... }
      },
      {
        id: '...' ,
        type: 'user',
        attributes: { ... }
      }

      // other included resources here ...
    ]
  }
}
```

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

The error value is always an `instanceof` [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

**Please note** that the content of the `details` is not part of the public API. This means that:

- You can use `details` for debugging and error tracking.
- You SHOULD NOT write production code that depends on the content of `details`.
- The content of `details` is not well specified and will change in the future.

## API documentation

Please see the [API documentation](https://flex-api-docs-preview.sharetribe.com/), for more information about the available endpoints, parameters and the response format.
