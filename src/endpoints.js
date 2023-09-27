/**
   List of Marketplace API endpoints

   All Marketplace API endpoints will create a new function to SDK. The SDK
   function name is derived from the path by camel-casing it, e.g.
   `current_user/change_password` becomes `sdk.currentUser.changePassword(...)`.

   Fields:
   - path: URL path to the endpoint
   - method: HTTP method

 */
export const marketplaceApi = [
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
    multipart: true,
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
  {
    path: 'sitemap_data/query_listings',
    method: 'get',
  },
  {
    path: 'sitemap_data/query_assets',
    method: 'get',
  },
];

/**
   List of Auth API endpoints

   Auth API endpoints do _not_ create SDK functions the same way Marketplace API
   endpoints do. Instead, there are special SDK functions like `sdk.login()` and
   `sdk.logout()` that call these Auth API endpoints.

   In addition, some of the interceptors will also call these endpoints
   internally. For example, if a request fails due to expired access token,
   SDK's auth interceptors will call `token` endpoints to refresh the token.

   Fields:
   - path: URL path to the endpoint
   - method: HTTP method
 */
export const authApi = [
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

/**
   List of Assets API endpoints

   Assets API endpoints do _not_ create SDK functions the same way Marketplace API
   endpoints do. Instead, there are special SDK functions like `sdk.assetByAlias()` and
   `sdk.assetByVersion()` that call these Assets API endpoints.

   Fields:
   - pathFn: Function that takes path params, and returns URL.
     Lodash's `template` function is used for templating.
   - method: HTTP method
   - name: Endpoint name. Other APIs (Marketplace and Auth) derive the name from
     the `path`, but since Assets API uses path params we can't trivially derive
     the name from path.

 */
export const assetsApi = [
  {
    pathFn: ({ clientId, version, assetPath }) => `pub/${clientId}/v/${version}/${assetPath}`,
    method: 'get',
    name: 'byVersion',
  },
  {
    pathFn: ({ clientId, alias, assetPath }) => `pub/${clientId}/a/${alias}/${assetPath}`,
    method: 'get',
    name: 'byAlias',
  },
];
