/**
   Add isLoggedInAs true to context.

   Changes to `ctx`:

   - add `isLoggedInAs`
 */

export default class AddIsLoggedInAsToContext {
  enter(ctx) {
    return { ...ctx, isLoggedInAs: true };
  }
}
