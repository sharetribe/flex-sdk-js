/**
   Read `idpToken` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.idpToken`
 */
export default class AddIdpTokenToParams {
  enter({ params, ...ctx }) {
    const { idpToken } = params;
    return {
      ...ctx,
      idpToken,
      params: { ...params, idp_token: idpToken },
    };
  }
}
