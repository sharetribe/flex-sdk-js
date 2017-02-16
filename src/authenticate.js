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

const saveToken = (authResponse, tokenStore) =>
  authResponse.then((res) => {
    const authToken = res.data;

    if (tokenStore) {
      tokenStore.setToken(authToken);
    }

    return authToken;
  });

export const saveTokenMiddleware = (enterCtx, next) => {
  const { authToken, tokenStore } = enterCtx;

  if (tokenStore) {
    tokenStore.setToken(authToken);
  }

  return next(enterCtx);
}

export const addAuthTokenResponseToCtx = (enterCtx, next) => {
  const { res: { data: authToken } } = enterCtx;

  return next({ ...enterCtx, authToken });
}

export const fetchAuthToken = (enterCtx, next) => {
  const { tokenStore, endpointFns, clientId } = enterCtx;
  const storedToken = tokenStore && tokenStore.getToken();

  if (storedToken) {
    return next({ ...enterCtx, authToken: storedToken });
  } else {
    return run([
      endpointFns.auth.token,
      addAuthTokenResponseToCtx,
      saveTokenMiddleware,
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
        endpointFns.auth.token,
        addAuthTokenResponseToCtx,
        saveTokenMiddleware,
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
      endpointFns.auth.token,
      addAuthTokenResponseToCtx,
      saveTokenMiddleware,
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

export const authenticate = run([
  fetchAuthToken,
  retryWithAnonToken,
  retryWithRefreshToken,
  addAuthTokenHeader,
]);
