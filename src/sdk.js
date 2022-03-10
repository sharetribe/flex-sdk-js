import axios from 'axios';
import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash, formData } from './utils';
import paramsSerializer from './params_serializer';
import AddAuthHeader from './interceptors/add_auth_header';
import RetryWithRefreshToken from './interceptors/retry_with_refresh_token';
import RetryWithAnonToken from './interceptors/retry_with_anon_token';
import ClearTokenAfterRevoke from './interceptors/clear_token_after_revoke';
import FetchRefreshTokenForRevoke from './interceptors/fetch_refresh_token_for_revoke';
import AddAuthTokenResponse from './interceptors/add_auth_token_response';
import SaveToken from './interceptors/save_token';
import FetchAuthTokenFromApi from './interceptors/fetch_auth_token_from_api';
import FetchAuthTokenFromStore from './interceptors/fetch_auth_token_from_store';
import AddClientIdToParams from './interceptors/add_client_id_to_params';
import AddClientSecretToParams from './interceptors/add_client_secret_to_params';
import AddIdpClientIdToParams from './interceptors/add_idp_client_id_to_params';
import AddIdpIdToParams from './interceptors/add_idp_id_to_params';
import AddIdpTokenToParams from './interceptors/add_idp_token_to_params';
import AddSubjectTokenToParams from './interceptors/add_subject_token_to_params';
import AddGrantTypeToParams from './interceptors/add_grant_type_to_params';
import AddTokenExchangeGrantTypeToParams from './interceptors/add_token_exchange_grant_type_to_params';
import AddScopeToParams from './interceptors/add_scope_to_params';
import AuthInfo from './interceptors/auth_info';
import MultipartRequest from './interceptors/multipart_request';
import TransitRequest from './interceptors/transit_request';
import TransitResponse from './interceptors/transit_response';
import { createDefaultTokenStore } from './token_store';
import contextRunner from './context_runner';

/* eslint-disable class-methods-use-this */

const defaultSdkConfig = {
  clientId: null,
  clientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  typeHandlers: [],
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null,
  transitVerbose: false,
};

/**
   Basic configurations for different 'apis'.

   Currently we have two apis:

   - `api`: the marketplace API
   - `auth`: the authentication API

   These configurations will be passed to Axios library.
   They define how to do the requets to the APIs, e.g.
   how the parameters should be serialized,
   what are the headers that should be always sent and
   how to transform requests and response, etc.
 */

const createHeaders = transitVerbose => {
  if (transitVerbose) {
    return {
      'X-Transit-Verbose': 'true',
      Accept: 'application/transit+json',
    };
  }

  return {
    Accept: 'application/transit+json',
  };
};

const apis = {
  api: ({ baseUrl, version, adapter, httpAgent, httpsAgent, transitVerbose }) => ({
    headers: createHeaders(transitVerbose),
    baseURL: `${baseUrl}/${version}`,
    transformRequest: v => v,
    transformResponse: v => v,
    adapter,
    paramsSerializer,
    httpAgent,
    httpsAgent,
  }),
  auth: ({ baseUrl, version, adapter, httpAgent, httpsAgent }) => ({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    baseURL: `${baseUrl}/${version}/`,
    transformRequest: [data => formData(data)],
    // using default transformRequest, which can handle JSON and fallback to plain
    // test if JSON parsing fails
    adapter,
    httpAgent,
    httpsAgent,
  }),
};

/**
   List of Marketplace API endpoints

   - path: URL path to the endpoint
   - method: HTTP method
 */
const marketplaceApiEndpoints = [
  {
    path: 'marketplace/show',
    method: 'get',
  },
  {
    path: 'users/show',
    method: 'get',
  },
  {
    path: 'current_user/show',
    method: 'get',
  },
  {
    path: 'current_user/create',
    method: 'post',
  },
  {
    path: 'current_user/create_with_idp',
    method: 'post',
  },
  {
    path: 'current_user/update_profile',
    method: 'post',
  },
  {
    path: 'current_user/change_email',
    method: 'post',
  },
  {
    path: 'current_user/change_password',
    method: 'post',
  },
  {
    path: 'current_user/delete',
    method: 'post',
  },
  {
    path: 'current_user/verify_email',
    method: 'post',
  },
  {
    path: 'current_user/send_verification_email',
    method: 'post',
  },
  {
    path: 'current_user/create_stripe_account',
    method: 'post',
  },
  {
    path: 'current_user/update_stripe_account',
    method: 'post',
  },
  {
    path: 'current_user/delete_stripe_account',
    method: 'post',
  },
  {
    path: 'password_reset/request',
    method: 'post',
  },
  {
    path: 'password_reset/reset',
    method: 'post',
  },
  {
    path: 'listings/show',
    method: 'get',
  },
  {
    path: 'own_listings/show',
    method: 'get',
  },
  {
    path: 'listings/query',
    method: 'get',
  },
  {
    path: 'own_listings/query',
    method: 'get',
  },
  {
    path: 'listings/search',
    method: 'get',
  },
  {
    path: 'own_listings/create',
    method: 'post',
  },
  {
    path: 'own_listings/create_draft',
    method: 'post',
  },
  {
    path: 'own_listings/publish_draft',
    method: 'post',
  },
  {
    path: 'own_listings/discard_draft',
    method: 'post',
  },
  {
    path: 'own_listings/update',
    method: 'post',
  },
  {
    path: 'own_listings/open',
    method: 'post',
  },
  {
    path: 'own_listings/close',
    method: 'post',
  },
  {
    path: 'own_listings/add_image',
    method: 'post',
  },
  {
    path: 'availability_exceptions/create',
    method: 'post',
  },
  {
    path: 'availability_exceptions/delete',
    method: 'post',
  },
  {
    path: 'availability_exceptions/query',
    method: 'get',
  },
  {
    path: 'images/upload',
    method: 'post',
  },
  {
    path: 'transactions/initiate',
    method: 'post',
  },
  {
    path: 'transactions/initiate_speculative',
    method: 'post',
  },
  {
    path: 'transactions/transition',
    method: 'post',
  },
  {
    path: 'transactions/transition_speculative',
    method: 'post',
  },
  {
    path: 'transactions/query',
    method: 'get',
  },
  {
    path: 'transactions/show',
    method: 'get',
  },
  {
    path: 'process_transitions/query',
    method: 'get',
  },
  {
    path: 'bookings/query',
    method: 'get',
  },
  {
    path: 'messages/query',
    method: 'get',
  },
  {
    path: 'messages/send',
    method: 'post',
  },
  {
    path: 'reviews/query',
    method: 'get',
  },
  {
    path: 'reviews/show',
    method: 'get',
  },
  {
    path: 'timeslots/query',
    method: 'get',
  },
  {
    path: 'stripe_account/create',
    method: 'post',
  },
  {
    path: 'stripe_account/fetch',
    method: 'get',
  },
  {
    path: 'stripe_account/update',
    method: 'post',
  },
  {
    path: 'stripe_account_links/create',
    method: 'post',
  },
  {
    path: 'stripe_persons/create',
    method: 'post',
  },
  {
    path: 'stripe_setup_intents/create',
    method: 'post',
  },
  {
    path: 'stripe_customer/create',
    method: 'post',
  },
  {
    path: 'stripe_customer/add_payment_method',
    method: 'post',
  },
  {
    path: 'stripe_customer/delete_payment_method',
    method: 'post',
  },
  {
    path: 'stock_adjustments/query',
    method: 'get',
  },
  {
    path: 'stock_adjustments/create',
    method: 'post',
  },
  {
    path: 'stock/compare_and_set',
    method: 'post',
  },
];

/**
   List of Auth API endpoints

   - path: URL path to the endpoint
   - method: HTTP method
 */
const authApiEndpoints = [
  {
    path: 'token',
    method: 'post',
  },
  {
    path: 'revoke',
    method: 'post',
  },
  {
    path: 'auth_with_idp',
    method: 'post',
  },
];

const authenticateInterceptors = [
  new FetchAuthTokenFromStore(),
  new FetchAuthTokenFromApi(),
  new RetryWithAnonToken(),
  new RetryWithRefreshToken(),
  new AddAuthHeader(),
];

const loginInterceptors = [
  new AddClientIdToParams(),
  new AddGrantTypeToParams(),
  new AddScopeToParams(),
  new SaveToken(),
  new AddAuthTokenResponse(),
];

const logoutInterceptors = [
  new FetchAuthTokenFromStore(),
  new ClearTokenAfterRevoke(),
  new RetryWithRefreshToken(),
  new AddAuthHeader(),
  new FetchRefreshTokenForRevoke(),
];

const exchangeTokenInterceptors = [
  new FetchAuthTokenFromStore(),
  new RetryWithRefreshToken(),
  new AddClientIdToParams(),
  new AddClientSecretToParams(),
  new AddSubjectTokenToParams(),
  new AddTokenExchangeGrantTypeToParams(),
];

const authWithIdpInterceptors = [
  new AddClientIdToParams(),
  new AddClientSecretToParams(),
  new AddIdpClientIdToParams(),
  new AddIdpIdToParams(),
  new AddIdpTokenToParams(),
  new SaveToken(),
  new AddAuthTokenResponse(),
];

/**
   List of Marketplace API SDK methods that will be part of the SDKs public interface.
   The list is created from the `marketplaceApiEndpoints` list.

   The resulting objects in the list will have following fields:

   - method (String): get or post
   - path (String | Array): The function name and path. I.e. if the path is `listings.show`,
     then there will be a public SDK method `sdk.listings.show`
   - interceptors: List of interceptors.
 */
const marketplaceApiSdkFnDefinitions = marketplaceApiEndpointInterceptors =>
  marketplaceApiEndpoints.map(({ path, method }) => {
    const fnPath = urlPathToFnPath(path);

    return {
      method,
      path: fnPath,
      interceptors: [
        ...authenticateInterceptors,
        ...(_.get(marketplaceApiEndpointInterceptors, fnPath) || []),
      ],
    };
  });

/**
   List of SDK methods that are not derived from the endpoints.
 */
const authSdkFnDefinitions = authApiEndpointInterceptors => [
  {
    path: 'login',
    interceptors: [...loginInterceptors, ..._.get(authApiEndpointInterceptors, 'token')],
  },
  {
    path: 'logout',
    interceptors: [...logoutInterceptors, ..._.get(authApiEndpointInterceptors, 'revoke')],
  },
  {
    path: 'exchangeToken',
    interceptors: [...exchangeTokenInterceptors, ..._.get(authApiEndpointInterceptors, 'token')],
  },
  { path: 'authInfo', interceptors: [new AuthInfo()] },
  {
    path: 'loginWithIdp',
    interceptors: [
      ...authWithIdpInterceptors,
      ..._.get(authApiEndpointInterceptors, 'authWithIdp'),
    ],
  },
];

// const logAndReturn = (data) => {
//   console.log(data);
//   return data;
// };

const handleSuccessResponse = response => {
  const { status, statusText, data } = response;

  return { status, statusText, data };
};

// GET requests: `params` includes query params. `queryParams` will be ignored
// POST requests: `params` includes body params. `queryParams` includes URL query params
const doRequest = ({ params = {}, queryParams = {}, httpOpts }) => {
  const { method = 'get' } = httpOpts;

  let data = null;
  let query = null;

  if (method.toLowerCase() === 'post') {
    data = params;
    query = queryParams;
  } else {
    query = params;
    // leave `data` null
  }

  const req = {
    ...httpOpts,
    method,
    data,
    params: query,
  };

  return axios.request(req).then(handleSuccessResponse);
};

/**
   Creates a list of endpoint interceptors that call the endpoint with the
   given parameters.
*/
const createEndpointInterceptor = ({ method, url, httpOpts }) => {
  const { headers: httpOptsHeaders, ...restHttpOpts } = httpOpts;

  return {
    enter: ctx => {
      const { params, queryParams, headers, perRequestOpts } = ctx;
      return doRequest({
        params,
        queryParams,
        httpOpts: {
          ...perRequestOpts,
          method: method || 'get',
          // Merge additional headers
          headers: { ...httpOptsHeaders, ...headers },
          ...restHttpOpts,
          url,
        },
      })
        .then(res => ({ ...ctx, res }))
        .catch(error => {
          const errorCtx = { ...ctx, res: error.response };
          // eslint-disable-next-line no-param-reassign
          error.ctx = errorCtx;
          throw error;
        });
    },
  };
};

const formatError = e => {
  /* eslint-disable no-param-reassign */
  if (e.response) {
    const { status, statusText, data } = e.response;
    Object.assign(e, { status, statusText, data });
    delete e.response;
  }

  if (e.ctx) {
    // Remove context `ctx` from the error response.
    //
    // `ctx` is SDK internal and should be exposed as a part of the
    // SDK public API. It can be added in the response for debugging
    // purposes, if needed.
    delete e.ctx;
  }

  if (e.config) {
    // Axios attachs the config object that was used to the error.
    //
    // Remove context `config` from the error response.
    //
    // `ctx` is SDK internal and should be exposed as a part of the
    // SDK public API. It can be added in the response for debugging
    // purposes, if needed.
    delete e.config;
  }

  throw e;
  /* eslint-enable no-param-reassign */
};

const allowedPerRequestOpts = opts => _.pick(opts, ['onUploadProgress']);

const createSdkFnContextRunner = ({ params, queryParams, perRequestOpts, ctx, interceptors }) =>
  contextRunner(_.compact(interceptors))({
    ...ctx,
    params,
    queryParams,
    perRequestOpts,
  })
    .then(({ res }) => res)
    .catch(formatError);
const createSdkPostFn = sdkFnParams => (params = {}, queryParams = {}, perRequestOpts = {}) =>
  createSdkFnContextRunner({
    params,
    queryParams,
    perRequestOpts: allowedPerRequestOpts(perRequestOpts),
    ...sdkFnParams,
  });
const createSdkGetFn = sdkFnParams => (params = {}) =>
  createSdkFnContextRunner({ params, ...sdkFnParams });
/**
   Creates a new SDK function.

   'sdk function' is a function that will be attached to the SDK instance.
   These functions will be part of the SDK's public interface.

   It's meant to used by the user of the SDK.
 */
const createSdkFn = ({ method, ...sdkFnParams }) => {
  if (method && method.toLowerCase() === 'post') {
    return createSdkPostFn(sdkFnParams);
  }

  return createSdkGetFn(sdkFnParams);
};

// Take SDK configurations, do transformation and return.
const transformSdkConfig = ({ baseUrl, tokenStore, ...sdkConfig }) => ({
  ...sdkConfig,
  baseUrl: trimEndSlash(baseUrl),
  tokenStore:
    tokenStore || createDefaultTokenStore(tokenStore, sdkConfig.clientId, !!sdkConfig.secure),
});

// Validate SDK configurations, throw an error if invalid, otherwise return.
const validateSdkConfig = sdkConfig => {
  if (!sdkConfig.clientId) {
    throw new Error('clientId must be provided');
  }

  if (!sdkConfig.baseUrl) {
    throw new Error('baseUrl must be provided');
  }

  /* global window, console */
  const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

  if (isBrowser && sdkConfig.clientSecret && !sdkConfig.dangerouslyAllowClientSecretInBrowser) {
    /* eslint-disable no-console */
    console.warn(
      'Security warning! You are using client secret in a browser. This may expose the client secret to the public.'
    );
    console.warn(
      'If you know what you are doing and you have secured the website by other means (e.g. HTTP basic auth), you should set the SDK configuration `dangerouslyAllowClientSecretInBrowser` to `true` to dismiss this warning.'
    );
    console.warn(
      'In the future SDK versions, we may change this warning to an error causing the site not to work properly, unless `dangerouslyAllowClientSecretInBrowser` is set'
    );
    /* eslint-enable no-console */
  }

  return sdkConfig;
};

const createMarketplaceApiEndpointInterceptors = httpOpts =>
  // Create `endpointInterceptors` object, which is object
  // containing interceptors for all defined endpoints.
  // This object can be passed to other interceptors in the interceptor context so they
  // are able to do API calls (e.g. authentication interceptors)
  //
  marketplaceApiEndpoints.reduce((acc, { path, method }) => {
    const fnPath = urlPathToFnPath(path);
    const url = `api/${path}`;
    let transitInterceptors = [];
    if (method === 'post') {
      transitInterceptors = [new TransitResponse(), new TransitRequest()];
    } else {
      transitInterceptors = [new TransitResponse()];
    }

    return _.set(acc, fnPath, [
      ...transitInterceptors,
      createEndpointInterceptor({ method, url, httpOpts }),
    ]);
  }, {});

const createAuthApiEndpointInterceptors = httpOpts =>
  // Create `endpointInterceptors` object, which is object
  // containing interceptors for all defined endpoints.
  // This object can be passed to other interceptors in the interceptor context so they
  // are able to do API calls (e.g. authentication interceptors)
  //
  authApiEndpoints.reduce((acc, { path, method }) => {
    const fnPath = urlPathToFnPath(path);
    const url = `auth/${path}`;
    return _.set(acc, fnPath, [createEndpointInterceptor({ method, url, httpOpts })]);
  }, {});

const createSdkFns = function(sdkFnDefinitions, ctx) {
  // Create a context object that will be passed to the interceptor context runner
  return sdkFnDefinitions.map(({ path, method, interceptors }) => ({
    path,
    fn: createSdkFn({
      method,
      ctx,
      interceptors,
    }),
  }));
};

export default class SharetribeSdk {
  /**
     Instantiates a new SharetribeSdk instance.
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

    const marketplaceApiEndpointInterceptors = createMarketplaceApiEndpointInterceptors(
      apiConfigs.api
    );
    const authApiEndpointInterceptors = createAuthApiEndpointInterceptors(apiConfigs.auth);

    const allEndpointInterceptors = {
      api: marketplaceApiEndpointInterceptors,
      auth: authApiEndpointInterceptors,
    };

    const ctx = {
      tokenStore: sdkConfig.tokenStore,
      endpointInterceptors: allEndpointInterceptors,
      clientId: sdkConfig.clientId,
      clientSecret: sdkConfig.clientSecret,
      typeHandlers: sdkConfig.typeHandlers,
      transitVerbose: sdkConfig.transitVerbose,
    };

    // Assign SDK functions to 'this'
    createSdkFns(marketplaceApiSdkFnDefinitions(marketplaceApiEndpointInterceptors), ctx).forEach(
      ({ path, fn }) => _.set(this, path, fn)
    );
    createSdkFns(authSdkFnDefinitions(authApiEndpointInterceptors), ctx).forEach(({ path, fn }) =>
      _.set(this, path, fn)
    );
  }
}
