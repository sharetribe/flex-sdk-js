# Serializing types to and from JSON

The SDK provides two helper functions to serialize and deserialize the
data to and from JSON while retaining the type information.

- `types.reviver`: Function to be passed to `JSON.parse`
- `types.replacer`: Function to be passed to `JSON.stringify`

Serializing the data to JSON may be necessary if you are saving the
data to
[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)
or if you have a server that fetches the data and you want to pass the
preloaded state e.g. to your [Redux
store](https://redux.js.org/recipes/server-rendering#inject-initial-component-html-and-state).

**Example:**

```js
const { reviver, replacer } = require('sharetribe-sdk').types;

const testData = {
  id: new UUID('f989541d-7e96-4c8a-b550-dff1eef25815')
};

const roundtrip = JSON.parse(JSON.stringify(testData, replacer), reviver);

expect(roundtrip.constructor.name).toEqual('UUID');
```

**Please note:** [Your own types](#your-own-types) are not serialized.

**Please note:** When the API call fails, [the error
response](./calling-the-api.md#error-response) is wrapped in Error
object. Stringifying Error object may result in unexpected results,
e.g. in some browsers `JSON.stringify(new Error("error"))` returns an
empty object. Because of this, it's recommended that you do not
stringify the whole SDK responses as is, but instead pick the
`status`, `statusText` and `data` fields from the response, and store
and stringify those.
