import contextRunner from '../context_runner';
import SaveToken from './save_token';
import AddAuthTokenResponse from './add_auth_token_response';

/**
   If there's no `authToken` stored to the `ctx`, try to fetch new auth token from the API.

   Changes to the `ctx`:

   - add `authToken`
*/
export default class FetchAuthTokenFromApi {
  enter(ctx) {
    const { tokenStore, authToken, endpointInterceptors, clientId } = ctx;

    if (authToken) {
      return ctx;
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
    }).then(({ authToken: newAuthToken }) => ({ ...ctx, authToken: newAuthToken }));
  }
}
