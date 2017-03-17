/**
   Fetch `refresh_token` from `authToken` in `ctx`. If
   `refresh_token` doesn't exist, clear the `enterQueue`, because we
   don't need to revoke the refresh token we don't have.

   Changes to `ctx`:

   - Add `params.token`
   - Clear `enterQueue` (if no need to revoke)
*/
export default class FetchRefreshTokenForRevoke {
  enter(ctx) {
    const { authToken: { refresh_token: token } = {} } = ctx;

    if (token) {
      return { ...ctx, params: { token } };
    }

    // No need to call `revoke` endpoint, because we don't have
    // refresh_token.
    // Clear the enterQueue
    return { ...ctx, enterQueue: [] };
  }
}
