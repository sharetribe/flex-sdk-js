/**
   Read `clientSecret` from `ctx`. Then construct Authorization header and add it to `headers`.

   Changes to `ctx`:

   - Add `headers.Authorization`
 */
export default class AddMultitenantAuthHeader {
  enter(ctx) {
    const { clientSecret, headers = {} } = ctx;

    if (!clientSecret) {
      throw new Error('clientSecret is missing from the context');
    }

    const authHeaders = { Authorization: `Bearer ${clientSecret}` };
    return { ...ctx, headers: { ...headers, ...authHeaders } };
  }
}
