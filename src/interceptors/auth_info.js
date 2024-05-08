/**
   Reads current authentication token from the tokenStore and returns
   the following information:

   - scopes: list of scopes associated with the access token in store
   - isAnonymous: boolean value indicating if the access token only grants
     access to publicly read data from API
   - isLoggedInAs: boolean value indicating that the operator has logged in as
     a marketplace user

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
            const tokenScope = storedToken.scope;
            const { isLoggedInAs } = storedToken;

            if (tokenScope) {
              const scopes = tokenScope.split(' ');
              const isAnonymous = tokenScope === 'public-read';

              // Deprecated attribute, maintained here for client implementations
              // that rely on this attribute
              const grantType = isAnonymous ? 'client_credentials' : 'refresh_token';

              return {
                ...ctx,
                res: { scopes, isAnonymous, grantType, isLoggedInAs: !!isLoggedInAs },
              };
            }

            // Support old tokens that are stored in the client's token store
            // and possibly do not have the scope attribute
            const isAnonymous = !storedToken.refresh_token;
            const grantType = isAnonymous ? 'client_credentials' : 'refresh_token';
            return { ...ctx, res: { isAnonymous, grantType, isLoggedInAs: !!isLoggedInAs } };
          }

          return { ...ctx, res: {} };
        });
    }

    return { ...ctx, res: {} };
  }
}
