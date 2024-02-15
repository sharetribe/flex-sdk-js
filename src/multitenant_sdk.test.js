/* eslint camelcase: "off" */
import createAdapter from './fake/adapter';
import memoryStore from './memory_store';
import MultitenantSharetribeSdk from './multitenant_sdk';

/**
   Helper to improve error messages.

   Includes the `response` in the error message if
   `response` exists.
 */
const report = responsePromise =>
  responsePromise.catch(error => {
    if (error.response) {
      // eslint-disable-next-line no-param-reassign
      error.message = `${error.message}. Response: ${JSON.stringify(error.response)}`;
    }

    throw error;
  });

/**
   Helper to create SDK instance for tests with default configurations.

   Pass additional configurations in `config` param to override defaults.

   Returns a map that contains all the instances that might be useful for
   tests, i.e. sdk, sdkTokenStore and adapter.
 */
const createSdk = (config = {}) => {
  const defaults = {
    multitenantClientSecret: 'valid-secret',
    hostname: 'valid.example.com',
  };

  // Extract adapter and token store here so that they can be passed to SDK
  // constructor and included in the returned object
  const { adapter: configAdapter, tokenStore: configTokenStore, ...restConfig } = config;
  const adapter = configAdapter || createAdapter();
  const sdkTokenStore = configTokenStore || memoryStore();

  const sdk = new MultitenantSharetribeSdk({
    ...defaults,
    ...restConfig,
    tokenStore: sdkTokenStore,
    adapter: adapter.adapterFn,
  });

  return {
    sdkTokenStore,
    adapter,
    sdk,
    adapterTokenStore: adapter.tokenStore,
  };
};

describe('new MultitenantSharetribeSdk', () => {
  const validSdkConfig = {
    multitenantClientSecret: 'valid-secret',
    hostname: 'valid.example.com',
    baseUrl: 'https://api-base-url.example',
  };

  it('validates presence of clientSecret', () => {
    const { multitenantClientSecret, ...withoutClientSecretConfig } = validSdkConfig;
    expect(() => new MultitenantSharetribeSdk(withoutClientSecretConfig)).toThrowError(
      'multitenantClientSecret must be provided'
    );
  });

  it('validates that baseUrl is not explicitely set to null', () => {
    // This test validates that baseUrl is not explicitely set to null. If
    // baseUrl is missing, default baseUrl is used but if baseUrl is set to
    // null, that's an error case we want to catch.
    expect(() => new MultitenantSharetribeSdk({ ...validSdkConfig, baseUrl: null })).toThrowError(
      'baseUrl must be provided'
    );
  });

  describe('clientData', () => {
    it('returns client data and token by making a POST /token request, if no token is found in store', () => {
      const { sdk, sdkTokenStore } = createSdk();

      return report(
        sdk.clientData().then(response => {
          // token store contains relevant token information
          expect(sdkTokenStore.getToken()).toEqual({
            access_token: 'anonymous-access-1',
            expires_in: 86400,
            scope: 'public-read',
            token_type: 'bearer',
          });
          // response data contains access token and client data
          expect(response.data).toEqual(
            expect.objectContaining({
              client_data: {
                client_id: '08ec69f6-d37e-414d-83eb-324e94afddf0',
                // for testing purposes, called_url is not included in the real API response
                // Token endpoint is called
                called_url: 'auth/multitenant/token',
              },
            })
          );
        })
      );
    });

    it('returns client data and token by making a GET /client_data request, if token is found in store', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();
      const anonToken = adapterTokenStore.createAnonToken();
      const { scope, ...rest } = anonToken;
      sdkTokenStore.setToken({ ...rest });

      return report(
        sdk.clientData().then(response => {
          expect(response.data).toEqual(
            expect.objectContaining({
              client_data: {
                client_id: '08ec69f6-d37e-414d-83eb-324e94afddf0',
                // for testing purposes, called_url is not included in the real API response
                // Client data endpoint is called
                called_url: 'auth/multitenant/client_data',
              },
            })
          );
        })
      );
    });

    it('client data request returns unauthorized', () => {
      const { sdk, sdkTokenStore } = createSdk({
        multitenantClientSecret: 'invalid-secret',
        hostname: 'valid.example.com',
      });
      expect(sdkTokenStore.getToken()).toBeUndefined();

      // Anonymous token is stored
      return report(
        sdk.clientData().catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 401,
              statusText: 'Unauthorized',
              data: 'Unauthorized',
            })
          );
        })
      );
    });

    it('client data request returns not found', () => {
      const { sdk } = createSdk({
        multitenantClientSecret: 'valid-secret',
        hostname: 'invalid.example.com',
      });

      return report(
        sdk.clientData().catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 404,
              statusText: 'Not Found',
              data: 'Not Found',
            })
          );
        })
      );
    });
  });

  describe('tokenExchange', () => {
    it('response contains token and client data', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();
      const userToken = adapterTokenStore.createTokenWithCredentials(
        'joe.dunphy@example.com',
        'secret-joe'
      );
      sdkTokenStore.setToken({ ...userToken });

      return report(
        sdk.tokenExchange().then(res => {
          expect(res.data).toEqual({
            client_data: {
              client_id: '08ec69f6-d37e-414d-83eb-324e94afddf0',
            },
          });
        })
      );
    });

    it('trusted access token is stored', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();
      const userToken = adapterTokenStore.createTokenWithCredentials(
        'joe.dunphy@example.com',
        'secret-joe'
      );
      sdkTokenStore.setToken({ ...userToken });

      return report(
        sdk.tokenExchange().then(() => {
          // does not contain client data and refresh token
          expect(sdkTokenStore.getToken()).toEqual({
            access_token: 'joe.dunphy@example.com-access-2',
            expires_in: 86400,
            scope: 'trusted:user',
            token_type: 'bearer',
          });
        })
      );
    });

    it('tokenExchange throws if token is not found in store', () => {
      const { sdk } = createSdk();

      return report(
        sdk.tokenExchange().catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toEqual('No access token found in store');
        })
      );
    });

    it('tokenExchange throws if token scope is not user', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();
      const anonToken = adapterTokenStore.createAnonToken();
      sdkTokenStore.setToken({ ...anonToken });

      return report(
        sdk.tokenExchange().catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e.message).toEqual('Access token scope not supported');
        })
      );
    });

    it('tokenExchange request returns unauthorized', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk({
        multitenantClientSecret: 'invalid-secret',
        hostname: 'valid.example.com',
      });
      const userToken = adapterTokenStore.createTokenWithCredentials(
        'joe.dunphy@example.com',
        'secret-joe'
      );
      sdkTokenStore.setToken({ ...userToken });

      // Anonymous token is stored
      return report(
        sdk.tokenExchange().catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 401,
              statusText: 'Unauthorized',
              data: 'Unauthorized',
            })
          );
        })
      );
    });

    it('token request returns not found', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk({
        multitenantClientSecret: 'valid-secret',
        hostname: 'invalid.example.com',
      });
      const userToken = adapterTokenStore.createTokenWithCredentials(
        'joe.dunphy@example.com',
        'secret-joe'
      );
      sdkTokenStore.setToken({ ...userToken });

      return report(
        sdk.tokenExchange().catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 404,
              statusText: 'Not Found',
              data: 'Not Found',
            })
          );
        })
      );
    });
  });

  describe('loginWithIdp', () => {
    it('access token and refresh token are stored', () => {
      const { sdk, sdkTokenStore } = createSdk();
      return report(
        sdk
          .loginWithIdp({
            idpId: 'facebook',
            idpClientId: 'idp-client-id',
            idpToken: 'idp-token',
          })
          .then(() => {
            expect(sdkTokenStore.getToken()).toEqual({
              access_token: 'joe.dunphy@example.com-access-1',
              expires_in: 86400,
              scope: 'user',
              token_type: 'bearer',
              refresh_token: 'joe.dunphy@example.com-refresh-1',
            });
          })
      );
    });

    it('request returns unauthorized', () => {
      const { sdk, sdkTokenStore } = createSdk({
        multitenantClientSecret: 'invalid-secret',
        hostname: 'valid.example.com',
      });
      return report(
        sdk
          .loginWithIdp({
            idpId: 'facebook',
            idpClientId: 'idp-client-id',
            idpToken: 'idp-token',
          })
          .catch(e => {
            expect(e).toBeInstanceOf(Error);
            expect(e).toEqual(
              expect.objectContaining({
                status: 401,
                statusText: 'Unauthorized',
                data: 'Unauthorized',
              })
            );
            expect(sdkTokenStore.getToken()).toBeUndefined();
          })
      );
    });

    it('request returns not found', () => {
      const { sdk, sdkTokenStore } = createSdk({
        multitenantClientSecret: 'valid-secret',
        hostname: 'invalid.example.com',
      });
      return report(
        sdk
          .loginWithIdp({
            idpId: 'facebook',
            idpClientId: 'idp-client-id',
            idpToken: 'idp-token',
          })
          .catch(e => {
            expect(e).toBeInstanceOf(Error);
            expect(e).toEqual(
              expect.objectContaining({
                status: 404,
                statusText: 'Not Found',
                data: 'Not Found',
              })
            );
            expect(sdkTokenStore.getToken()).toBeUndefined();
          })
      );
    });
  });
});
