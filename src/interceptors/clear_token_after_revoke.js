import _ from 'lodash';

/**
   Clears token after revoke.

   If the `revoke` call was successful, clear token.

   If the `revoke` call was unsuccessful, and the reason
   was that we we're not authorized (401), rescue the chain
   and clear token

   Otherwise, do nothing.

   Changes to `ctx`:

   - Remove `error`, if 401
*/
export default class ClearTokenAfterRevoke {
  static clearTokenAndResque(ctx) {
    const { tokenStore } = ctx;

    if (tokenStore) {
      return Promise.resolve()
        .then(tokenStore.removeToken)
        .then(() => ({ ...ctx, error: null }));
    }

    return { ...ctx, error: null };
  }

  leave(ctx) {
    return ClearTokenAfterRevoke.clearTokenAndResque(ctx);
  }

  error(ctx) {
    const { status } = ctx.res || {};
    const retryStatus = _.get(ctx, ['refreshTokenRetry', 'res', 'status']);

    if (status === 401 && retryStatus === 401) {
      return ClearTokenAfterRevoke.clearTokenAndResque(ctx);
    }

    return ctx;
  }
}
