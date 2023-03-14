/**
   Read `multitenantClientSecretToken` from `ctx` and add it to Authorization
   header.

   Changes to `ctx`:

   - Add `headers.Authorization`
 */
export default class AddMultitenantAuthHeader {
  enter(ctx) {
    const { multitenantClientSecretToken, headers = {} } = ctx;
    const authHeaders = { Authorization: `Bearer ${multitenantClientSecretToken}` };
    return { ...ctx, headers: { ...headers, ...authHeaders } };
  }
}
