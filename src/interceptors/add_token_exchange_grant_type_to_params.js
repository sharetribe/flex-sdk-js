/**
   Add "token_exchange" as the `grant_type` in `params`

   Changes to `ctx`:

   - add `params.grant_type`
 */
export default class AddTokenExchangeGrantTypeToParams {
  enter({ params, ...ctx }) {
    return { ...ctx, params: { ...params, grant_type: 'token_exchange' } };
  }
}
