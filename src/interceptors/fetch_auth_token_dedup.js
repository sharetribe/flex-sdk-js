import contextRunner from '../context_runner';
import SaveToken from './save_token';
import AddAuthTokenResponse from './add_auth_token_response';

/**
   Fetches auth token from token store, and if not found, fetches anonymous token from the API.

   Implements deduplication to prevent multiple parallel auth/token calls.

   Changes to the `ctx`:

   - add `authToken`
*/
export default class FetchAuthTokenDedup {
  enter(enterCtx) {
    const { tokenStore, endpointInterceptors, clientId, dedup } = enterCtx;

    // Store auth request to memo and use it in subsequent calls
    if (!dedup.authRequest) {
      dedup.authRequest = Promise.resolve()
        .then(() => {
          if (!tokenStore) {
            return null;
          }

          return tokenStore.getToken();
        })
        .then(storedToken => {
          if (storedToken) {
            return storedToken;
          }

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
          })
            .then(response => {
              // Clear auth request memo
              dedup.authRequest = null;
              return response;
            })
            .then(({ authToken: newAuthToken }) => newAuthToken);
        });
    }

    return dedup.authRequest.then(authToken => ({ ...enterCtx, authToken }));
  }
}
