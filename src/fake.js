/**
   This file implements a fake adapters for testing purposes only.

   The test responses are copy-pasted from real API responses.
 */

const createAdapter =
  adapterDef =>
    config =>
      new Promise((resolve, reject) => {
        adapterDef.call(null, config, resolve, reject);
      });

const auth = (config, resolve) => {
  const res = `{
                 "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYXJrZXRwbGFjZS1pZCI6IjE2YzZhNGI4LTg4ZWUtNDI5Yi04MzVhLTY3MjUyMDZjZDA4YyIsImNsaWVudC1pZCI6IjA4ZWM2OWY2LWQzN2UtNDE0ZC04M2ViLTMyNGU5NGFmZGRmMCIsInRlbmFuY3ktaWQiOiIxNmM2YTRiOC04OGVlLTQyOWItODM1YS02NzI1MjA2Y2QwOGMiLCJzY29wZSI6InB1YmxpYy1yZWFkIiwiZXhwIjoxNDg2NDcwNDg3fQ.6l_rV-hLbod-lfakhQTNxF7yY-4SEtaVGIPq2pO_2zo",
                 "token_type": "bearer",
                 "expires_in": 86400
               }`;

  return resolve({ data: res });
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

const adapter = createAdapter((config, resolve) => {
  switch (config.url) {
    case '/v1/api/users/show':
      return users.show(config, resolve);
    case '/v1/api/marketplace/show':
      return marketplace.show(config, resolve);
    case '/v1/api/listings/search':
      return listings.search(config, resolve);
    case '/v1/auth/token':
      return auth(config, resolve);
    default:
      throw new Error(`Not implemented to Fake adapter: ${config.url}`);
  }
});

export default adapter;
