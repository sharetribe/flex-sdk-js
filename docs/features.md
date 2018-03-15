# Features

The SDK handles handles **groundwork** such as authentication,
renewing authentication tokens and (de)serializing data to and from
JavaScript data structures, so that you don't need to worry about it.

The SDK provides:

- [Promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) asynchronous API
- Universal implementation: Runs in any JavaScript environment, including [Node.js](https://nodejs.org/), browser and React Native (only experimental support).
- Predictable mapping from SDK methods to API endpoints.
- Types, such as UUID, Money and GeoLocation. SDK handles the (de)serialization of the types when interactiong with the API and provides helpers to (de)serialize the types to JSON.
- Easy authentication.
- Way to share authentication information between client (browser) and server (Node.js).
