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

const marketplace = {
  show: createAdapter((config, resolve) => {
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
  }),
};

const user = {
  show: createAdapter((config, resolve) => {
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
  }),
};

export default { user, marketplace };
