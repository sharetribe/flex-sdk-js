import contextRunner from '../context_runner';
import SaveToken from './save_token';
import AddAuthTokenResponse from './add_auth_token_response';

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
      tokenStore,
      endpointInterceptors,
      refreshTokenRetry: { retryQueue, attempts },
    } = errorCtx;

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
