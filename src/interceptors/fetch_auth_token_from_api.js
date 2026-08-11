import * as authTokenContextRunner from '../auth_token_context_runner';

/**
   Create a store for in-flight auth request. 
*/
export function createInFlightAuthRequestStore() {
  // We simply use a mutable object here
  return {};
}

/**
   If there's no `authToken` stored to the `ctx`, try to fetch new auth token from the API.

   Changes to the `ctx`:

   - add `authToken`
*/
export default class FetchAuthTokenFromApi {
  enter(ctx) {
    const { authToken, clientId, inFlightAuthRequestStore } = ctx;

    if (authToken) {
      return ctx;
    }

    if (!inFlightAuthRequestStore.inFlightRequest) {
      inFlightAuthRequestStore.inFlightRequest = authTokenContextRunner.requestToken(ctx, {
        client_id: clientId,
        grant_type: 'client_credentials',
        scope: 'public-read',
      });
    }

    return inFlightAuthRequestStore.inFlightRequest
      .then(({ authToken: newAuthToken }) => ({
        ...ctx,
        authToken: newAuthToken,
      }))
      .then(newCtx => {
        // Clean up
        inFlightAuthRequestStore.inFlightRequest = null;

        return newCtx;
      });
  }
}
