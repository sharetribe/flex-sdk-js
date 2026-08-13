import * as authTokenContextRunner from '../auth_token_context_runner';

/**
   Retries with a fresh anon token.

   `enter`: Save current `enterQueue` to `retryQueue` and save current `attempts` count

   `error`: Try to fetch new anon token. If successful, save it to `ctx`

   Changes to `ctx`:

   - add `anonTokenRetry`
   - add `authToken`
 */
export default class RetryWithAnonToken {
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
    const {
      clientId,
      anonTokenRetry: { retryQueue, attempts },
    } = errorCtx;

    if (attempts > 1) {
      return errorCtx;
    }

    if (errorCtx.res && errorCtx.res.status === 401) {
      return authTokenContextRunner
        .requestToken(errorCtx, {
          client_id: clientId,
          grant_type: 'client_credentials',
          scope: 'public-read',
        })
        .then(({ authToken }) => ({ ...errorCtx, authToken, enterQueue: retryQueue, error: null }));
    }

    return errorCtx;
  }
}
