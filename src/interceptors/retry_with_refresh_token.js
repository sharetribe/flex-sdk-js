import * as authTokenContextRunner from '../auth_token_context_runner';

/**
   Retries with a fresh password token.


   `enter`: Save current `enterQueue` to `retryQueue` and save current `attempts` count

   `error`: Try to fetch new password token. If successful, save it to `ctx`

   Changes to `ctx`:

   - add `anonTokenRetry`
   - add `authToken`
 */
export default class RetryWithRefreshToken {
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
    const {
      authToken,
      clientId,
      refreshTokenRetry: { retryQueue, attempts },
    } = errorCtx;

    if (attempts > 1) {
      return errorCtx;
    }

    if (errorCtx.res && errorCtx.res.status === 401 && authToken.refresh_token) {
      return authTokenContextRunner
        .requestToken(errorCtx, {
          // Use clientId from token, if found. Else, use configured clientId.
          // Please note that multitenant SDK never has configured clientId.
          client_id: authToken.clientId || clientId,
          grant_type: 'refresh_token',
          refresh_token: authToken.refresh_token,
        })
        .then(({ authToken: newAuthToken }) => ({
          ...errorCtx,
          authToken: newAuthToken,
          enterQueue: retryQueue,
          error: null,
        }))
        .catch(e => ({
          ...errorCtx,
          refreshTokenRetry: { retryQueue, attempts, res: e.response },
        }));
    }

    return errorCtx;
  }
}
