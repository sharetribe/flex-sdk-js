/**
   List of Marketplace API endpoints

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
];

/**
   List of Auth API endpoints

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
