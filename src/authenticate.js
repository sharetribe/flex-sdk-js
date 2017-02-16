import run from './middleware';

// FIXME Duplicated
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

export const saveTokenMiddleware = (enterCtx, next) => {
  return next(enterCtx).then((leaveCtx) => {
    const { authToken, tokenStore } = leaveCtx;

    if (tokenStore) {
      tokenStore.setToken(authToken);
    }

    return leaveCtx;
  });
}

export const addAuthTokenResponseToCtx = (enterCtx, next) => {
  return next(enterCtx).then((leaveCtx) => {
    const { res: { data: authToken } } = leaveCtx;

    return { ...leaveCtx, authToken };
  });
}

export const fetchAuthToken = (enterCtx, next) => {
  const { tokenStore, endpointFns, clientId } = enterCtx;
  const storedToken = tokenStore && tokenStore.getToken();

  if (storedToken) {
    return next({ ...enterCtx, authToken: storedToken });
  } else {
    return run([
      saveTokenMiddleware,
      addAuthTokenResponseToCtx,
      endpointFns.auth.token,
    ])({
      params: {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      },
      tokenStore,
    }).then(({ authToken }) => {
      return next({ ...enterCtx, authToken });
    });
  }
};

export const addAuthTokenHeader = (enterCtx, next) => {
  const { authToken } = enterCtx;
  const authHeaders = { Authorization: constructAuthHeader(authToken) };
  return next({ ...enterCtx, headers: authHeaders });
}

const retryWithRefreshToken = (enterCtx, next) => {
  return next(enterCtx).catch((error) => {
    const errorCtx = error.ctx;
    const { authToken, endpointFns, clientId, tokenStore } = errorCtx;

    if (error.response && error.response.status === 401 && authToken.refresh_token) {
      return run([
        saveTokenMiddleware,
        addAuthTokenResponseToCtx,
        endpointFns.auth.token,
      ])({
        params: {
          client_id: clientId,
          grant_type: 'refresh_token',
          refresh_token: authToken.refresh_token,
        },
        tokenStore
      }).then(({ authToken }) => {
        return next({ ...enterCtx, authToken });
      });
    } else {
      return Promise.reject(error);
    }
  });
};

const retryWithAnonToken = (enterCtx, next) => {
  return next(enterCtx).catch((error) => {
    const errorCtx = error.ctx;
    const { clientId, tokenStore, endpointFns } = errorCtx;

    return run([
      saveTokenMiddleware,
      addAuthTokenResponseToCtx,
      endpointFns.auth.token,
    ])({
      params: {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      },
      tokenStore
    }).then(({ authToken }) => {
      return next({ ...enterCtx, authToken });
    });
  });
};

export const clearTokenMiddleware = (enterCtx, next) => {
  return next(enterCtx).then((leaveCtx) => {
    const { tokenStore } = leaveCtx;

    if (tokenStore) {
      tokenStore.setToken(null);
    }

    return leaveCtx;
  });
}

export const fetchRefreshTokenForRevoke = (enterCtx, next) => {
  const { authToken: { refresh_token: token } } = enterCtx;

  if (token) {
    return next({ ...enterCtx, params: { token }});
  } else {
    // No need to call `revoke` endpoint, because we don't have
    // refresh_token.
    // Return Promise and halt the middleware chain
    return Promise.resolve(enterCtx);
  }
}

export const authenticate = run([
  fetchAuthToken,
  retryWithAnonToken,
  retryWithRefreshToken,
  addAuthTokenHeader,
]);
