# Authentication

The SDK provides methods to log the user in and out.

## Login

**`sdk.login({ username: string, password: string })`**

Authenticates the user. The SDK is now able to access information that
is not available for anonymous users.

## Logout

**`sdk.logout()`**

Logs out the user.

**Example:**

Here's a full example how to log user in and out

```js
sdk
  .login({ username: 'test-user@example.com', password: 'test-secret' })
  .then(loginRes => {
    console.log('Logged in successfully');

    return sdk.currentUser.show();
  })
  .then(userRes => {
    const profile = userRes.data.data.attributes.profile;
    console.log('Current user: ${profile.firstName} ${profile.lastName}');

    return sdk.logout();
  })
  .then(() => {
    console.log('Logged out. Bye!');
  })
  .catch(res => {
    // An error occurred
    console.log(`Request failed with status: ${res.status} ${res.statusText}`);
  });
```

**Trobleshooting:** In case you're testing locally from `file:///`,
the session information may not be saved after successful login. In
this case, you should configure the SDK to use [memory-based token
store](./token-store.md#memory-store).

## Determine if user is logged in

SDK provides a helper method to define whether the user is logged in
or not:

**`authInfo()`**

Returns a Promise which value is either `null` or an object with field
`grantType`. The `grantType` value is either `'client_credentials'`,
`'refresh_token'`. The different values have the following meaning:

* `null`: user hasn't yet authenticated itself to API (i.e. hasn't
  done any requests to the API).
* Grant type `'client_credentials'`: user has "anonymous" access to the API
* Grant type `'refresh_token'`: user has logged in.

In the application code, it's enough to check that the value of
`grantType` equals to `'refresh_token'` to determine if the user has
logged in.

**Example:**

```js
sdk.authInfo().then(authInfo => {
  if (authInfo && authInfo.grantType === 'refresh_token') {
    console.log("User is logged in.");
  } else {
    console.log("User is not logged in.")
  }
};
```

**Please note:** Even thought the `authInfo` method returns a Promise,
the method does not do any API calls. The authentication information
is saved to the [token store](./token-store.md) currently in
use. Because of this the `authInfo` method be called freely as many
times as needed without a fear of firing multiple API calls.

**Please note:** The token store does not store any other information
about the user in addition to the the authentication information. If
you for example need to know the name of the logged in user, you need
to call `sdk.current_user.show()`, which calls the corresponding API
endpoint to fetch information about the currently logged in user.
