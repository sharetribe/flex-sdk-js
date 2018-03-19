# Writing your own token store

The SDK ships with three built-in token store implementations: Browser
cookie store, Express cookie store and memory store. However, in some
cases you may need to write your own cookie store, for example, if you
want to save the cookie in some other location, such as
[LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage).

## Interface

The Token store interface has three methods. Any token store
implementation must implement all of them:

**`setToken(Object) : null | Promise(null)`**

Stores the new token. Returns either `null` or a `Promise`.

**`getToken() : Object | Promise(Object)`**

Reads the token from the store. Returns either a token or a Promise
holding the token as a value.

**`removeToken : null | Promise(null)`**

Removes the stored token. Returns either `null` or a Promise.

## Examples

See the built-in token store implementations.
