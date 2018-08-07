import transit from 'transit-js';

const reader = transit.reader('json');

export const marketplace = {
  show: (config, resolve) => {
    const res = `["^ ",
                     "~:data", ["^ ",
                       "~:id", "~u${config.params.id}",
                       "~:type", "~:marketplace",
                       "~:attributes", ["^ ",
                         "~:name", "Awesome skies.",
                         "~:description", "Meet and greet with fanatical sky divers."],
                       "~:relationships", ["^ "]],
                     "~:meta", ["^ "],
                     "~:included", []]`;

    return resolve({ data: res });
  },
};

export const users = {
  show: (config, resolve) => {
    const res = `["^ ",
                   "~:data", ["^ ",
                     "~:id", "~u0e0b60fe-d9a2-11e6-bf26-cec0c932ce01",
                     "~:type", "~:user",
                     "~:attributes", ["^ ",
                       "~:email", "user@sharetribe.com",
                       "~:description", "A team member"],
                     "~:relationships", ["^ "]],
                   "~:meta", ["^ "],
                   "~:included", []]`;

    return resolve({ data: res });
  },
};

export const listings = {
  search: (config, resolve) => {
    const res = `["^ ",
                   "~:data", [
                     ["^ ",
                       "~:id", "~u9009efe1-25ec-4ed5-9413-e80c584ff6bf",
                       "~:type", "~:listing",
                       "~:links", ["^ ",
                         "~:self", "/v1/api/listings/show?id=9009efe1-25ec-4ed5-9413-e80c584ff6bf"],
                       "~:attributes", ["^ ",
                         "~:title", "Nishiki 401",
                         "~:description", "27-speed Hybrid. Fully functional.",
                         "~:address", "230 Hamilton Ave, Staten Island, NY 10301, USA",
                         "~:geolocation", [
                           "~#geo", [40.64542, -74.08508]]],
                       "~:relationships", ["^ ",
                         "~:author", ["^ ",
                           "^4", ["^ ",
                             "~:related", "/v1/api/users/show?id=3c073fae-6172-4e75-8b92-f560d58cd47c"]],
                         "~:marketplace", ["^ ",
                           "^4", ["^ ",
                             "^>", "/v1/api/marketplace/show"]]]],
                     ["^ ",
                       "^1", "~u5e1f2086-522c-46f3-87b4-451c6770c833",
                       "^2", "^3",
                       "^4", ["^ ",
                         "^5", "/v1/api/listings/show?id=5e1f2086-522c-46f3-87b4-451c6770c833"],
                       "^6", ["^ ",
                         "^7", "Pelago Brooklyn",
                         "^8", "Goes together perfectly with a latte and a bow tie.",
                         "^9", "230 Hamilton Ave, Staten Island, NY 10301, USA",
                         "^:", [
                           "^;", [40.64542, -74.08508]]],
                       "^<", ["^ ",
                         "^=", ["^ ",
                           "^4", ["^ ",
                             "^>", "/v1/api/users/show?id=3c073fae-6172-4e75-8b92-f560d58cd47c"]],
                         "^?", ["^ ",
                           "^4", ["^ ",
                             "^>", "/v1/api/marketplace/show"]]]]],
                   "~:meta", ["^ "],
                   "~:included", []]`;

    return resolve({ data: res });
  },
};

export const ownListings = {
  create: (config, resolve, reject) => {
    const body = reader.read(config.data);

    const requiredFields = ['title', 'description', 'address', 'geolocation'].map(k =>
      body.get(transit.keyword(k))
    );

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
                    "~:geolocation", "missing-required-key"]]]]]]`,
      });
    }

    let res;

    if (config.params.expand === true) {
      res = `["^ ",
        "~:data", ["^ ",
          "~:id", "~u58c660f5-a39a-49a5-9270-8a917b7d6c9e",
          "~:type", "~:ownListing",
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
          "~:type", "~:ownListing"]]`;
    }

    return resolve({ data: res });
  },
};
