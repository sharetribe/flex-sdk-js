/* eslint camelcase: "off" */
import _ from 'lodash';
import { UUID, LatLng } from './types';
import createAdapter from './fake/adapter';
import SharetribeSdk from './sdk';
import memoryStore from './memory_store';

const errorListingId = 'eeeeeeee-eeee-eeee-eeee-000000000500';

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
    clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',

    // We do want to test that also deprecated function work, so disable
    // deprecation warnings to keep output clean.
    disableDeprecationWarnings: true,
  };

  // Extract adapter and token store here so that they can be passed to SDK
  // constructor and included in the returned object
  const { adapter: configAdapter, tokenStore: configTokenStore, ...restConfig } = config;
  const adapter = configAdapter || createAdapter();
  const sdkTokenStore = configTokenStore || memoryStore();

  const sdk = new SharetribeSdk({
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

describe('new SharetribeSdk', () => {
  const validSdkConfig = {
    clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
    baseUrl: 'https://api-base-url.example',
    assetCdnBaseUrl: 'https://asset-cdn-base-url.example',
  };

  it('validates presence of clientId', () => {
    const { clientId, ...withoutClientIdConfig } = validSdkConfig;
    expect(() => new SharetribeSdk(withoutClientIdConfig)).toThrowError(
      'clientId must be provided'
    );
  });

  it('validates that baseUrl is not explicitely set to null', () => {
    // This test validates that baseUrl is not explicitely set to null. If
    // baseUrl is missing, default baseUrl is used but if baseUrl is set to
    // null, that's an error case we want to catch.
    expect(() => new SharetribeSdk({ ...validSdkConfig, baseUrl: null })).toThrowError(
      'baseUrl must be provided'
    );
  });

  it('validates that assetCdnBaseUrl is not explicitely set to null', () => {
    // This test validates that assetCdnBaseUrl is not explicitely set to null.
    // If assetCdnBaseUrl is missing, default assetCdnBaseUrl is used but if
    // assetCdnBaseUrl is set to null, that's an error case we want to catch.
    expect(() => new SharetribeSdk({ ...validSdkConfig, assetCdnBaseUrl: null })).toThrowError(
      'assetCdnBaseUrl must be provided'
    );
  });

  it('uses default baseUrl, if none is set', () => {
    const adapter = createAdapter((config, resolve) => {
      // Fake adapter that echoes the URL that was used in the request
      resolve({ data: { baseURL: config.baseURL } });
    });

    const { baseUrl, ...withoutBaseUrl } = validSdkConfig;

    const sdk = new SharetribeSdk({
      ...withoutBaseUrl,
      adapter: adapter.adapterFn,
    });

    return sdk.login().then(res => {
      expect(res.data.baseURL).toMatch(/^https:\/\/flex-api.sharetribe.com/);
    });
  });

  it('uses default assetCdnBaseUrl, if none is set', () => {
    const adapter = createAdapter((config, resolve) => {
      // Fake adapter that echoes the URL that was used in the request
      resolve({ data: { baseURL: config.baseURL } });
    });

    const { assetCdnBaseUrl, ...withoutAssetCdnBaseUrl } = validSdkConfig;

    const sdk = new SharetribeSdk({
      ...withoutAssetCdnBaseUrl,
      adapter: adapter.adapterFn,
    });

    return sdk.assetByAlias({ path: 'translations.json', alias: 'latest' }).then(res => {
      expect(res.data.baseURL).toMatch(/^https:\/\/cdn.st-api.com/);
    });
  });

  it('strips internals from the returned response object', () => {
    const { sdk } = createSdk();

    return report(
      sdk.users.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
        // Allow the following keys. Strip of some 'internals', i.e. config, headers, etc.
        const expectedKeys = ['status', 'statusText', 'data'];
        expect(expectedKeys).toEqual(expect.arrayContaining(Object.keys(res)));
      })
    );
  });

  it('strips internals from the returned error response object', () => {
    const { sdk } = createSdk();

    return report(
      sdk.listings
        .show({ id: errorListingId })
        .then(() => {
          // Fail
          expect(true).toEqual(false);
        })
        .catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 500,
              statusText: 'Internal server error',
              data: 'Internal server error',
            })
          );

          const expectedKeys = ['status', 'statusText', 'data'];
          expect(expectedKeys).toEqual(expect.arrayContaining(Object.keys(e)));

          return Promise.resolve();
        })
    );
  });

  it('calls users endpoint with query params', () => {
    const { sdk } = createSdk();

    return report(
      sdk.users.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
        const resource = res.data.data;
        const attrs = resource.attributes;

        expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
        expect(attrs).toEqual(
          expect.objectContaining({
            email: 'user@sharetribe.com',
            description: 'A team member',
          })
        );
      })
    );
  });

  it('calls marketplace endpoint with query params', () => {
    const { sdk } = createSdk();

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(
        expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        })
      );
    });
  });

  it('calls listing search with query params', () => {
    const { sdk } = createSdk();

    return sdk.listings
      .search({
        id: new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'),
        origin: new LatLng(40.0, -70.0),
      })
      .then(res => {
        const { data } = res.data;

        expect(data).toHaveLength(2);
        expect(data[0].attributes.description).toEqual('27-speed Hybrid. Fully functional.');
        expect(data[0].attributes.geolocation instanceof LatLng).toEqual(true);
        expect(data[0].attributes.geolocation).toEqual(new LatLng(40.64542, -74.08508));
        expect(data[1].attributes.description).toEqual(
          'Goes together perfectly with a latte and a bow tie.'
        );
        expect(data[1].attributes.geolocation instanceof LatLng).toEqual(true);
        expect(data[1].attributes.geolocation).toEqual(new LatLng(40.64542, -74.08508));
      });
  });

  it('allows user to pass custom read handlers', () => {
    class MyUuid {
      constructor(uuid) {
        this.myUuid = uuid;
      }
    }

    const handlers = [
      {
        sdkType: UUID,
        appType: MyUuid,
        reader: v => new MyUuid(v.uuid), // reader fn type: UUID -> MyUuid
      },
    ];

    const { sdk } = createSdk({
      typeHandlers: handlers,
    });

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new MyUuid('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(
        expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        })
      );
    });
  });

  it('[DEPRECATED, uses keys that are renamed] allows user to pass custom read handlers', () => {
    class MyUuid {
      constructor(uuid) {
        this.myUuid = uuid;
      }
    }

    const handlers = [
      {
        type: UUID,
        customType: MyUuid,
        reader: v => new MyUuid(v.uuid), // reader fn type: UUID -> MyUuid
      },
    ];

    const { sdk } = createSdk({
      typeHandlers: handlers,
    });

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new MyUuid('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(
        expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        })
      );
    });
  });

  it('reads auth token from store and includes it in request headers', () => {
    const { sdk, sdkTokenStore, adapterTokenStore } = createSdk({
      // The Fake server doesn't know this clientId. However, the request passes because
      // the access_token is in the store
      clientId: 'daaf8871-4723-45b8-bc97-9e335f46966d',
    });

    const anonToken = adapterTokenStore.createAnonToken();

    sdkTokenStore.setToken(anonToken);

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(
        expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        })
      );
    });
  });

  it('stores the auth token to the store', () => {
    const { sdk, sdkTokenStore } = createSdk();

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
      const resource = res.data.data;
      const attrs = resource.attributes;
      const token = sdkTokenStore.getToken();

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(
        expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        })
      );

      expect(token.access_token).toEqual('anonymous-access-1');
      expect(token.token_type).toEqual('bearer');
      expect(token.expires_in).toEqual(86400);
    });
  });

  it('stores auth token after login', () => {
    const { sdk, sdkTokenStore } = createSdk();

    // First we get the anonymous token
    return report(
      sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
        expect(sdkTokenStore.getToken().access_token).toEqual('anonymous-access-1');

        // After login, the anonymous token will be overriden
        return sdk
          .login({
            username: 'joe.dunphy@example.com',
            password: 'secret-joe',
          })
          .then(() => {
            expect(sdkTokenStore.getToken().access_token).toEqual(
              'joe.dunphy@example.com-access-1'
            );
          });
      })
    );
  });

  it('refreshes login token', () => {
    const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();

    // First, login
    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        const { access_token } = sdkTokenStore.getToken();
        expect(access_token).toEqual('joe.dunphy@example.com-access-1');

        adapterTokenStore.expireAccessToken(access_token);

        return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
          expect(sdkTokenStore.getToken().access_token).toEqual('joe.dunphy@example.com-access-2');

          const resource = res.data.data;
          const attrs = resource.attributes;

          expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
          expect(attrs).toEqual(
            expect.objectContaining({
              name: 'Awesome skies.',
              description: 'Meet and greet with fanatical sky divers.',
            })
          );
        });
      })
    );
  });

  it('refreshes anonymous token', () => {
    const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();

    // First we get the anonymous token
    return report(
      sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
        const { access_token } = sdkTokenStore.getToken();
        expect(access_token).toEqual('anonymous-access-1');

        adapterTokenStore.expireAccessToken(access_token);

        return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
          expect(sdkTokenStore.getToken().access_token).toEqual('anonymous-access-2');

          const resource = res.data.data;
          const attrs = resource.attributes;

          expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
          expect(attrs).toEqual(
            expect.objectContaining({
              name: 'Awesome skies.',
              description: 'Meet and greet with fanatical sky divers.',
            })
          );
        });
      })
    );
  });

  it('deprecated: logs in with an authorization code', () => {
    const { sdk, sdkTokenStore } = createSdk();

    return sdk.login({ code: 'flex-authorization-code' }).then(() => {
      const { access_token, refresh_token } = sdkTokenStore.getToken();
      expect(access_token).toEqual('joe.dunphy@example.com-access-1');
      expect(refresh_token).toEqual('joe.dunphy@example.com-refresh-1');
    });
  });

  it('logs in with an authorization code', () => {
    const { sdk, sdkTokenStore } = createSdk();

    return sdk.loginAs({ code: 'flex-authorization-code' }).then(() => {
      const { access_token, refresh_token } = sdkTokenStore.getToken();
      expect(access_token).toEqual('joe.dunphy@example.com-access-1');
      expect(refresh_token).toEqual('joe.dunphy@example.com-refresh-1');
    });
  });

  it('logs in with idp token', () => {
    const { sdk, sdkTokenStore } = createSdk({
      clientSecret: '8af2bf99c380b3a303ab90ae4012c8cd8f69d309',
    });

    return sdk
      .loginWithIdp({
        idpId: 'facebook',
        idpClientId: 'idp-client-id',
        idpToken: 'idp-token',
      })
      .then(() => {
        const { access_token, refresh_token } = sdkTokenStore.getToken();
        expect(access_token).toEqual('joe.dunphy@example.com-access-1');
        expect(refresh_token).toEqual('joe.dunphy@example.com-refresh-1');
      });
  });

  it('revokes token (a.k.a logout)', () => {
    const { sdk, sdkTokenStore } = createSdk();

    // First, login
    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        expect(sdkTokenStore.getToken().access_token).toEqual('joe.dunphy@example.com-access-1');

        // Revoke token
        return sdk.logout().then(res => {
          expect(res.data.action).toEqual('revoked');

          expect(sdkTokenStore.getToken()).toEqual(null);

          return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
            expect(sdkTokenStore.getToken().access_token).toEqual('anonymous-access-1');
          });
        });
      })
    );
  });

  it('refreshes token before revoke', () => {
    const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();

    // First, login
    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        const { access_token } = sdkTokenStore.getToken();
        expect(access_token).toEqual('joe.dunphy@example.com-access-1');

        adapterTokenStore.expireAccessToken(access_token);

        // Revoke token
        return sdk.logout().then(res => {
          expect(res.data.action).toEqual('revoked');

          expect(sdkTokenStore.getToken()).toEqual(null);

          return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
            expect(sdkTokenStore.getToken().access_token).toEqual('anonymous-access-1');
          });
        });
      })
    );
  });

  it('refreshes token after unsuccessful revoke, but if the refresh fails because of 401, return OK.', () => {
    const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();

    // First, login
    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        const { access_token, refresh_token } = sdkTokenStore.getToken();
        expect(access_token).toEqual('joe.dunphy@example.com-access-1');

        adapterTokenStore.expireAccessToken(access_token);
        adapterTokenStore.revokeRefreshToken(refresh_token);

        // Revoke token
        return sdk.logout().then(() => {
          expect(sdkTokenStore.getToken()).toEqual(null);

          return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
            expect(sdkTokenStore.getToken().access_token).toEqual('anonymous-access-1');
          });
        });
      })
    );
  });

  it('refreshes token after unsuccessful revoke, but if the refresh fails because of network error, fail.', () => {
    const { sdk, sdkTokenStore, adapterTokenStore, adapter } = createSdk();

    // Two requests passes (login and first revoke try), but after that the server goes down
    adapter.offlineAfter(2);

    // First, login
    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        const { access_token, refresh_token } = sdkTokenStore.getToken();
        expect(access_token).toEqual('joe.dunphy@example.com-access-1');

        adapterTokenStore.expireAccessToken(access_token);
        adapterTokenStore.revokeRefreshToken(refresh_token);

        // Revoke token
        return sdk
          .logout()
          .then(() => {
            // Should not pass
            expect(true).toEqual(false);
          })
          .catch(() => {
            expect(sdkTokenStore.getToken().access_token).toEqual(access_token);
            expect(sdkTokenStore.getToken().refresh_token).toEqual(refresh_token);
          });
      })
    );
  });

  it('encodes new listing post body to Transit', () => {
    const { sdk, adapter } = createSdk();

    const testData = {
      title: 'A new hope',
      description: 'Our Nth listing!',
      address: 'Bulevardi 14, Helsinki, Finland',
      geolocation: new LatLng(10.152, 15.375),
    };

    const transitEncoded =
      '["^ ","~:title","A new hope","~:description","Our Nth listing!","~:address","Bulevardi 14, Helsinki, Finland","~:geolocation",["~#geo",[10.152,15.375]]]';

    return report(
      sdk
        .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
        .then(() => sdk.ownListings.create(testData))
        .then(() => {
          const req = _.last(adapter.requests);
          expect(req.data).toEqual(transitEncoded);
          expect(req.headers).toEqual(
            expect.objectContaining({
              'Content-Type': 'application/transit+json',
            })
          );
        })
    );
  });

  it('encodes new listing post body to Transit, using type appTypes', () => {
    class MyLatLng {
      constructor(lat, lng) {
        this.val = [lat, lng];
      }
    }

    const handlers = [
      {
        sdkType: LatLng,
        appType: MyLatLng,
        writer: v => new LatLng(v.val[0], v.val[1]),
      },
    ];

    const { sdk, adapter } = createSdk({ typeHandlers: handlers });

    const testData = {
      title: 'A new hope',
      description: 'Our Nth listing!',
      address: 'Bulevardi 14, Helsinki, Finland',
      geolocation: new MyLatLng(10.152, 15.375),
    };

    const transitEncoded =
      '["^ ","~:title","A new hope","~:description","Our Nth listing!","~:address","Bulevardi 14, Helsinki, Finland","~:geolocation",["~#geo",[10.152,15.375]]]';

    return report(
      sdk
        .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
        .then(() => sdk.ownListings.create(testData))
        .then(() => {
          const req = _.last(adapter.requests);
          expect(req.data).toEqual(transitEncoded);
          expect(req.headers).toEqual(
            expect.objectContaining({
              'Content-Type': 'application/transit+json',
            })
          );
        })
    );
  });

  it('encodes new listing post body to Transit, using canHandle fn', () => {
    const handlers = [
      {
        sdkType: LatLng,
        canHandle: v => v[0] === '__my_lat_lng_type',
        writer: v => new LatLng(v[1], v[2]),
      },
    ];

    const { sdk, adapter } = createSdk({ typeHandlers: handlers });

    const testData = {
      title: 'A new hope',
      description: 'Our Nth listing!',
      address: 'Bulevardi 14, Helsinki, Finland',
      geolocation: ['__my_lat_lng_type', 10.152, 15.375],
    };

    const transitEncoded =
      '["^ ","~:title","A new hope","~:description","Our Nth listing!","~:address","Bulevardi 14, Helsinki, Finland","~:geolocation",["~#geo",[10.152,15.375]]]';

    return report(
      sdk
        .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
        .then(() => sdk.ownListings.create(testData))
        .then(() => {
          const req = _.last(adapter.requests);
          expect(req.data).toEqual(transitEncoded);
          expect(req.headers).toEqual(
            expect.objectContaining({
              'Content-Type': 'application/transit+json',
            })
          );
        })
    );
  });

  it('encodes new listing post body to Transit JSON Verbose', () => {
    const { sdk, adapter } = createSdk({ transitVerbose: true });

    const testData = {
      title: 'A new hope',
      description: 'Our Nth listing!',
      address: 'Bulevardi 14, Helsinki, Finland',
      geolocation: new LatLng(10.152, 15.375),
    };

    const transitEncoded =
      '{"~:title":"A new hope","~:description":"Our Nth listing!","~:address":"Bulevardi 14, Helsinki, Finland","~:geolocation":{"~#geo":[10.152,15.375]}}';

    return report(
      sdk
        .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
        .then(() => sdk.ownListings.create(testData))
        .then(() => {
          const req = _.last(adapter.requests);
          expect(req.data).toEqual(transitEncoded);
          expect(req.headers).toEqual(
            expect.objectContaining({
              'Content-Type': 'application/transit+json',
            })
          );
        })
    );
  });

  it('requests the server to send back Transit JSON Verbose', () => {
    const { sdk, adapter } = createSdk({ transitVerbose: true });

    return report(
      sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
        const req = _.last(adapter.requests);
        expect(req.headers).toEqual(
          expect.objectContaining({
            'X-Transit-Verbose': 'true',
            Accept: 'application/transit+json',
          })
        );
      })
    );
  });

  it('does not double encode in case we need to retry with fresh token', () => {
    const { sdk, sdkTokenStore, adapterTokenStore, adapter } = createSdk();

    const testData = {
      title: 'A new hope',
      description: 'Our Nth listing!',
      address: 'Bulevardi 14, Helsinki, Finland',
      geolocation: new LatLng(10.152, 15.375),
    };

    const transitEncoded =
      '["^ ","~:title","A new hope","~:description","Our Nth listing!","~:address","Bulevardi 14, Helsinki, Finland","~:geolocation",["~#geo",[10.152,15.375]]]';

    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        const { access_token } = sdkTokenStore.getToken();
        adapterTokenStore.expireAccessToken(access_token);

        return sdk.ownListings.create(testData).then(() => {
          const req = _.last(adapter.requests);
          expect(req.data).toEqual(transitEncoded);
          expect(req.headers).toEqual(
            expect.objectContaining({
              'Content-Type': 'application/transit+json',
            })
          );
        });
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

            // deprecated: grantType
            expect(authInfo.grantType).toBeUndefined();

            expect(authInfo.isAnonymous).toBeUndefined();
            expect(authInfo.scopes).toBeUndefined();
            expect(authInfo.isLoggedInAs).toBeUndefined();
          })
          .then(() =>
            sdk.marketplace
              .show()
              .then(sdk.authInfo)
              .then(authInfo => {
                // Anonymous token

                // deprecated: grantType
                expect(authInfo.grantType).toEqual('client_credentials');
                expect(authInfo.isAnonymous).toEqual(true);
                expect(authInfo.scopes).toEqual(['public-read']);
                expect(authInfo.isLoggedInAs).toEqual(false);
              })
          )
          .then(() =>
            sdk
              .login({
                username: 'joe.dunphy@example.com',
                password: 'secret-joe',
              })
              .then(sdk.authInfo)
              .then(authInfo => {
                // Login token

                // deprecated: grantType
                // Please note that the value is also off. Token
                // hasn't been refreshed, thus, grantType should be password
                expect(authInfo.grantType).toEqual('refresh_token');

                expect(authInfo.isAnonymous).toEqual(false);
                expect(authInfo.scopes).toEqual(['user']);
                expect(authInfo.isLoggedInAs).toEqual(false);
              })
          )
          .then(() =>
            sdk
              .login({ code: 'flex-authorization-code' })
              .then(sdk.authInfo)
              .then(authInfo => {
                // deprecated: Login as

                // deprecated: grantType
                // Please note that the value is also off. Token
                // hasn't been refreshed, thus, grantType should be
                // authorization_code
                expect(authInfo.grantType).toEqual('refresh_token');

                expect(authInfo.isAnonymous).toEqual(false);
                expect(authInfo.scopes).toEqual(['user:limited']);
                expect(authInfo.isLoggedInAs).toEqual(true);
              })
          )
          .then(() =>
            sdk
              .loginAs({ code: 'flex-authorization-code' })
              .then(sdk.authInfo)
              .then(authInfo => {
                // Login as

                // deprecated: grantType
                // Please note that the value is also off. Token
                // hasn't been refreshed, thus, grantType should be
                // authorization_code
                expect(authInfo.grantType).toEqual('refresh_token');

                expect(authInfo.isAnonymous).toEqual(false);
                expect(authInfo.scopes).toEqual(['user:limited']);
                expect(authInfo.isLoggedInAs).toEqual(true);
              })
          )
          .then(() =>
            sdk
              .logout()
              .then(sdk.authInfo)
              .then(authInfo => {
                // Logout

                // deprecated: grantType
                expect(authInfo.grantType).toBeUndefined();

                expect(authInfo.isAnonymous).toBeUndefined();
                expect(authInfo.scopes).toBeUndefined();
                expect(authInfo.isLoggedInAs).toBeUndefined();
              })
          )
          .then(() =>
            sdk
              .logout()
              .then(sdk.authInfo)
              .then(authInfo => {
                // Logging out already logged out user does nothing

                // deprecated: grantType
                expect(authInfo.grantType).toBeUndefined();

                expect(authInfo.isAnonymous).toBeUndefined();
                expect(authInfo.scopes).toBeUndefined();
                expect(authInfo.isLoggedInAs).toBeUndefined();
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

    it('supports access tokens without scope attribute', () => {
      const { sdk, sdkTokenStore, adapterTokenStore } = createSdk();
      const accessToken = adapterTokenStore.createTokenWithCredentials(
        'joe.dunphy@example.com',
        'secret-joe'
      );
      const { scope, ...rest } = accessToken;
      sdkTokenStore.setToken({ ...rest });

      return report(
        sdk.authInfo().then(authInfo => {
          expect(authInfo.grantType).toEqual('refresh_token');
          expect(authInfo.isAnonymous).toEqual(false);
          expect(authInfo.scopes).toBeUndefined();
        })
      );
    });
  });

  it('allows sending query params in POST request (such as `expand=true`)', () => {
    const { sdk } = createSdk();

    const params = {
      title: 'Pelago bike',
      description: 'City bike for city hipster!',
      address: 'Bulevardi 14, 00200 Helsinki, Finland',
      geolocation: new LatLng(40.0, 73.0),
    };

    return report(
      sdk
        .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
        .then(() => sdk.ownListings.create(params))
        .then(res => {
          const { data } = res.data;
          const attrs = data.attributes;

          expect(data).toEqual(
            expect.objectContaining({
              id: expect.any(UUID),
              type: 'ownListing',
            })
          );
          expect(attrs).toBeUndefined();
        })
        .then(() => sdk.ownListings.create(params, { expand: true }))
        .then(res => {
          const { data } = res.data;
          const attrs = data.attributes;

          expect(data).toEqual(
            expect.objectContaining({
              id: expect.any(UUID),
              type: 'ownListing',
            })
          );
          expect(attrs).toBeDefined();
        })
    );
  });

  it('returns error in expected error format, data as plain text', () => {
    const { sdk } = createSdk();

    return report(
      sdk
        .login({ username: 'wrong username', password: 'wrong password' })
        .then(() => {
          // Fail
          expect(true).toEqual(false);
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
          return Promise.resolve();
        })
    );
  });

  it('returns 500 error data as plain text', () => {
    const { sdk } = createSdk();

    return report(
      sdk.listings
        .show({ id: errorListingId })
        .then(() => {
          // Fail
          expect(true).toEqual(false);
        })
        .catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 500,
              statusText: 'Internal server error',
              data: 'Internal server error',
            })
          );
          return Promise.resolve();
        })
    );
  });

  it('returns error in expected error format, data as an object', () => {
    const { sdk } = createSdk();

    return report(
      sdk
        .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
        .then(() => sdk.ownListings.create())
        .then(() => {
          // Fail
          expect(true).toEqual(false);
        })
        .catch(e => {
          expect(e).toBeInstanceOf(Error);
          expect(e).toEqual(
            expect.objectContaining({
              status: 400,
              statusText: 'Bad Request',
              data: expect.objectContaining({
                errors: [
                  expect.objectContaining({
                    id: expect.any(UUID),
                    status: 400,
                    code: 'bad-request',
                    title: 'Bad request',
                    details: {
                      error: {
                        'body-params': {
                          title: 'missing-required-key',
                          description: 'missing-required-key',
                          address: 'missing-required-key',
                          geolocation: 'missing-required-key',
                        },
                      },
                    },
                  }),
                ],
              }),
            })
          );
          return Promise.resolve();
        })
    );
  });
});

describe('exchangeToken', () => {
  it('returns a trusted token on exchange', () => {
    const { sdk, sdkTokenStore, adapter } = createSdk();

    sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
      const stdToken = sdkTokenStore.getToken();
      expect(stdToken.access_token).toEqual('joe.dunphy@example.com-access-1');

      const subjectTokenStore = memoryStore();
      subjectTokenStore.setToken(stdToken);

      const { sdk: subjectSdk } = createSdk({
        clientSecret: '8af2bf99c380b3a303ab90ae4012c8cd8f69d309',
        tokenStore: subjectTokenStore,
        adapter,
      });

      subjectSdk.exchangeToken().then(res => {
        expect(res.data.scope).toEqual('trusted:user');
      });
    });
  });

  it('does not store a trusted token on exchange', () => {
    const { sdk, sdkTokenStore, adapter } = createSdk();

    sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
      const stdToken = sdkTokenStore.getToken();
      expect(stdToken.access_token).toEqual('joe.dunphy@example.com-access-1');

      const subjectTokenStore = memoryStore();
      subjectTokenStore.setToken(stdToken);

      const { sdk: subjectSdk, sdkTokenStore: subjectSdkTokenStore } = createSdk({
        clientSecret: '8af2bf99c380b3a303ab90ae4012c8cd8f69d309',
        tokenStore: subjectTokenStore,
        adapter,
      });

      subjectSdk.exchangeToken().then(() => {
        expect(subjectSdkTokenStore.getToken().scope).toEqual('user');
      });
    });
  });
});

describe('asset', () => {
  it('returns latest asset', () => {
    const { sdk } = createSdk();

    return report(
      sdk.assetByAlias({ path: 'translations.json', alias: 'latest' }).then(res => {
        const resource = res.data.data;
        const { version } = res.data.meta;

        expect(resource).toEqual({
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
          'navigation.login': 'Log in',
        });
        expect(version).toEqual('v3');
      })
    );
  });

  it('returns latest asset with absolute path', () => {
    const { sdk } = createSdk();

    return report(
      sdk.assetByAlias({ path: '/translations.json', alias: 'latest' }).then(res => {
        const resource = res.data.data;
        const { version } = res.data.meta;

        expect(resource).toEqual({
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
          'navigation.login': 'Log in',
        });
        expect(version).toEqual('v3');
      })
    );
  });

  it('returns asset by version', () => {
    const { sdk } = createSdk();

    return report(
      sdk.assetByVersion({ path: 'translations.json', version: 'v2' }).then(res => {
        const resource = res.data.data;
        const { version } = res.data.meta;

        expect(resource).toEqual({
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
        });
        expect(version).toEqual('v2');
      })
    );
  });

  it('returns asset with absolute path by version', () => {
    const { sdk } = createSdk();

    return report(
      sdk.assetByVersion({ path: '/translations.json', version: 'v2' }).then(res => {
        const resource = res.data.data;
        const { version } = res.data.meta;

        expect(resource).toEqual({
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
        });
        expect(version).toEqual('v2');
      })
    );
  });

  it('returns asset by alias', () => {
    const { sdk } = createSdk();

    return report(
      sdk.assetByAlias({ path: 'translations.json', alias: 'release-dev' }).then(res => {
        const resource = res.data.data;
        const { version } = res.data.meta;

        expect(resource).toEqual({
          'navigation.listings': 'Listings',
          'navigation.account': 'My account',
        });
        expect(version).toEqual('v2');
      })
    );
  });

  it('returns multiple assets by version', () => {
    const { sdk } = createSdk();

    return report(
      sdk
        .assetsByVersion({ paths: ['content/b.json', 'content/a.json'], version: 'v2' })
        .then(res => {
          const resource = res.data.data;
          const { version } = res.data.meta;
          expect(resource).toEqual([
            {
              id: 'byVersion-a.json',
              type: 'jsonAsset',
              attributes: {
                assetPath: '/content/a.json',
                data: {
                  assetPath: 'content/',
                  relativePath: 'a.json',
                },
              },
            },
            {
              id: 'byVersion-b.json',
              type: 'jsonAsset',
              attributes: {
                assetPath: '/content/b.json',
                data: {
                  assetPath: 'content/',
                  relativePath: 'b.json',
                },
              },
            },
          ]);
          expect(version).toEqual('v2');
        })
    );
  });

  it('returns multiple assets by alias', () => {
    const { sdk } = createSdk();

    return report(
      sdk.assetsByAlias({ paths: ['any/foo.json', 'any/bar.json'], alias: 'latest' }).then(res => {
        const resource = res.data.data;
        const { version } = res.data.meta;
        expect(resource).toEqual([
          {
            id: 'byAlias-bar.json',
            type: 'jsonAsset',
            attributes: {
              assetPath: '/any/bar.json',
              data: {
                assetPath: 'any/',
                relativePath: 'bar.json',
              },
            },
          },
          {
            id: 'byAlias-foo.json',
            type: 'jsonAsset',
            attributes: {
              assetPath: '/any/foo.json',
              data: {
                assetPath: 'any/',
                relativePath: 'foo.json',
              },
            },
          },
        ]);
        expect(version).toEqual('v1');
      })
    );
  });
});
