/**
   Add `authorization_code` value to `params.grantType`

   Changes to `ctx`:

   - Add `authorization_code` value to `params.grantType`
 */

export default class AddAuthorizationCodeGrantTypeToParams {
  enter({ params, ...ctx }) {
    return { ...ctx, params: { grant_type: 'authorization_code', ...params } };
  }
}
