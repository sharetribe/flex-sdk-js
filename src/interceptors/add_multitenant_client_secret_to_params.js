/**
   Read `multitenantClientSecretToken` from `ctx` and add it as `client_secret`
   to `params`.

   Changes to `ctx`:

   - add `params.client_secret`
*/
export default class AddMultitenantClientSecretToParams {
  enter(ctx) {
    const { multitenantClientSecretToken, params = {} } = ctx;
    return {
      ...ctx,
      params: { ...params, client_secret: multitenantClientSecretToken },
    };
  }
}
