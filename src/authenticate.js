import _ from 'lodash';

import contextRunner from './context_runner';

import SaveToken from './interceptors/save_token';
import AddAuthTokenResponse from './interceptors/add_auth_token_response';

/* eslint-disable class-methods-use-this */

const constructAuthHeader = (authToken) => {
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

export class AddAuthTokenHeader {
  enter(ctx) {
    const { authToken } = ctx;

    if (!authToken) {
      return ctx;
    }

    const authHeaders = { Authorization: constructAuthHeader(authToken) };
    return { ...ctx, headers: authHeaders };
  }
}
