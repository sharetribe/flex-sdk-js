import contextRunner from './context_runner';
import SaveToken from './interceptors/save_token';
import AddAuthTokenResponse from './interceptors/add_auth_token_response';

// Set and get the interceptor that calls /auth/token endpoint to the ctx
export const setAuthTokenInterceptors = (ctx, authTokenInterceptors) => ({
  ...ctx,
  authTokenInterceptors,
});
export const getAuthTokenInterceptors = ctx => ctx.authTokenInterceptors;

/**
   Create a new context running for interceptors that will call /auth/token
   endpoint and save the new token to the token store.
 */
const createContextRunner = ctx =>
  contextRunner([new SaveToken(), new AddAuthTokenResponse(), ...getAuthTokenInterceptors(ctx)]);

/**
   Request a new token
 
   Options:
   - `ctx`
   - `params` to pass to `/auth/token` endpoint

   Returns a Promise

   The function creates a new context runner and immediately runs it with the given params.

   The interceptors that call the `/auth/token` endpoint must be set with
   `setAuthTokenInterceptors` before calling this function. This is usually done
   during the initialization of the SDK instance.
 
   This function is used by interceptors that need to request a new token, i.e.
   interceptors that retry with refresh/anon token and fetch new anon token

   Token request uses token store from ctx, which allows the new token to be
   saved to the store.
 */
export const requestToken = (ctx, params) =>
  createContextRunner(ctx)({ params, tokenStore: ctx.tokenStore });
