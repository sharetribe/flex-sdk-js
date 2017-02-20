import run from './middleware';
import contextRunner from './context_runner';

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

export const saveTokenMiddleware = (enterCtx, next) =>
  next(enterCtx).then((leaveCtx) => {
    const { authToken, tokenStore } = leaveCtx;

    if (tokenStore) {
      tokenStore.setToken(authToken);
    }

    return leaveCtx;
  });

export const addAuthTokenResponseToCtx = (enterCtx, next) =>
  next(enterCtx).then((leaveCtx) => {
    const { res: { data: authToken } } = leaveCtx;

    return { ...leaveCtx, authToken };
  });

export class AddAuthTokenResponseToCtx {
  leave(ctx) {
    const { res: { data: authToken } } = ctx;

    return { ...ctx, authToken };
  }
}

export const fetchAuthToken = (enterCtx, next) => {
  const { tokenStore, endpointFns, clientId } = enterCtx;
  const storedToken = tokenStore && tokenStore.getToken();

  if (storedToken) {
    return next({ ...enterCtx, authToken: storedToken });
  }

  return run([
    saveTokenMiddleware,
    // addAuthTokenResponseToCtx,
    contextRunner([
      new AddAuthTokenResponseToCtx(),
      endpointFns.auth.token,
    ]),
  ])({
    params: {
      client_id: clientId,
      grant_type: 'client_credentials',
      scope: 'public-read',
    },
    tokenStore,
  }).then(({ authToken }) => next({ ...enterCtx, authToken }));
};

export const addAuthTokenHeader = (enterCtx, next) => {
  const { authToken } = enterCtx;
  const authHeaders = { Authorization: constructAuthHeader(authToken) };
  return next({ ...enterCtx, headers: authHeaders });
};

class AddAuthTokenHeader {
  enter(ctx) {
    const { authToken } = ctx;
    const authHeaders = { Authorization: constructAuthHeader(authToken) };
    return { ...ctx, headers: authHeaders };
  }
}

const retryWithRefreshToken = (enterCtx, next) =>
  next(enterCtx).catch((error) => {
    const errorCtx = error.ctx;
    const { authToken, endpointFns, clientId, tokenStore } = errorCtx;

    if (error.response && error.response.status === 401 && authToken.refresh_token) {
      return run([
        saveTokenMiddleware,
        // addAuthTokenResponseToCtx,
        contextRunner([
          new AddAuthTokenResponseToCtx(),
          endpointFns.auth.token,
        ]),
      ])({
        params: {
          client_id: clientId,
          grant_type: 'refresh_token',
          refresh_token: authToken.refresh_token,
        },
        tokenStore,
      }).then(({ authToken: newAuthToken }) => next({ ...enterCtx, authToken: newAuthToken }));
    }

    throw error;
  });

const retryWithAnonToken = (enterCtx, next) =>
  next(enterCtx).catch((error) => {
    const errorCtx = error.ctx;
    const { clientId, tokenStore, endpointFns } = errorCtx;

    return run([
      saveTokenMiddleware,
      // addAuthTokenResponseToCtx,
      contextRunner([
        new AddAuthTokenResponseToCtx(),
        endpointFns.auth.token,
      ]),
    ])({
      params: {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      },
      tokenStore,
    }).then(({ authToken }) => next({ ...enterCtx, authToken }));
  });

class RetryWithRefreshToken {
  enter(enterCtx) {
    const { enterQueue, refreshTokenRetry: { attempts = 0 } = {} } = enterCtx;
    return {
      ...enterCtx,
      refreshTokenRetry: {
        retryQueue: [...enterQueue, new RetryWithAnonToken()],
        attempts: attempts + 1,
      }
    }
  }

  error(errorCtx) {
    const { authToken, clientId, tokenStore, endpointFns, refreshTokenRetry: { retryQueue, attempts } } = errorCtx;

    if (attempts > 1) {
      return errorCtx;
    }

    if (errorCtx.res && errorCtx.res.status === 401 && authToken.refresh_token) {
      return run([
        saveTokenMiddleware,
        contextRunner([
          new AddAuthTokenResponseToCtx(),
          endpointFns.auth.token,
        ]),
      ])({
        params: {
          client_id: clientId,
          grant_type: 'refresh_token',
          refresh_token: authToken.refresh_token,
        },
        tokenStore,
      }).then(({ authToken }) => {
        return { ...errorCtx, authToken, enterQueue: retryQueue, error: null };
      });
    }

    return errorCtx;
  }
}

class RetryWithAnonToken {
  enter(enterCtx) {
    const { enterQueue, anonTokenRetry: { attempts = 0 } = {} } = enterCtx;
    return {
      ...enterCtx,
      anonTokenRetry: {
        retryQueue: [...enterQueue, new RetryWithAnonToken()],
        attempts: attempts + 1,
      }
    }
  }

  error(errorCtx) {
    const { clientId, tokenStore, endpointFns, anonTokenRetry: { retryQueue, attempts } } = errorCtx;

    if (attempts > 1) {
      return errorCtx;
    }

    if (errorCtx.res && errorCtx.res.status == 401) {
      return run([
        saveTokenMiddleware,
        contextRunner([
          new AddAuthTokenResponseToCtx(),
          endpointFns.auth.token,
        ]),
      ])({
        params: {
          client_id: clientId,
          grant_type: 'client_credentials',
          scope: 'public-read',
        },
        tokenStore,
      }).then(({ authToken }) => {
        return { ...errorCtx, authToken, enterQueue: retryQueue, error: null };
      });
    }

    return errorCtx;
  }
}

export const clearTokenMiddleware = (enterCtx, next) =>
  next(enterCtx).then((leaveCtx) => {
    const { tokenStore } = leaveCtx;

    if (tokenStore) {
      tokenStore.setToken(null);
    }

    return leaveCtx;
  });

export const fetchRefreshTokenForRevoke = (enterCtx, next) => {
  const { authToken: { refresh_token: token } } = enterCtx;

  if (token) {
    return next({ ...enterCtx, params: { token } });
  }

  // No need to call `revoke` endpoint, because we don't have
  // refresh_token.
  // Return Promise and halt the middleware chain
  return Promise.resolve(enterCtx);
};

class FetchAuthToken {
  enter(enterCtx) {
    const { tokenStore, endpointFns, clientId } = enterCtx;
    const storedToken = tokenStore && tokenStore.getToken();

    if (storedToken) {
      return Promise.resolve({ ...enterCtx, authToken: storedToken });
    }

    return run([
      saveTokenMiddleware,
      contextRunner([
        new AddAuthTokenResponseToCtx(),
        endpointFns.auth.token,
      ]),
    ])({
      params: {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      },
      tokenStore,
    }).then(({ authToken }) => ({ ...enterCtx, authToken }));
  }
}

export const authenticateInterceptors = [
  new FetchAuthToken(),
  new RetryWithAnonToken(),
  new RetryWithRefreshToken(),
  new AddAuthTokenHeader(),
]

export const authenticate = run([
  fetchAuthToken,
  retryWithAnonToken,
  retryWithRefreshToken,
  // addAuthTokenHeader,
  (enterCtx, next) => contextRunner([
    new AddAuthTokenHeader(),
  ])(enterCtx).then(next),
]);
