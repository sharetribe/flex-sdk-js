/**
   Read `clientId` from `ctx` and add it to `params`

   Changes to `ctx`:

   - add `params.clientId`
 */
export default class AddClientIdToParams {
  enter({ clientId, params, ...ctx }) {
    return { ...ctx, clientId, params: { ...params, client_id: clientId } };
  }
}
