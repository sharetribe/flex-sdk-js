import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash, formData } from './utils';
import AddMultitenantAuthTokenResponse from './interceptors/add_multitenant_auth_token_response';
import SaveToken from './interceptors/save_token';
import AddMultitenantClientSecretTokenToCtx from './interceptors/add_multitenant_client_secret_token_to_ctx';
import AddMultitenantClientSecretToParams from './interceptors/add_multitenant_client_secret_to_params';
import AddMultitenantTokenExchangeParams from './interceptors/add_multitenant_token_exchange_params';
import FormatHttpResponse from './interceptors/format_http_response';
import FormatMultitenantHttpResponse from './interceptors/format_multitenant_http_response';
import endpointRequest from './interceptors/endpoint_request';
import AddMultitenantAuthHeader from './interceptors/add_multitenant_auth_header';
import RenameIdpParamsForAuth from './interceptors/rename_idp_params_for_auth';
import AddMultitenantAuthWithIdpResponse from './interceptors/add_multitenant_auth_with_idp_response';
import createSdkFnContextRunner from './sdk_context_runner';
import memoryStore from './memory_store';
import contextRunner from './context_runner';
import { isBrowser } from './runtime';

/* eslint-disable class-methods-use-this */

const defaultSdkConfig = {
  hostname: null,
  multitenantClientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null,
};

const multitenantAuthApi = [
  {
    path: 'token',
    method: 'post',
  },
  {
    path: 'client_data',
    method: 'get',
  },
  {
    path: 'auth_with_idp',
    method: 'post',
  },
];

const apis = {
  auth: ({ baseUrl, version, adapter, httpAgent, httpsAgent }) => ({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    baseURL: `${baseUrl}/${version}/`,
    transformRequest: [data => formData(data)],
    adapter,
    httpAgent,
    httpsAgent,
  }),
};

const tokenInterceptors = authApiEndpointInterceptors => [
  new FormatHttpResponse(),
  new FormatMultitenantHttpResponse(),
  new AddMultitenantClientSecretTokenToCtx(),
  new AddMultitenantClientSecretToParams(),
  new SaveToken(),
  new AddMultitenantAuthTokenResponse(),
  ..._.get(authApiEndpointInterceptors, 'token'),
];

const clientDataInterceptors = authApiEndpointInterceptors => [
  new FormatHttpResponse(),
  new AddMultitenantClientSecretTokenToCtx(),
  new AddMultitenantAuthHeader(),
  ..._.get(authApiEndpointInterceptors, 'clientData'),
];

const tokenAndClientDataInterceptor = authApiEndpointInterceptors => ({
  enter: ctx => {
    const { tokenStore } = ctx;
    return Promise.resolve()
      .then(tokenStore.getToken)
      .then(storedToken => {
        // If there's a token with any access, it's only necessary
        // to fetch the client data. Else, we request a token and
        // the response will also contain the client data.
        // We don't need to distinguish between token scopes.
        if (storedToken) {
          return contextRunner(clientDataInterceptors(authApiEndpointInterceptors))(ctx).then(
            newCtx => {
              const { res } = newCtx;
              return {
                ...newCtx,
                res: {
                  ...res,
                  data: {
                    client_data: res.data,
                  },
                },
              };
            }
          );
        }

        return contextRunner(tokenInterceptors(authApiEndpointInterceptors))({
          ...ctx,
          params: { grant_type: 'multitenant_client_credentials' },
        });
      });
  },
});

const authWithIdpInterceptors = authApiEndpointInterceptors => [
  new FormatHttpResponse(),
  new AddMultitenantClientSecretTokenToCtx(),
  new AddMultitenantClientSecretToParams(),
  new RenameIdpParamsForAuth(),
  new SaveToken(),
  new AddMultitenantAuthWithIdpResponse(),
  ..._.get(authApiEndpointInterceptors, 'authWithIdp'),
];

const createAuthApiSdkFn = ({ ctx, interceptors }) => (params = {}) =>
  createSdkFnContextRunner({ params, ctx, interceptors });

/**
   List of auth-related SDK methods
 */
const authApiSdkFns = (authApiEndpointInterceptors, ctx) => [
  {
    path: 'clientData',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [tokenAndClientDataInterceptor(authApiEndpointInterceptors)],
    }),
  },
  {
    path: 'tokenExchange',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        new AddMultitenantTokenExchangeParams(),
        ...tokenInterceptors(authApiEndpointInterceptors),
      ],
    }),
  },
  {
    path: 'loginWithIdp',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: authWithIdpInterceptors(authApiEndpointInterceptors),
    }),
  },
];

// Take SDK configurations, do transformation and return.
const transformSdkConfig = ({ baseUrl, tokenStore, ...sdkConfig }) => ({
  ...sdkConfig,
  baseUrl: trimEndSlash(baseUrl),
  tokenStore: tokenStore || memoryStore(),
});

// Validate SDK configurations, throw an error if invalid, otherwise return.
const validateSdkConfig = sdkConfig => {
  if (!sdkConfig.hostname) {
    throw new Error('hostname must be provided');
  }

  if (!sdkConfig.multitenantClientSecret) {
    throw new Error('multitenantClientSecret must be provided');
  }

  if (!sdkConfig.baseUrl) {
    throw new Error('baseUrl must be provided');
  }

  if (isBrowser) {
    throw new Error('Using the multitenant SDK in browser is not allowed.');
  }

  return sdkConfig;
};

const createAuthApiEndpointInterceptors = httpOpts =>
  // Create `endpointInterceptors` object, which is object
  // containing interceptors for all defined endpoints.
  // This object can be passed to other interceptors in the interceptor context so they
  // are able to do API calls (e.g. authentication interceptors)
  //
  multitenantAuthApi.reduce((acc, { path, method }) => {
    const fnPath = urlPathToFnPath(path);
    const url = `auth/multitenant/${path}`;
    return _.set(acc, fnPath, [endpointRequest({ method, url, httpOpts })]);
  }, {});

export default class MultitenantSharetribeSdk {
  /**
     Instantiates a new MultitenantSharetribeSdk instance.
     The constructor assumes the config options have been
     already validated.
   */
  constructor(userSdkConfig) {
    // Transform and validation SDK configurations
    const sdkConfig = validateSdkConfig(
      transformSdkConfig({ ...defaultSdkConfig, ...userSdkConfig })
    );

    // Instantiate API configs
    const apiConfigs = _.mapValues(apis, apiConfig => apiConfig(sdkConfig));
    const authApiEndpointInterceptors = createAuthApiEndpointInterceptors(apiConfigs.auth);

    const allEndpointInterceptors = {
      auth: authApiEndpointInterceptors,
    };

    const ctx = {
      endpointInterceptors: allEndpointInterceptors,
      multitenantClientSecret: sdkConfig.multitenantClientSecret,
      hostname: sdkConfig.hostname,
      tokenStore: sdkConfig.tokenStore,
    };

    // Assign SDK functions to 'this'
    authApiSdkFns(authApiEndpointInterceptors, ctx).forEach(({ path, fn }) =>
      _.set(this, path, fn)
    );
  }
}
