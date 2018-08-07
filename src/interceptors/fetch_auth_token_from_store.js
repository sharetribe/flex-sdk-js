/**
   Fetches the auth token from tokenStore and adds it to the context.

   Changes to `ctx`:

   - add `authToken`

 */
export default class FetchAuthTokenFromStore {
  enter(enterCtx) {
    const { tokenStore } = enterCtx;

    if (!tokenStore) {
      return enterCtx;
    }

    return Promise.resolve()
      .then(tokenStore.getToken)
      .then(storedToken => {
        if (storedToken) {
          return { ...enterCtx, authToken: storedToken };
        }

        return enterCtx;
      });
  }
}
