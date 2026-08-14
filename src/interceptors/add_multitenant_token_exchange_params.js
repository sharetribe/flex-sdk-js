import _ from 'lodash';

/**
   Add required fields to `params` for multitenant token exchange request.
   It fetches the `access_token` from the `tokenStore`, which is used as the 
   `subject_token` in the request params. 

   Throws if `tokenStore` doesn't have a valid user token.

   Changes to `ctx`:

   - add `params.scope`
   - add `params.grant_type`
   - add `params.subject_token`
*/
export default class AddMultitenantTokenExchangeParams {
  enter(ctx) {
    const { tokenStore } = ctx;
    return Promise.resolve()
      .then(tokenStore.getToken)
      .then(storedToken => {
        // throw if no token is found
        if (!storedToken || !storedToken.access_token) {
          throw new Error('No access token found in store');
        }
        // throw if token has invalid scope
        const scopes = storedToken.scope.split(' ');
        if (!_.find(scopes, scope => scope === 'user')) {
          throw new Error('Access token scope not supported');
        }

        return {
          ...ctx,
          params: {
            ...ctx.params,
            scope: 'trusted:user',
            grant_type: 'multitenant_token_exchange',
            subject_token: storedToken.access_token,
          },
        };
      });
  }
}
