/**
   Set the scope for a token request based on the params.

   Changes to `ctx`:

   - add `params.scope`
 */
export default class AddScopeToParams {
  enter({ params, ...ctx }) {
    const { username, password } = params;

    if (username && password) {
      return { ...ctx, params: { scope: 'user', ...params } };
    }

    return { ...ctx, params: { ...params } };
  }
}
