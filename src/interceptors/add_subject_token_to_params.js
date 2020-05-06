/**
   Read `authToken.access_token` from `ctx` and adds it as
   `subject_token` in params

   Changes to `ctx`:

   - add `params.subject_token`

 */
export default class AddSubjectTokenToParams {
  enter(ctx) {
    const { authToken, params } = ctx;
    if (authToken && authToken.access_token) {
      return { ...ctx, params: { ...params, subject_token: authToken.access_token } };
    }
    return ctx;
  }
}
