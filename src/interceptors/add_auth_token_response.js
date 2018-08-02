/**
   Take `authToken` from `res` and add it to `ctx` top-level.

   Changes to `ctx`:

   - add `authToken` (from res)
*/
export default class AddAuthTokenResponse {
  leave(ctx) {
    const {
      res: { data: authToken },
    } = ctx;

    return { ...ctx, authToken };
  }
}
