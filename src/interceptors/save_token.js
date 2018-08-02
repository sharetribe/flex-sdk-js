/**
   On `leave` phase, take `authToken` from `ctx` and save it to tokenStore

   Changes to `ctx`:

   - None
*/
export default class SaveToken {
  leave(ctx) {
    const { authToken, tokenStore } = ctx;

    if (tokenStore) {
      return Promise.resolve()
        .then(() => tokenStore.setToken(authToken))
        .then(() => ctx);
    }

    return ctx;
  }
}
