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
import AuthInfo from './interceptors/auth_info';
import defaultParams from './interceptors/default_params';
import MultipartRequest from './interceptors/multipart_request';
import TransitRequest from './interceptors/transit_request';
import TransitResponse from './interceptors/transit_response';
import { createDefaultTokenStore } from './token_store';
import contextRunner from './context_runner';

/* eslint-disable class-methods-use-this */

const defaultSdkConfig = {
  clientId: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  typeHandlers: [],
  endpoints: [],
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
   List of all known endpoints

   - apiName: api / auth
   - path: URL path to the endpoint
   - internal: Is this method SDK internal only,
     or will it be part of the public SDK interface
   - method: HTTP method
 */
const endpointDefinitions = [
  {
    apiName: 'api',
    path: 'marketplace/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'users/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'current_user/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'current_user/create',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/update_profile',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/change_email',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/change_password',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/verify_email',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/send_verification_email',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/create_stripe_account',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/update_stripe_account',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'current_user/delete_stripe_account',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'password_reset/request',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'password_reset/reset',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'listings/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'own_listings/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'listings/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'own_listings/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'listings/search',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'own_listings/create',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/create_draft',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/publish_draft',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/discard_draft',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/update',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/open',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/close',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'own_listings/add_image',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'availability_exceptions/create',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'availability_exceptions/delete',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'availability_exceptions/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'images/upload',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new MultipartRequest()],
  },
  {
    apiName: 'api',
    path: 'transactions/initiate',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'transactions/initiate_speculative',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'transactions/transition',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'transactions/transition_speculative',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'transactions/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'transactions/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'process_transitions/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'bookings/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'messages/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'messages/send',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'reviews/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'reviews/show',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'timeslots/query',
    internal: false,
    method: 'get',
    interceptors: [new TransitResponse()],
  },
  {
    apiName: 'api',
    path: 'stripe_account/create',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'stripe_account/update',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  {
    apiName: 'api',
    path: 'stripe_persons/create',
    internal: false,
    method: 'post',
    interceptors: [new TransitResponse(), new TransitRequest()],
  },
  { apiName: 'auth', path: 'token', internal: true, method: 'post', interceptors: [] },
  { apiName: 'auth', path: 'revoke', internal: true, method: 'post', interceptors: [] },

  /* ******************************************************************************** */

  /*   Deprecated endpoints                                                           */

  /* ******************************************************************************** */
];

const authenticateInterceptors = [
  new FetchAuthTokenFromStore(),
  new FetchAuthTokenFromApi(),
  new RetryWithAnonToken(),
  new RetryWithRefreshToken(),
  new AddAuthHeader(),
];

const loginInterceptors = [
  defaultParams({ grant_type: 'password', scope: 'user' }),
  new AddClientIdToParams(),
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

/**
   Take endpoint definitions and return SDK function definition.
 */
const sdkFnDefsFromEndpointDefs = epDefs =>
  epDefs
    .filter(({ internal = false }) => !internal)
    .map(({ apiName, path, method }) => {
      const fnPath = urlPathToFnPath(path);
      const fullFnPath = [apiName, ...fnPath];

      return {
        method,
        path: fnPath,
        endpointInterceptorPath: fullFnPath,
        interceptors: [...authenticateInterceptors],
      };
    });

/**
   List of SDK methods that will be part of the SDKs public interface.
   The list is created from the `endpointDefinitions` list.

   The objects in the list have following fields:

   - path (String | Array): The function name and path. I.e. if the path is `listings.show`,
     then there will be a public SDK method `sdk.listings.show`
   - endpointInterceptorPath (String | Array): Path to endpoint interceptor
   - interceptors: List of additional interceptors.

 */
const endpointSdkFnDefinitions = sdkFnDefsFromEndpointDefs(endpointDefinitions);

/**
   List of SDK methods that are not derived from the endpoints.
 */
const additionalSdkFnDefinitions = [
  { path: 'login', endpointInterceptorPath: 'auth.token', interceptors: loginInterceptors },
  { path: 'logout', endpointInterceptorPath: 'auth.revoke', interceptors: [...logoutInterceptors] },
  { path: 'authInfo', interceptors: [new AuthInfo()] },
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
const createEndpointInterceptors = ({ method, url, httpOpts }) => {
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

const createSdkFnContextRunner = ({
  params,
  queryParams,
  perRequestOpts,
  ctx,
  interceptors,
  endpointInterceptors,
}) =>
  contextRunner(_.compact([...interceptors, ...endpointInterceptors]))({
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

  return sdkConfig;
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

    // Read the endpoint definitions and do some mapping
    const endpointDefs = [...endpointDefinitions].map(epDef => {
      const { path, apiName, method, interceptors = [] } = epDef;
      const fnPath = urlPathToFnPath(path);
      const fullFnPath = [apiName, ...fnPath];
      const url = [apiName, path].join('/');
      const httpOpts = apiConfigs[apiName];

      const endpointInterceptors = [
        ...interceptors,
        createEndpointInterceptors({ method, url, httpOpts }),
      ];

      return {
        ...epDef,
        fnPath,
        fullFnPath,
        endpointInterceptors,
      };
    });

    // Create `endpointInterceptors` object, which is object
    // containing interceptors for all defined endpoints.
    // This object can be passed to other interceptors in the interceptor context so they
    // are able to do API calls (e.g. authentication interceptors)
    const endpointInterceptors = endpointDefs.reduce(
      (acc, { fullFnPath, endpointInterceptors: interceptors }) =>
        _.set(acc, fullFnPath, interceptors),
      {}
    );

    // Create a context object that will be passed to the interceptor context runner
    const ctx = {
      tokenStore: sdkConfig.tokenStore,
      endpointInterceptors,
      clientId: sdkConfig.clientId,
      typeHandlers: sdkConfig.typeHandlers,
      transitVerbose: sdkConfig.transitVerbose,
    };

    // Create SDK functions
    const sdkFns = [...endpointSdkFnDefinitions, ...additionalSdkFnDefinitions].map(
      ({ path, method, endpointInterceptorPath, interceptors }) => ({
        path,
        fn: createSdkFn({
          method,
          ctx,
          endpointInterceptors: _.get(endpointInterceptors, endpointInterceptorPath) || [],
          interceptors,
        }),
      })
    );

    // Assign SDK functions to 'this'
    sdkFns.forEach(({ path, fn }) => _.set(this, path, fn));
  }
}
