/**
   See what credentials (`username`, `password`, and `authorizationCode`) are
   passed in params and set the grant_type based on those.

   Changes to `ctx`:

   - add `params.grant_type`
 */
export default class AddGrantTypeToParams {
  enter({ params, ...ctx }) {
    const { username, password, code } = params;

    if (username && password) {
      return { ...ctx, params: { grant_type: 'password', ...params } };
    }

    if (code) {
      return { ...ctx, params: { grant_type: 'authorization_code', ...params } };
    }

    return { ...ctx, params: { ...params } };
  }
}
