/**
   See if `code` is passed as a parameter and if yes, store isLoggedInAs true to
   context.

   Changes to `ctx`:

   - add `isLoggedInAs`
 */

export default class AddIsLoggedInAsToContext {
  enter(ctx) {
    const { code } = ctx.params;

    if (code) {
      return { ...ctx, isLoggedInAs: !!code };
    }

    return ctx;
  }
}
