/**
   Renames IdP related auth parameters to use snake case.

   Changes to `ctx`:

   Update following param names, if they exist:

   - change `ctx.params.idpId` to `ctx.params.idp_id`
   - change `ctx.params.idpClientId` to `ctx.params.idp_client_id`
   - change `ctx.params.idpToken` to `ctx.params.idp_token`
*/
export default class RenameIdpParamsForAuth {
  enter({ params, ...ctx }) {
    const { idpId, idpClientId, idpToken, ...rest } = params;

    const idpIdObj = idpId ? { idp_id: idpId } : null;
    const idpClientIdObj = idpClientId ? { idp_client_id: idpClientId } : null;
    const idpTokenObj = idpToken ? { idp_token: idpToken } : null;

    return {
      ...ctx,
      params: {
        ...idpIdObj,
        ...idpClientIdObj,
        ...idpTokenObj,
        ...rest,
      },
    };
  }
}
