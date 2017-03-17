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

export class RetryWithRefreshToken {
  enter(enterCtx) {
    const { enterQueue, refreshTokenRetry: { attempts = 0 } = {} } = enterCtx;
    return {
      ...enterCtx,
      refreshTokenRetry: {
        retryQueue: [...enterQueue, new RetryWithRefreshToken()],
        attempts: attempts + 1,
      },
    };
  }

  error(errorCtx) {
    const { authToken, clientId, tokenStore, endpointInterceptors,
            refreshTokenRetry: { retryQueue, attempts } } = errorCtx;

    if (attempts > 1) {
      return errorCtx;
    }

    if (errorCtx.res && errorCtx.res.status === 401 && authToken.refresh_token) {
      return contextRunner([
        new SaveToken(),
        new AddAuthTokenResponse(),
        ...endpointInterceptors.auth.token,
      ])({
        params: {
          client_id: clientId,
          grant_type: 'refresh_token',
          refresh_token: authToken.refresh_token,
        },
        tokenStore,
      }).then(({ authToken: newAuthToken }) =>
        ({ ...errorCtx, authToken: newAuthToken, enterQueue: retryQueue, error: null }))
        .catch(e =>
          ({ ...errorCtx, refreshTokenRetry: { retryQueue, attempts, res: e.response } }));
    }

    return errorCtx;
  }
}

export class RetryWithAnonToken {
  enter(enterCtx) {
    const { enterQueue, anonTokenRetry: { attempts = 0 } = {} } = enterCtx;
    return {
      ...enterCtx,
      anonTokenRetry: {
        retryQueue: [...enterQueue, new RetryWithAnonToken()],
        attempts: attempts + 1,
      },
    };
  }

  error(errorCtx) {
    const { clientId, tokenStore, endpointInterceptors,
            anonTokenRetry: { retryQueue, attempts } } = errorCtx;

    if (attempts > 1) {
      return errorCtx;
    }

    if (errorCtx.res && errorCtx.res.status === 401) {
      return contextRunner([
        new SaveToken(),
        new AddAuthTokenResponse(),
        ...endpointInterceptors.auth.token,
      ])({
        params: {
          client_id: clientId,
          grant_type: 'client_credentials',
          scope: 'public-read',
        },
        tokenStore,
      }).then(({ authToken }) => ({ ...errorCtx, authToken, enterQueue: retryQueue, error: null }));
    }

    return errorCtx;
  }
}
