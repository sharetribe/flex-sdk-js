import _ from 'lodash';

import contextRunner from './context_runner';

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

export class SaveTokenMiddleware {
  leave(ctx) {
    const { authToken, tokenStore } = ctx;

    if (tokenStore) {
      return Promise.resolve()
                    .then(() => tokenStore.setToken(authToken))
                    .then(() => ctx);
    }

    return ctx;
  }
}

export class AddAuthTokenResponseToCtx {
  leave(ctx) {
    const { res: { data: authToken } } = ctx;

    return { ...ctx, authToken };
  }
}

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
        new SaveTokenMiddleware(),
        new AddAuthTokenResponseToCtx(),
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
        new SaveTokenMiddleware(),
        new AddAuthTokenResponseToCtx(),
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

/**
  Clears token after revoke.

  If the `revoke` call was successful, clear token.

  If the `revoke` call was unsuccessful, and the reason
  was that we we're not authorized (401), rescue the chain
  and clear token

  Otherwise, do nothing.
*/
export class ClearTokenAfterRevokeMiddleware {
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
    return ClearTokenAfterRevokeMiddleware.clearTokenAndResque(ctx);
  }

  error(ctx) {
    const { status } = ctx.res || {};
    const retryStatus = _.get(ctx, ['refreshTokenRetry', 'res', 'status']);

    if (status === 401 && retryStatus === 401) {
      return ClearTokenAfterRevokeMiddleware.clearTokenAndResque(ctx);
    }

    return ctx;
  }
}

export class FetchRefreshTokenForRevoke {
  enter(ctx) {
    const { authToken: { refresh_token: token } = {} } = ctx;

    if (token) {
      return { ...ctx, params: { token } };
    }

    // No need to call `revoke` endpoint, because we don't have
    // refresh_token.
    // Clear the enterQueue
    return { ...ctx, enterQueue: [] };
  }
}

export class FetchAuthTokenFromApi {
  enter(ctx) {
    const { tokenStore, authToken, endpointInterceptors, clientId } = ctx;

    if (authToken) {
      return ctx;
    }

    return contextRunner([
      new SaveTokenMiddleware(),
      new AddAuthTokenResponseToCtx(),
      ...endpointInterceptors.auth.token,
    ])({
      params: {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      },
      tokenStore,
    }).then(({ authToken: newAuthToken }) => ({ ...ctx, authToken: newAuthToken }));
  }
}

export class FetchAuthTokenFromStore {
  enter(enterCtx) {
    const { tokenStore } = enterCtx;

    if (!tokenStore) {
      return enterCtx;
    }

    return Promise.resolve()
                  .then(tokenStore.getToken)
                  .then((storedToken) => {
                    if (storedToken) {
                      return { ...enterCtx, authToken: storedToken };
                    }

                    return enterCtx;
                  });
  }
}
