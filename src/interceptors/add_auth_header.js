const constructAuthHeader = authToken => {
  /* eslint-disable camelcase */
  const token_type = authToken.token_type && authToken.token_type.toLowerCase();

  switch (token_type) {
    case 'bearer':
      return `Bearer ${authToken.access_token}`;
    default:
      throw new Error(`Unknown token type: ${token_type}`);
  }
  /* eslint-enable camelcase */
};

/**
   Read `authToken` from `ctx`. Then construct Authorize header and add it to `headers`.

   Changes to `ctx`:

   - Add `headers.Authorize`
 */
export default class AddAuthHeader {
  enter(ctx) {
    const { authToken, headers = {} } = ctx;

    if (!authToken) {
      return ctx;
    }

    const authHeaders = { Authorization: constructAuthHeader(authToken) };
    return { ...ctx, headers: { ...headers, ...authHeaders } };
  }
}
