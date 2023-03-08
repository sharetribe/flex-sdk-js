import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash, formData } from './utils';
import AddAuthTokenResponse from './interceptors/add_auth_token_response';
import SaveToken from './interceptors/save_token';
import AddClientSecretToParams from './interceptors/add_client_secret_to_params';
import FormatHttpResponse from './interceptors/format_http_response';
import endpointRequest from './interceptors/endpoint_request';
import createSdkFnContextRunner from './sdk_context_runner';
import memoryStore from './memory_store';
import AuthInfo from './interceptors/auth_info';

/* eslint-disable class-methods-use-this */

const defaultSdkConfig = {
  clientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null
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

const authInterceptors = [
  // TODO: encode secret as JWT
  new AddClientSecretToParams(),
  new SaveToken(),
  new AddAuthTokenResponse(),
];

const createAuthApiSdkFn = ({ ctx, interceptors }) => (params = {}) =>
  createSdkFnContextRunner({ params, ctx, interceptors });

/**
   List of auth-related SDK methods
 */
const authApiSdkFns = (authApiEndpointInterceptors, ctx) => [
  {
    path: 'token',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        new FormatHttpResponse(),
        ...authInterceptors,
        ..._.get(authApiEndpointInterceptors, 'token'),
      ],
    }),
  },
  {
    path: 'clientData',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        new FormatHttpResponse(),
        ...authInterceptors,
        ..._.get(authApiEndpointInterceptors, 'clientData'),
      ],
    }),
  },
  {
    path: 'authInfo',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [new AuthInfo()],
    }),
  },
];

// Take SDK configurations, do transformation and return.
const transformSdkConfig = ({ baseUrl, tokenStore, ...sdkConfig }) => ({
  ...sdkConfig,
  baseUrl: trimEndSlash(baseUrl),
  tokenStore: tokenStore || memoryStore()
});

// Validate SDK configurations, throw an error if invalid, otherwise return.
const validateSdkConfig = sdkConfig => {
  if (!sdkConfig.clientSecret) {
    throw new Error('clientSecret must be provided');
  }

  if (!sdkConfig.baseUrl) {
    throw new Error('baseUrl must be provided');
  }

  /* global window */
  const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

  if (isBrowser && sdkConfig.clientSecret) {
    throw new Error('Using the client secret in a browser is not allowed.');
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
      clientSecret: sdkConfig.clientSecret,
      tokenStore: sdkConfig.tokenStore,
    };

    // Assign SDK functions to 'this'
    authApiSdkFns(authApiEndpointInterceptors, ctx).forEach(({ path, fn }) =>
      _.set(this, path, fn)
    );
  }
}
