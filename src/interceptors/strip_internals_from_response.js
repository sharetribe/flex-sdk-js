import _ from 'lodash';

/**
   Add given params to the `ctx.params`

   Changes to `ctx`:

   - Modify `ctx.params`
 */

export default class StripInternalsFromResponse {
  error(ctx) {
    if (!ctx.error.response) {
      return ctx;
    }

    return _.update({ ...ctx }, 'error.response', ({ status, statusText, data }) => ({
      status,
      statusText,
      data,
    }));
  }

  leave(ctx) {
    if (!ctx.res) {
      // Some cases, SDK tries to be smart and not call API endpoint if it's not
      // needed. For example, `logout` does not call token revoke endpoint if
      // the user is not logged in.
      // In those cases, there's no `res` in `ctx`
      return ctx;
    }

    return _.update({ ...ctx }, 'res', ({ status, statusText, data }) => ({
      status,
      statusText,
      data,
    }));
  }
}
