/**
 * Takes `ctx` with HTTP `res` in it and strips token data from multitenant API
 * responses, leaving only `client_data`, which the SDK caller needs.
 */

export default class FormatMultitenantHttpResponse {
  leave(ctx) {
    const { res } = ctx;
    if (!res) {
      return ctx;
    }

    return { ...ctx, res: { ...res, data: { client_data: res.data.client_data } } };
  }
}
