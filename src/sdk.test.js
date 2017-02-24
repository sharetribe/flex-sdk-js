import _ from 'lodash';
import { UUID, LatLng } from './types';
import fake from './fake';
import SharetribeSdk from './sdk';
import memoryStore from './memory_store';

/**
   Helper to improve error messages.

   Includes the `response` in the error message if
   `response` exists.
 */
const report = responsePromise =>
  responsePromise.catch((error) => {
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
   tests, i.e. sdk, tokenStore and adapter.
 */
const createSdk = (config) => {
  const defaults = {
    baseUrl: '',
    clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
    endpoints: [],
  }

  const tokenStore = memoryStore();
  const adapter = fake();
  const sdk = new SharetribeSdk({
    ...defaults,
    adapter: adapter.adapterFn,
    tokenStore,
    ...config,
  });

  return {
    tokenStore,
    adapter,
    sdk,
  }
}

describe('new SharetribeSdk', () => {
  it('validates presence of clientId', () => {
    expect(() => new SharetribeSdk({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    })).toThrowError('clientId must be provided');
  });

  it('creates new endpoints', () => {
    const sdk = new SharetribeSdk({
      clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
      typeHandlers: [],
      endpoints: [{
        path: 'posts/showAll', apiName: 'api',
      }],
      adapter: null,
      tokenStore: memoryStore(),
    });

    expect(sdk.posts.showAll).toBeInstanceOf(Function);
  });

  it('calls users endpoint with query params', () => {
    const { sdk } = createSdk();

    return report(sdk.users.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        email: 'user@sharetribe.com',
        description: 'A team member',
      }));
    }));
  });

  it('calls marketplace endpoint with query params', () => {
    const { sdk } = createSdk();

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));
    });
  });

  it('calls listing search with query params', () => {
    const { sdk } = createSdk();

    return sdk.listings.search({ id: new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'), origin: new LatLng(40.00, -70.00) }).then((res) => {
      const data = res.data.data;

      expect(data.length).toEqual(2);
      expect(data[0].attributes.description).toEqual('27-speed Hybrid. Fully functional.');
      expect(data[0].attributes.geolocation instanceof LatLng).toEqual(true);
      expect(data[0].attributes.geolocation).toEqual(new LatLng(40.64542, -74.08508));
      expect(data[1].attributes.description).toEqual('Goes together perfectly with a latte and a bow tie.');
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

    const handlers = [{
      type: UUID,
      customType: MyUuid,
      reader: v => new MyUuid(v.uuid), // reader fn type: UUID -> MyUuid
      writer: v => new UUID(v.myUuid), // writer fn type: MyUuid -> UUID
    }];

    const { sdk } = createSdk({
      typeHandlers: handlers,
    });

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new MyUuid('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));
    });
  });

  it('reads auth token from store and includes it in request headers', () => {
    const { sdk, tokenStore } = createSdk({
      // The Fake server doesn't know this clientId. However, the request passes because
      // the access_token is in the store
      clientId: 'daaf8871-4723-45b8-bc97-9e335f46966d',
    });

    tokenStore.setToken({
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo',
      token_type: 'bearer',
    });

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));
    });
  });

  it('stores the auth token to the store', () => {
    const { sdk, tokenStore } = createSdk();

    return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;
      const token = tokenStore.getToken();

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));

      expect(token.access_token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo');
      expect(token.token_type).toEqual('bearer');
      expect(token.expires_in).toEqual(86400);
    });
  });

  it('stores auth token after login', () => {
    const { sdk, tokenStore } = createSdk();

    // First we get the anonymous token
    return report(sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
      expect(tokenStore.getToken().access_token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo');

      // After login, the anonymous token will be overriden
      return sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
        expect(tokenStore.getToken().access_token).toEqual('dyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODY2NTY1NzEsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.XdRyKz6_Nc6QJDGZIZ7URdOz7V3tBCkD9olRTYIBL44');
      });
    }));
  });

  it('refreshes login token', () => {
    const { sdk, tokenStore } = createSdk();

    // First, login
    return report(sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
      expect(tokenStore.getToken().access_token).toEqual('dyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODY2NTY1NzEsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.XdRyKz6_Nc6QJDGZIZ7URdOz7V3tBCkD9olRTYIBL44');

      // Remove auth token from the store to simulate a
      // situation where access_token is invalid but refresh_token is
      // still valid
      // eslint-disable-next-line no-unused-vars
      const { access_token, ...rest } = tokenStore.getToken();
      tokenStore.setToken({ access_token: 'invalid_token', ...rest });

      return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
        expect(tokenStore.getToken().access_token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODcwMDYyNjgsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.t2XeBug85fPPxo3M8mVkKUvs7bUQdAQdoOwgT2qr8io');

        const resource = res.data.data;
        const attrs = resource.attributes;

        expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
        expect(attrs).toEqual(expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        }));
      });
    }));
  });

  it('refreshes anonymous token', () => {
    const { sdk, tokenStore } = createSdk();

    // First we get the anonymous token
    return report(sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
      expect(tokenStore.getToken().access_token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo');

      // Remove auth token from the store to simulate a
      // situation where access_token is invalid
      // eslint-disable-next-line no-unused-vars
      const { access_token, ...rest } = tokenStore.getToken();
      tokenStore.setToken({ access_token: 'invalid_token', ...rest });

      return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
        expect(tokenStore.getToken().access_token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo');


        const resource = res.data.data;
        const attrs = resource.attributes;

        expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
        expect(attrs).toEqual(expect.objectContaining({
          name: 'Awesome skies.',
          description: 'Meet and greet with fanatical sky divers.',
        }));
      });
    }));
  });

  it('revokes token (a.k.a logout)', () => {
    const { sdk, tokenStore } = createSdk();

    // First, login
    return report(sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(() => {
      expect(tokenStore.getToken().access_token).toEqual('dyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODY2NTY1NzEsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.XdRyKz6_Nc6QJDGZIZ7URdOz7V3tBCkD9olRTYIBL44');

      // Revoke token
      return sdk.logout().then((res) => {
        expect(res.data.action).toEqual('revoked');

        expect(tokenStore.getToken()).toEqual(null);

        return sdk.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then(() => {
          expect(tokenStore.getToken().access_token).toEqual('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo');
        });
      });
    }));
  });

  it('encodes new listing post body to Transit', () => {
    const { sdk, adapter } = createSdk();

    const testData = {
      "title": "A new hope",
      "description": "Our Nth listing!",
      "address": "Bulevardi 14, Helsinki, Finland",
      "geolocation": new LatLng(10.152, 15.375),
    }

    const transitEncoded = "[\"^ \",\"~:title\",\"A new hope\",\"~:description\",\"Our Nth listing!\",\"~:address\",\"Bulevardi 14, Helsinki, Finland\",\"~:geolocation\",[\"~#geo\",[10.152,15.375]]]"

    return report(sdk.listings.create(testData)).then(() => {
      expect(_.last(adapter.requests).data).toEqual(transitEncoded);
    });
  });

  describe('authInfo', () => {
    it('returns authentication information', () => {
      const { sdk, tokenStore } = createSdk();

      return report(sdk.authInfo()
                       .then((authInfo) => {
                         // No auth info yet.
                         expect(authInfo.grantType).toBeUndefined();
                       })
                       .then(() => sdk.marketplace.show().then(sdk.authInfo).then((authInfo) => {
                         // Anonymous token
                         expect(authInfo.grantType).toEqual('client_credentials');
                       }))
                       .then(() => sdk.login({ username: 'joe.dunphy@example.com', password: 'secret-joe' }).then(sdk.authInfo).then((authInfo) => {
                         // Login token
                         expect(authInfo.grantType).toEqual('refresh_token');
                       }))
                       .then(() => sdk.logout().then(sdk.authInfo).then((authInfo) => {
                         // Logout
                         expect(authInfo.grantType).toBeUndefined();
                       }))
                       .then(() => sdk.logout().then(sdk.authInfo).then((authInfo) => {
                         // Logging out already logged out user does nothing
                         expect(authInfo.grantType).toBeUndefined();
                       })));
    });
  });
});
