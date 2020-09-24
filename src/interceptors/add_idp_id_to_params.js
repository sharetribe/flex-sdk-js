/**
   Read `idpId` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.idpId`
 */
export default class AddIdpIdToParams {
  enter({ params, ...ctx }) {
    const { idpId } = params;
    return {
      ...ctx,
      idpId,
      params: { ...params, idp_id: idpId },
    };
  }
}
