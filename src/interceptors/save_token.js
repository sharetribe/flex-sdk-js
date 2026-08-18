/**
   On `leave` phase, take `authToken` from `ctx` and save it to tokenStore.

   Stores also the `isLoggedInAs` alongside with the auth token.

   Changes to `ctx`:

   - None
*/
export default class SaveToken {
  leave(ctx) {
    const { authToken, tokenStore, isLoggedInAs, clientId } = ctx;

    if (tokenStore) {
      return Promise.resolve()
        .then(() => tokenStore.getToken())
        .then(oldToken =>
          tokenStore.setToken({
            ...authToken,

            // Store clientId
            //
            // We need clientId when we refresh expired tokens.
            //
            // - Single tenant SDK: Take the clientId from the context
            // - Multitenant SDK: Take the clientId from the oldToken. In
            //   multitenant SDK, we don't have clientId in the context.
            //
            // Caveat: For /multitenant/auth, which uses this SaveToken
            // interceptor, if we don't have `oldToken`, the saved `clientId`
            // will be null. That's because multitenant SDK doesn't have
            // configured client ID and we do not store the client_id returned
            // inside client_data from the /multitenant/auth response. We don't
            // store it because we don't currently need it.
            //
            clientId: clientId || (oldToken ? oldToken.clientId : undefined),
            isLoggedInAs,
          })
        )
        .then(() => ctx);
    }

    return ctx;
  }
}
