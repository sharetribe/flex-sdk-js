/**
   Reads current authentication token from the tokenStore and returns
   information whether the user is currently logged in with anon token
   or password token.

   Changes to `ctx`:

   - add `res`

*/
export default class AuthInfo {
  enter(ctx) {
    const { tokenStore } = ctx;

    if (tokenStore) {
      return Promise.resolve()
        .then(tokenStore.getToken)
        .then(storedToken => {
          if (storedToken) {
            const grantType = storedToken.refresh_token ? 'refresh_token' : 'client_credentials';

            return { ...ctx, res: { grantType } };
          }

          return { ...ctx, res: {} };
        });
    }

    return { ...ctx, res: {} };
  }
}
