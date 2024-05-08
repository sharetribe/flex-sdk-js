/**
   See what credentials (`username`, `password`, and `authorizationCode`) are
   passed in params and set the grant_type based on those.

   Changes to `ctx`:

   - add `params.grant_type`
 */

import { deprecated } from '../utils';

export default class AddGrantTypeToParams {
  enter({ params, ...ctx }) {
    const { username, password, code } = params;

    if (username && password) {
      return { ...ctx, params: { grant_type: 'password', ...params } };
    }

    if (code) {
      deprecated(
        'Using sdk.login to login as a user is deprecated. Use sdk.loginAs instead.',
        ctx.disableDeprecationWarnings
      );

      return { ...ctx, params: { grant_type: 'authorization_code', ...params } };
    }

    return { ...ctx, params: { ...params } };
  }
}
