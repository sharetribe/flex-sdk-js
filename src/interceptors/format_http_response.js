import _ from 'lodash';

/**
 * Takes `ctx` with HTTP `res` in it and strips internals (e.g. headers, config) and
 * returns only those values that we want the SDK function to return.
 *
 * Should be only used with SDK functions that do HTTP request (e.g. not with AuthInfo)
 */

export default class FormatHttpResponse {
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
