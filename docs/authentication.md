# Authentication

The SDK provides two methods for log in and log out:

#### `login({ username: string, password: string })`

Authenticates the user. The SDK is now able to access information that is not available for anonymous users.

#### `logout()`

Logs out the user.

## Example

Here's a full example how to log user in and out

```js
sdk
  .login({ username: "test-user@example.com", password: "test-secret" })
  .then(loginRes => {
    console.log("Logged in successfully");

    return sdk.currentUser.show();
  })
  .then(userRes => {
    const profile = userRes.data.data.attributes.profile;
    console.log("Current user: ${profile.firstName} ${profile.lastName}");

    return sdk.logout();
  })
  .then(() => {
    console.log("Logged out. Bye!");
  })
  .catch(res => {
    // An error occurred
    console.log(`Request failed with status: ${res.status} ${res.statusText}`);
  });
```
