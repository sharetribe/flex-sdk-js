/**
   Read `idpClientId` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.idpClientId`
 */
export default class AddIdpClientIdToParams {
  enter({ params, ...ctx }) {
    const { idpClientId } = params;
    return {
      ...ctx,
      idpClientId,
      params: { ...params, idp_client_id: idpClientId },
    };
  }
}
