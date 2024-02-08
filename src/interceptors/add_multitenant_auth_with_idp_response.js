/**
   Take token data from `res` and add it to `ctx` top-level.
   Make sure to include only the necessary keys.

   Changes to `ctx`:

   - add `authToken`
*/
export default class AddMultitenantAuthWithIdpResponse {
  /* eslint camelcase: "off" */
  leave(ctx) {
    const {
      res: {
        data: { access_token, refresh_token, token_type, expires_in, scope },
      },
    } = ctx;

    return {
      ...ctx,
      authToken: {
        access_token,
        refresh_token,
        token_type,
        expires_in,
        scope,
      },
    };
  }
}
