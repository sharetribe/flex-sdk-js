/**
   On `leave` phase, take `authToken` from `ctx` and save it to tokenStore.

   Stores also the `isLoggedInAs` alongside with the auth token.

   Changes to `ctx`:

   - None
*/
export default class SaveToken {
  leave(ctx) {
    const { authToken, tokenStore, isLoggedInAs } = ctx;

    if (tokenStore) {
      return Promise.resolve()
        .then(() => tokenStore.setToken({ ...authToken, isLoggedInAs }))
        .then(() => ctx);
    }

    return ctx;
  }
}
