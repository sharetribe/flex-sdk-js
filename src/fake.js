import _ from 'lodash';
import t from 'transit-js';

const reader = t.reader('json');

/**
   This file implements a fake adapters for testing purposes only.

   The test responses are copy-pasted from real API responses.
 */

const adapterHelper =
  adapterDef =>
    config =>
      new Promise((resolve, reject) => {
        const rejectWithError = (response) => {
          const error = new Error(`Request failed with status code ${response.status}`);
          error.response = response;

          reject(error);
        };

        adapterDef.call(null, config, resolve, rejectWithError);
      });

const parseFormData = data => _.fromPairs(data.split('&').map(keyValue => keyValue.split('=').map(decodeURIComponent)));

const revoke = (config, resolve, reject) => {
  const formData = parseFormData(config.data);

  if (formData.token) {
    if (formData.token === '74344396-d9af-458a-adbc-7ff1cb2661d0-fcaeb2c8-6089-4dc3-aa47-7c1ef57f9163' ||
        formData.token === 'c78e62a1-5640-460d-a476-e1c3b6b274f8--0fe0fb97-b304-4a71-860c-267b90f777f6') {
      // FIXME The `data` is not what the server returns
      return resolve({ data: { action: 'revoked' } });
    }

    // FIXME The `data` is not what the server returns
    return resolve({ data: { action: 'nothing' } });
  }

  // FIXME The `data` is not what the server returns
  return reject({ data: {}, __additionalTestInfo: formData });
};

const auth = (config, resolve, reject) => {
  const formData = parseFormData(config.data);

  if (formData.client_id === '08ec69f6-d37e-414d-83eb-324e94afddf0') {
    if (formData.grant_type === 'client_credentials') {
      const res = `{
                 "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo",
                 "token_type": "bearer",
                 "expires_in": 86400
               }`;
      return resolve({ data: res });
    }

    if (formData.grant_type === 'password') {
      if (formData.username === 'joe.dunphy@example.com' && formData.password === 'secret-joe') {
        const res = `{
                  "access_token": "dyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODY2NTY1NzEsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.XdRyKz6_Nc6QJDGZIZ7URdOz7V3tBCkD9olRTYIBL44",
                  "token_type": "bearer",
                  "expires_in": 3600,
                  "refresh_token": "74344396-d9af-458a-adbc-7ff1cb2661d0-fcaeb2c8-6089-4dc3-aa47-7c1ef57f9163"
                }`;
        return resolve({ data: res });
      }
    }

    if (formData.grant_type === 'refresh_token') {
      if (formData.refresh_token === '74344396-d9af-458a-adbc-7ff1cb2661d0-fcaeb2c8-6089-4dc3-aa47-7c1ef57f9163') {
        const res = `{
                  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODcwMDYyNjgsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.t2XeBug85fPPxo3M8mVkKUvs7bUQdAQdoOwgT2qr8io",
                  "token_type": "bearer",
                  "expires_in": 3600,
                  "refresh_token": "c78e62a1-5640-460d-a476-e1c3b6b274f8--0fe0fb97-b304-4a71-860c-267b90f777f6"
                }`;
        return resolve({ data: res });
      }
    }
  }

  return reject({
    status: 401,
    statusText: 'Unauthorized',
    data: 'Unauthorized',

    // Add additional information to help debugging when testing.
    // This key is NOT returned by the real API.
    __additionalTestInfo: { formData },
  });
};

const marketplace = {
  show: (config, resolve) => {
    const res = `[
                     "^ ",
                     "~:data",
                     [
                       "^ ",
                       "~:id",
                       "~u${config.params.id}",
                       "~:type",
                       "~:marketplace",
                       "~:attributes",
                       [
                         "^ ",
                         "~:name",
                         "Awesome skies.",
                         "~:description",
                         "Meet and greet with fanatical sky divers."
                       ],
                       "~:relationships",
                       [
                         "^ "
                       ]
                     ],
                     "~:meta",
                     [
                       "^ "
                     ],
                     "~:included",
                     []
                   ]`;

    return resolve({ data: res });
  },
};

const users = {
  show: (config, resolve) => {
    const res = `[
                   "^ ",
                   "~:data",
                   [
                     "^ ",
                     "~:id",
                     "~u0e0b60fe-d9a2-11e6-bf26-cec0c932ce01",
                     "~:type",
                     "~:user",
                     "~:attributes",
                     [
                       "^ ",
                       "~:email",
                       "user@sharetribe.com",
                       "~:description",
                       "A team member"
                     ],
                     "~:relationships",
                     [
                       "^ "
                     ]
                   ],
                   "~:meta",
                   [
                     "^ "
                   ],
                   "~:included",
                   []
                 ]`;

    return resolve({ data: res });
  },
};

const listings = {
  create: (config, resolve, reject) => {
    const body = reader.read(config.data);

    const requiredFields = ['title', 'description', 'address', 'geolocation'].map(k => body.get(t.keyword(k)));

    if (requiredFields.some(v => v == null)) {
      return reject({
        status: 400,
        statusText: 'Bad Request',
        data: `["^ ",
          "~:errors", [
            ["^ ",
              "~:id", "~u57b3f476-19a0-4e07-9a44-923d9dbbe361",
              "~:status", 400,
              "~:code", "bad-request",
              "~:title", "Bad request",
              "~:details", ["^ ",
                "~:error", ["^ ",
                  "~:body-params", ["^ ",
                    "^4", "missing-required-key",
                    "~:description", "missing-required-key",
                    "~:address", "missing-required-key",
                    "~:geolocation", "missing-required-key"]]]]]]` });
    }

    let res;

    if (config.params.expand === true) {
      res = `["^ ",
        "~:data", ["^ ",
          "~:id", "~u58c660f5-a39a-49a5-9270-8a917b7d6c9e",
          "~:type", "~:listing",
          "~:attributes", ["^ ",
            "~:title", "Pelago bike",
            "~:description", "City bike for city hipster!",
            "~:price", ["~#mn", [12000, "USD"]],
            "~:address", "Bulevardi 14, 00200 Helsinki, Finland",
            "~:geolocation", ["~#geo", [40.0, 73.0]]]]]`;
    } else {
      res = `["^ ",
        "~:data", ["^ ",
          "~:id", "~u58c6610d-1ffd-4fa5-b386-4f9b6e46e732",
          "~:type", "~:listing"]]`;
    }

    return resolve({ data: res });
  },
  search: (config, resolve) => {
    const res = `[
                   "^ ",
                   "~:data",
                   [
                     [
                       "^ ",
                       "~:id",
                       "~u9009efe1-25ec-4ed5-9413-e80c584ff6bf",
                       "~:type",
                       "~:listing",
                       "~:links",
                       [
                         "^ ",
                         "~:self",
                         "/v1/api/listings/show?id=9009efe1-25ec-4ed5-9413-e80c584ff6bf"
                       ],
                       "~:attributes",
                       [
                         "^ ",
                         "~:title",
                         "Nishiki 401",
                         "~:description",
                         "27-speed Hybrid. Fully functional.",
                         "~:address",
                         "230 Hamilton Ave, Staten Island, NY 10301, USA",
                         "~:geolocation",
                         [
                           "~#geo",
                           [
                             40.64542,
                             -74.08508
                           ]
                         ]
                       ],
                       "~:relationships",
                       [
                         "^ ",
                         "~:author",
                         [
                           "^ ",
                           "^4",
                           [
                             "^ ",
                             "~:related",
                             "/v1/api/users/show?id=3c073fae-6172-4e75-8b92-f560d58cd47c"
                           ]
                         ],
                         "~:marketplace",
                         [
                           "^ ",
                           "^4",
                           [
                             "^ ",
                             "^>",
                             "/v1/api/marketplace/show"
                           ]
                         ]
                       ]
                     ],
                     [
                       "^ ",
                       "^1",
                       "~u5e1f2086-522c-46f3-87b4-451c6770c833",
                       "^2",
                       "^3",
                       "^4",
                       [
                         "^ ",
                         "^5",
                         "/v1/api/listings/show?id=5e1f2086-522c-46f3-87b4-451c6770c833"
                       ],
                       "^6",
                       [
                         "^ ",
                         "^7",
                         "Pelago Brooklyn",
                         "^8",
                         "Goes together perfectly with a latte and a bow tie.",
                         "^9",
                         "230 Hamilton Ave, Staten Island, NY 10301, USA",
                         "^:",
                         [
                           "^;",
                           [
                             40.64542,
                             -74.08508
                           ]
                         ]
                       ],
                       "^<",
                       [
                         "^ ",
                         "^=",
                         [
                           "^ ",
                           "^4",
                           [
                             "^ ",
                             "^>",
                             "/v1/api/users/show?id=3c073fae-6172-4e75-8b92-f560d58cd47c"
                           ]
                         ],
                         "^?",
                         [
                           "^ ",
                           "^4",
                           [
                             "^ ",
                             "^>",
                             "/v1/api/marketplace/show"
                           ]
                         ]
                       ]
                     ]
                   ],
                   "~:meta",
                   [
                     "^ "
                   ],
                   "~:included",
                   []
                 ]`;

    return resolve({ data: res });
  },
};

const requireAuth = (config, reject) => {
  // TODO Err... this is quite adhoc :)
  // Consider a more robust implementation: Inject a list of auth
  // tokens returned by the fake adapter. When a token is returned,
  // memorize it as logged in token that is authorize to do calls.

  const anonToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo';
  const loggedInToken = 'Bearer dyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODY2NTY1NzEsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.XdRyKz6_Nc6QJDGZIZ7URdOz7V3tBCkD9olRTYIBL44';
  const refreshedToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InVzZXIiLCJleHAiOjE0ODcwMDYyNjgsInVzZXItaWQiOiIzYzA3M2ZhZS02MTcyLTRlNzUtOGI5Mi1mNTYwZDU4Y2Q0N2MifQ.t2XeBug85fPPxo3M8mVkKUvs7bUQdAQdoOwgT2qr8io';

  const expectedAuths = [
    anonToken,
    loggedInToken,
    refreshedToken,
  ];

  if (!config.headers.Authorization) {
    return reject({
      status: 401,
      data: '{}', // FIXME This is not what the server sends

      __additionalTestInfo: 'Authorization header missing',
    });
  }

  const authorized = expectedAuths.find(
    expected => expected.toLowerCase() === config.headers.Authorization.toLowerCase());

  if (!authorized) {
    return reject({
      status: 401,
      data: '{}', // FIXME This is not what the server sends
    });
  }

  return Promise.resolve();
};

const createAdapter = () => {
  const requests = [];

  return {
    requests,
    adapterFn: adapterHelper((config, resolve, reject) => {
      requests.push(config);

      switch (config.url) {
        case '/v1/api/users/show':
          return requireAuth(config, reject).then(() => users.show(config, resolve));
        case '/v1/api/marketplace/show':
          return requireAuth(config, reject).then(() => marketplace.show(config, resolve));
        case '/v1/api/listings/search':
          return requireAuth(config, reject).then(() => listings.search(config, resolve));
        case '/v1/api/listings/create':
          return requireAuth(config, reject).then(() => listings.create(config, resolve, reject));
        case '/v1/auth/token':
          return auth(config, resolve, reject);
        case '/v1/auth/revoke':
          return requireAuth(config, reject).then(() => revoke(config, resolve, reject));
        default:
          throw new Error(`Not implemented to Fake adapter: ${config.url}`);
      }
    }),
  };
};

export default createAdapter;
