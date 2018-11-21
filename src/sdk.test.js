/* eslint camelcase: "off" */
import _ from 'lodash';
import { UUID, LatLng } from './types';
import createAdapter from './fake/adapter';
import SharetribeSdk from './sdk';
import memoryStore from './memory_store';

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
    baseUrl: 'fake-adapter://fake-api/',
    clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
  };

  const sdkTokenStore = memoryStore();
  const adapter = createAdapter();

  const sdk = new SharetribeSdk({
    ...defaults,
    tokenStore: sdkTokenStore,
    ...config,
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
  it('validates presence of clientId', () => {
    expect(() => new SharetribeSdk()).toThrowError('clientId must be provided');
  });

  it('validates presence of baseUrl', () => {
    expect(
      () =>
        new SharetribeSdk({
          clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
          baseUrl: null,
        })
    ).toThrowError('baseUrl must be provided');
  });

  it('uses default baseUrl, if none is set', () => {
    const adapter = createAdapter((config, resolve) => {
      // Fake adapter that echoes the URL
      resolve({ data: { url: config.url } });
    });

    const sdk = new SharetribeSdk({
      clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
      adapter: adapter.adapterFn,
    });

    return sdk.login().then(res => {
      expect(res.data.url).toMatch(/^https:\/\/flex-api.sharetribe.com/);
    });
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

  it('allows user to pass custom read/write handlers', () => {
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
        writer: v => new UUID(v.myUuid), // writer fn type: MyUuid -> UUID
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
          .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
          .then(() => {
            expect(sdkTokenStore.getToken().access_token).toEqual(
              'joe.dunphy@example.com-secret-joe-access-1'
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
        expect(access_token).toEqual('joe.dunphy@example.com-secret-joe-access-1');

        adapterTokenStore.expireAccessToken(access_token);

        return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(res => {
          expect(sdkTokenStore.getToken().access_token).toEqual(
            'joe.dunphy@example.com-secret-joe-access-2'
          );

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

  it('revokes token (a.k.a logout)', () => {
    const { sdk, sdkTokenStore } = createSdk();

    // First, login
    return report(
      sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        expect(sdkTokenStore.getToken().access_token).toEqual(
          'joe.dunphy@example.com-secret-joe-access-1'
        );

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
        expect(access_token).toEqual('joe.dunphy@example.com-secret-joe-access-1');

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
        expect(access_token).toEqual('joe.dunphy@example.com-secret-joe-access-1');

        adapterTokenStore.expireAccessToken(access_token);
        adapterTokenStore.revokePasswordToken(refresh_token);

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
        expect(access_token).toEqual('joe.dunphy@example.com-secret-joe-access-1');

        adapterTokenStore.expireAccessToken(access_token);
        adapterTokenStore.revokePasswordToken(refresh_token);

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
            expect(authInfo.grantType).toBeUndefined();
          })
          .then(() =>
            sdk.marketplace
              .show()
              .then(sdk.authInfo)
              .then(authInfo => {
                // Anonymous token
                expect(authInfo.grantType).toEqual('client_credentials');
              })
          )
          .then(() =>
            sdk
              .login({ username: 'joe.dunphy@example.com', password: 'secret-joe' })
              .then(sdk.authInfo)
              .then(authInfo => {
                // Login token
                expect(authInfo.grantType).toEqual('refresh_token');
              })
          )
          .then(() =>
            sdk
              .logout()
              .then(sdk.authInfo)
              .then(authInfo => {
                // Logout
                expect(authInfo.grantType).toBeUndefined();
              })
          )
          .then(() =>
            sdk
              .logout()
              .then(sdk.authInfo)
              .then(authInfo => {
                // Logging out already logged out user does nothing
                expect(authInfo.grantType).toBeUndefined();
              })
          )
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
