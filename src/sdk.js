import _ from 'lodash';
import { fnPath as urlPathToFnPath, trimEndSlash, formData, canonicalAssetPaths } from './utils';
import {
  marketplaceApi as marketplaceApiEndpoints,
  authApi as authApiEndpoints,
  assetsApi as assetsApiEndpoints,
} from './endpoints';
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
import AddSubjectTokenToParams from './interceptors/add_subject_token_to_params';
import AddIsLoggedInAsToContextFromParams from './interceptors/add_is_logged_in_as_to_context_from_params';
import AddIsLoggedInAsToContext from './interceptors/add_is_logged_in_as_to_context';
import AddGrantTypeToParams from './interceptors/add_grant_type_to_params';
import AddAuthorizationCodeGrantTypeToParams from './interceptors/add_authorization_code_grant_type_to_params';
import AddTokenExchangeGrantTypeToParams from './interceptors/add_token_exchange_grant_type_to_params';
import AddScopeToParams from './interceptors/add_scope_to_params';
import AuthInfo from './interceptors/auth_info';
import MultipartRequest from './interceptors/multipart_request';
import TransitRequest from './interceptors/transit_request';
import TransitResponse from './interceptors/transit_response';
import FormatHttpResponse from './interceptors/format_http_response';
import RenameIdpParamsForAuth from './interceptors/rename_idp_params_for_auth';
import endpointRequest from './interceptors/endpoint_request';
import { createDefaultTokenStore } from './token_store';
import createSdkFnContextRunner from './sdk_context_runner';
import { isBrowser } from './runtime';

/* eslint-disable class-methods-use-this */

const defaultSdkConfig = {
  clientId: null,
  clientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  assetCdnBaseUrl: 'https://cdn.st-api.com',
  typeHandlers: [],
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null,
  transitVerbose: false,
  disableDeprecationWarnings: false,
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
  assets: ({ assetCdnBaseUrl, version, adapter, httpAgent, httpsAgent }) => ({
    headers: {
      Accept: 'application/json',
    },
    baseURL: `${assetCdnBaseUrl}/${version}`,
    adapter,
    paramsSerializer,
    httpAgent,
    httpsAgent,
  }),
};

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
  new AddIsLoggedInAsToContextFromParams(),
  new AddScopeToParams(),
  new SaveToken(),
  new AddAuthTokenResponse(),
];

const loginAsInterceptors = [
  new AddClientIdToParams(),
  new AddAuthorizationCodeGrantTypeToParams(),
  new AddIsLoggedInAsToContext(),
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
  new RenameIdpParamsForAuth(),
  new SaveToken(),
  new AddAuthTokenResponse(),
];

const allowedPerRequestOpts = opts => _.pick(opts, ['onUploadProgress']);

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

/**
   List of Marketplace API SDK methods that will be part of the SDKs public interface.
   The list is created from the `marketplaceApiEndpoints` list.

   The resulting objects in the list will have following fields:

   - method (String): get or post
   - path (String | Array): The function name and path. I.e. if the path is `listings.show`,
     then there will be a public SDK method `sdk.listings.show`
   - interceptors: List of interceptors.
 */
const marketplaceApiSdkFns = (marketplaceApiEndpointInterceptors, ctx) =>
  marketplaceApiEndpoints.map(({ path, method }) => {
    const fnPath = urlPathToFnPath(path);
    const fn = createSdkFn({
      method,
      ctx,
      interceptors: [
        new FormatHttpResponse(),
        ...authenticateInterceptors,
        ...(_.get(marketplaceApiEndpointInterceptors, fnPath) || []),
      ],
    });

    return {
      path: fnPath,
      fn,
    };
  });

const createAuthApiSdkFn = ({ ctx, interceptors }) => (params = {}) =>
  createSdkFnContextRunner({ params, ctx, interceptors });

/**
   List of SDK methods that are not derived from the endpoints.
 */
const authApiSdkFns = (authApiEndpointInterceptors, ctx) => [
  {
    path: 'login',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        new FormatHttpResponse(),
        ...loginInterceptors,
        ..._.get(authApiEndpointInterceptors, 'token'),
      ],
    }),
  },
  {
    path: 'loginAs',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        new FormatHttpResponse(),
        ...loginAsInterceptors,
        ..._.get(authApiEndpointInterceptors, 'token'),
      ],
    }),
  },
  {
    path: 'logout',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        new FormatHttpResponse(),
        ...logoutInterceptors,
        ..._.get(authApiEndpointInterceptors, 'revoke'),
      ],
    }),
  },
  {
    path: 'exchangeToken',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [...exchangeTokenInterceptors, ..._.get(authApiEndpointInterceptors, 'token')],
    }),
  },
  {
    path: 'authInfo',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [new AuthInfo()],
    }),
  },
  {
    path: 'loginWithIdp',
    fn: createAuthApiSdkFn({
      ctx,
      interceptors: [
        ...authWithIdpInterceptors,
        ..._.get(authApiEndpointInterceptors, 'authWithIdp'),
      ],
    }),
  },
];

const assetsApiSdkFns = (assetsEndpointInterceptors, ctx) => [
  {
    path: 'assetByAlias',
    fn: ({ path, alias }) => {
      if (!path) {
        throw new Error('Missing mandatory parameter `path`');
      }

      if (!alias) {
        throw new Error('Missing mandatory parameter `alias`');
      }

      return createSdkFnContextRunner({
        ctx,
        pathParams: {
          clientId: ctx.clientId,
          alias: alias || 'latest',
          assetPath: path[0] === '/' ? path.slice(1) : path,
        },
        interceptors: [new FormatHttpResponse(), ..._.get(assetsEndpointInterceptors, 'byAlias')],
      });
    },
  },

  {
    path: 'assetByVersion',
    fn: ({ path, version }) => {
      if (!version) {
        throw new Error('Missing mandatory parameter `version`');
      }

      if (!version) {
        throw new Error('Missing mandatory parameter `version`');
      }

      return createSdkFnContextRunner({
        ctx,
        pathParams: {
          clientId: ctx.clientId,
          version,
          assetPath: path[0] === '/' ? path.slice(1) : path,
        },
        interceptors: [new FormatHttpResponse(), ..._.get(assetsEndpointInterceptors, 'byVersion')],
      });
    },
  },

  {
    path: 'assetsByAlias',
    fn: ({ paths, alias }) => {
      if (!paths) {
        throw new Error('Missing mandatory parameter `paths`');
      }

      if (paths.length === 0) {
        throw new Error('`paths` must not be empty');
      }

      if (!alias) {
        throw new Error('Missing mandatory parameter `alias`');
      }

      const { pathPrefix, relativePaths } = canonicalAssetPaths(paths);

      return createSdkFnContextRunner({
        ctx,
        params: {
          assets: relativePaths,
        },
        pathParams: {
          clientId: ctx.clientId,
          alias,
          assetPath: pathPrefix,
        },
        interceptors: [new FormatHttpResponse(), ..._.get(assetsEndpointInterceptors, 'byAlias')],
      });
    },
  },

  {
    path: 'assetsByVersion',
    fn: ({ paths, version }) => {
      if (!paths) {
        throw new Error('Missing mandatory parameter `paths`');
      }

      if (paths.length === 0) {
        throw new Error('`paths` must not be empty');
      }

      if (!version) {
        throw new Error('Missing mandatory parameter `version`');
      }

      const { pathPrefix, relativePaths } = canonicalAssetPaths(paths);

      return createSdkFnContextRunner({
        ctx,
        params: {
          assets: relativePaths,
        },
        pathParams: {
          clientId: ctx.clientId,
          version,
          assetPath: pathPrefix,
        },
        interceptors: [new FormatHttpResponse(), ..._.get(assetsEndpointInterceptors, 'byVersion')],
      });
    },
  },
];

// const logAndReturn = (data) => {
//   console.log(data);
//   return data;
// };

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

  if (!sdkConfig.assetCdnBaseUrl) {
    throw new Error('assetCdnBaseUrl must be provided');
  }

  /* global console */
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
  marketplaceApiEndpoints.reduce((acc, { path, method, multipart }) => {
    const fnPath = urlPathToFnPath(path);
    const url = `api/${path}`;

    let requestFormatInterceptors = [];
    if (method === 'post' && multipart) {
      requestFormatInterceptors = [new MultipartRequest()];
    } else if (method === 'post') {
      requestFormatInterceptors = [new TransitRequest()];
    } else {
      requestFormatInterceptors = [];
    }

    return _.set(acc, fnPath, [
      new TransitResponse(),
      ...requestFormatInterceptors,
      endpointRequest({ method, url, httpOpts }),
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
    return _.set(acc, fnPath, [endpointRequest({ method, url, httpOpts })]);
  }, {});

const createAssetsApiEndpointInterceptors = httpOpts =>
  // Create `endpointInterceptors` object, which is object
  // containing interceptors for all defined endpoints.
  // This object can be passed to other interceptors in the interceptor context so they
  // are able to do API calls (e.g. authentication interceptors)
  //
  assetsApiEndpoints.reduce((acc, { pathFn, method, name }) => {
    const urlTemplate = pathParams => `assets/${pathFn(pathParams)}`;
    return _.set(acc, name, [endpointRequest({ method, urlTemplate, httpOpts })]);
  }, {});

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
    const assetsApiEndpointInterceptors = createAssetsApiEndpointInterceptors(apiConfigs.assets);

    const allEndpointInterceptors = {
      api: marketplaceApiEndpointInterceptors,
      auth: authApiEndpointInterceptors,
      assets: assetsApiEndpointInterceptors,
    };

    const ctx = {
      tokenStore: sdkConfig.tokenStore,
      endpointInterceptors: allEndpointInterceptors,
      clientId: sdkConfig.clientId,
      clientSecret: sdkConfig.clientSecret,
      typeHandlers: sdkConfig.typeHandlers,
      transitVerbose: sdkConfig.transitVerbose,
      disableDeprecationWarnings: sdkConfig.disableDeprecationWarnings,
    };

    // Assign SDK functions to 'this'
    marketplaceApiSdkFns(marketplaceApiEndpointInterceptors, ctx).forEach(({ path, fn }) =>
      _.set(this, path, fn)
    );
    authApiSdkFns(authApiEndpointInterceptors, ctx).forEach(({ path, fn }) =>
      _.set(this, path, fn)
    );
    assetsApiSdkFns(assetsApiEndpointInterceptors, ctx).forEach(({ path, fn }) =>
      _.set(this, path, fn)
    );
  }
}
