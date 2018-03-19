# Authentication

The SDK provides methods to log the user in and out and determine if
the user is already logged in or not.

## Login

**`sdk.login({ username: string, password: string }) : Promise`**

Logs in the user and returns a Promise.

The session information will be saved to the SDK instance when the
Promise is resolved. Subsequest requests will be made as the logged in
user.

## Logout

**`sdk.logout() : Promise`**

Logs out the user and returns a Promise.

**Trobleshooting:** In case you're testing locally from `file:///`,
the session information may not be saved after successful login. In
this case, you should configure the SDK to use [memory-based token
store](./token-store.md#memory-store).

## Determine if user is logged in

**`sdk.authInfo() : Promise(Object)`**

Returns a Promise with an Object as a value. The object may contain a
`grantType` field with either `'client_credentials'`,
`'refresh_token'` as a value. The different values have the following
meanings:

* No grant type: user hasn't yet authenticated itself (i.e. hasn't
  done any requests to the API).
* Grant type `'client_credentials'`: user has authenticated as an
  anonymous user (i.e. has not logged in)
* Grant type `'refresh_token'`: user has logged in.

To determine if the user is logged in, check if `grantType` equals
`'refresh_token'`.

**Example:**

```js
sdk.authInfo().then(authInfo => {
  if (authInfo && authInfo.grantType === 'refresh_token') {
    console.log("User is logged in.");
  } else {
    console.log("User is NOT logged in.")
  }
};
```

**Please note:** Even thought the `authInfo` method returns a Promise,
the method does not call the API. The authentication information is
saved locally in the [token store](./token-store.md).

**Please note:** The token store does not store any other user
information in addition to the authentication token. If you need, for
example, to know the name of the logged in user, you need to call
`sdk.current_user.show()`, which calls the corresponding API endpoint.

## Example


Here's a full example how to log user in and out and determine the
current authentication status.

**Example:**

```js
const isLoggedIn = authInfo => authInfo && authInfo.grantType === 'refresh_token';

sdk.authInfo().then(authInfo => {
    console.log(`Logged in: ${isLoggedIn(authInfo)}`)
    // prints: "Logged in: false"

    return sdk.login({ username: 'test-user@example.com', password: 'test-secret' });
  }).then(loginRes => {
    console.log("Login successful!");

    return sdk.authInfo();
  }).then(authInfo => {
    console.log(`Logged in: ${isLoggedIn(authInfo)}`);
    // prints: "Logged in: true"

    return sdk.currentUser.show();
  }).then(userRes => {
    const profile = userRes.data.data.attributes.profile;
    console.log(`Current user: ${profile.firstName} ${profile.lastName}`);

    return sdk.logout();
  }).then(logoutRes => {
    console.log("Logged out!");

    return sdk.authInfo();
  }).then(authInfo => {
    console.log(`Logged in: ${isLoggedIn(authInfo)}`)
    // prints: "Logged in: false"
  }).catch(res => {
    // An error occurred
    console.log(`Request failed with status: ${res.status} ${res.statusText}`);
  });
```
