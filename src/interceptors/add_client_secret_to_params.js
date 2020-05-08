/**
   Read `clientSecret` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.client_secret`
 */
export default class AddClientSecretToParams {
  enter({ clientSecret, params, ...ctx }) {
    if (!clientSecret) {
      throw new Error('SDK instance is missing the clientSecret config.');
    }
    return { ...ctx, clientSecret, params: { ...params, client_secret: clientSecret } };
  }
}
