# Authentication

The SDK provides methods to log the user in and out and determine if
the user is already logged in or not.

## Login

**`sdk.login({ username: string, password: string }) : Promise`**

Logs in the user and returns a Promise.

The session information will be saved to the SDK instance when the
Promise is resolved. Subsequent requests will be made as the logged in
user.

## Logout

**`sdk.logout() : Promise`**

Logs out the user and returns a Promise.

**Trobleshooting:** In case you're testing locally from `file:///`,
the session information may not be saved after successful login. In
this case, you should configure the SDK to use [memory-based token
store](./token-store.md#memory-store).

## Login As

**`sdk.loginAs({ code: string, redirect_uri: string, code_verifier: string }) : Promise`**

Logs in the marketplace operator as the marketplace user and returns a Promise.

The session information will be saved to the SDK instance when the
Promise is resolved. Subsequent requests will be made as the logged in
user.

## Login with IdP

**`sdk.loginWithIdp({ idpId: string, idpClientId: string, idpToken: string }) : Promise`**

Logs in the user with information from an identity provider (e.g. Facebook) and
returns a Promise. User can be authenticated if the `idpToken` can be verified
and an identity provider account resolved from the token is associated with a
Sharetribe account or if an email address resolved from the token matches a verified
email of a Sharetribe account.

`sdk.loginWithIdp` requires that the SDK instance is initialized with a
`clientSecret` attribute.

The session information will be saved to the SDK instance when the
Promise is resolved. Subsequent requests will be made as the logged in
user.

## Determine if user is logged in

**`sdk.authInfo() : Promise(Object)`**

Returns a Promise with an Object as a value. The object may contain the following fields:

- `scopes`: an array containing the scopes associated with the currently stored token
- `isAnonymous`: a boolean denoting if the currently stored token only allows public read access
- `isLoggedInAs`: a boolean denoting if the marketplace operator is logged in as a marketplace user

To determine if the user is logged in, check if `isAnonymous` equals
`false`.

**Example:**

```js
sdk.authInfo().then(authInfo => {
  if (authInfo && authInfo.isAnonymous === false) {
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

## Authentication example

Here's a full example how to log user in and out and determine the
current authentication status.

**Example:**

```js
const isLoggedIn = (authInfo) => authInfo && authInfo.isAnonymous === false;

sdk
  .authInfo()
  .then((authInfo) => {
    console.log(`Logged in: ${isLoggedIn(authInfo)}`);
    // prints: "Logged in: false"

    return sdk.login({
      username: "test-user@example.com",
      password: "test-secret",
    });
  })
  .then((loginRes) => {
    console.log("Login successful!");

    return sdk.authInfo();
  })
  .then((authInfo) => {
    console.log(`Logged in: ${isLoggedIn(authInfo)}`);
    // prints: "Logged in: true"

    return sdk.currentUser.show();
  })
  .then((userRes) => {
    const profile = userRes.data.data.attributes.profile;
    console.log(`Current user: ${profile.firstName} ${profile.lastName}`);

    return sdk.logout();
  })
  .then((logoutRes) => {
    console.log("Logged out!");

    return sdk.authInfo();
  })
  .then((authInfo) => {
    console.log(`Logged in: ${isLoggedIn(authInfo)}`);
    // prints: "Logged in: false"
  })
  .catch((res) => {
    // An error occurred
    console.log(`Request failed with status: ${res.status} ${res.statusText}`);
  });
```

## Exchange token

**`sdk.exchangeToken() : Promise`**

A valid access token can be exchanged to a trusted token when combined with a client
secret. A trusted token is required by the Sharetribe APIs for certain requests, for
example, [privileged
transitions](https://www.sharetribe.com/docs/background/privileged-transitions/).

In order to exchange an access token, a valid access token needs to be stored in
the SDK's token store. This can be achieved by logging in or by initializing the
SDK with a token store that holds an access token.

**Example:**

```js
const sdk = sharetribeSdk.createInstance({
  clientId: "a client ID",
  clientSecret: "a client secret",
  tokenStore: sharetribeSdk.tokenStore.memoryStore(),
});

sdk.login({ username: "test-user@example.com", password: "test-secret" });

sdk.exchangeToken().then((res) => {
  console.log("Trusted token: ", res.data);
});
```

## Seeing occasional 401 errors?

Are you seeing occasional 401 errors in the browser's Web Console?
Don't worry! That's part of the normal operations.

Sharetribe API uses two authentication tokens for each session:

- _Access token_ that is used to authenticate the user. Valid only a
  short amount of time.
- _Refresh token_ that is used to issue a fresh authentication
  token. Long lived.

When _access token_ expires, you will see a 401 error in browser's Web
Console. The SDK will handle this and automatically issue new fresh
authentication token and retry the request. This all happens under the
hood and you don't need to worry about it. SDK will do the heavy
lifting.

See [Authentication API reference
document](https://www.sharetribe.com/api-reference/authentication.html)
for more information.
