/**
   See if `code` is passed as a parameter and if yes, store isLoggedInAs true to
   context.

   Changes to `ctx`:

   - add `isLoggedInAs`

   Deprecated: login as user should use loginAs method.
 */

export default class AddIsLoggedInAsToContextFromParams {
  enter(ctx) {
    const { code } = ctx.params;

    if (code) {
      return { ...ctx, isLoggedInAs: !!code };
    }

    return ctx;
  }
}
