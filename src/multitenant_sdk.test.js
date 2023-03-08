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
    clientSecret: 'valid-secret-valid-hostname',
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
    clientSecret: 'some-secret',
    baseUrl: 'https://api-base-url.example'
  };

  it('validates presence of clientSecret', () => {
    const { clientSecret, ...withoutClientSecretConfig } = validSdkConfig;
    expect(() => new MultitenantSharetribeSdk(withoutClientSecretConfig)).toThrowError(
      'clientSecret must be provided'
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

  it('uses default baseUrl, if none is set', () => {
    const adapter = createAdapter((config, resolve) => {
      // Fake adapter that echoes the URL that was used in the request
      resolve({ data: { baseURL: config.baseURL } });
    });

    const { baseUrl, ...withoutBaseUrl } = validSdkConfig;

    const sdk = new MultitenantSharetribeSdk({
      ...withoutBaseUrl,
      adapter: adapter.adapterFn,
    });

    return sdk.token().then(res => {
      expect(res.data.baseURL).toMatch(/^https:\/\/flex-api.sharetribe.com/);
    });
  });

  it('strips internals from the returned error response object', () => {
    const { sdk } = createSdk({ clientSecret: 'valid-secret-invalid-hostname' });

    return report(
      sdk.token({ grant_type: 'multitenant_client_credentials' })
        .then(() => {
          // Fail
          expect(true).toEqual(false);
        })
        .catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 404,
              statusText: 'Not Found',
              data: 'Not Found'
            })
          );

          // additional keys, like headers, are excluded
          const expectedKeys = ['status', 'statusText', 'data'];
          expect(expectedKeys).toEqual(expect.arrayContaining(Object.keys(e)));

          return Promise.resolve();
        })
    );
  });

  it('stores auth token after token request', () => {
    const { sdk, sdkTokenStore } = createSdk();
    expect(sdkTokenStore.getToken()).toBeUndefined();

    // Anonymous token is stored
    return report(
      sdk.token({ grant_type: 'multitenant_client_credentials' }).then(() => {
        expect(sdkTokenStore.getToken().access_token).toEqual('anonymous-access-1');
      })
    );
  });

  describe('authInfo', () => {
    it('returns authentication information', () => {
      const { sdk } = createSdk();

      return report(
        sdk
          .authInfo()
          .then(authInfo => {
            // No auth info yet.
            expect(authInfo.grantType).toBeUndefined();
            expect(authInfo.isAnonymous).toBeUndefined();
            expect(authInfo.scopes).toBeUndefined();
          })
          .then(() =>
            sdk.token({ grant_type: 'multitenant_client_credentials' })
              .then(sdk.authInfo)
              .then(authInfo => {
                // Anonymous token
                expect(authInfo.grantType).toEqual('client_credentials');
                expect(authInfo.isAnonymous).toEqual(true);
                expect(authInfo.scopes).toEqual(['public-read']);
              })
          )
      );
    });

    it('supports anonymous tokens without scope attribute', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();
      const anonToken = adapterTokenStore.createAnonToken();
      const { scope, ...rest } = anonToken;
      sdkTokenStore.setToken({ ...rest });

      return report(
        sdk.authInfo().then(authInfo => {
          expect(authInfo.grantType).toEqual('client_credentials');
          expect(authInfo.isAnonymous).toEqual(true);
          expect(authInfo.scopes).toBeUndefined();
        })
      );
    });
  });
});
