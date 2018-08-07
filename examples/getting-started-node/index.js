/* eslint-env node */

const sharetribeSdk = require('../../build/sharetribe-flex-sdk-node');

//
// Printing helpers
//

/* eslint no-console: "off" */
const cyan = msg => {
  console.log('\x1b[36m%s\x1b[0m', msg);
};
const yellow = msg => {
  console.log('\x1b[33m%s\x1b[0m', msg);
};
const normal = msg => {
  console.log(msg);
};
const lineBreak = () => {
  console.log();
};

const baseUrl = process.argv[2];
const clientId = process.argv[3];

//
// Ensure baseUrl and clientId are set
//

if (!baseUrl) {
  lineBreak();
  cyan('Could not found baseUrl!');
  lineBreak();
  yellow('Usage: node index.js [baseUrl] [clientId]');
  lineBreak();
  process.exit(1);
}

if (!clientId) {
  lineBreak();
  cyan('Could not found clientId!');
  lineBreak();
  yellow('Usage: node index.js [baseUrl] [clientId]');
  lineBreak();
  process.exit(1);
}

const formatMoney = money => {
  // Be careful!!
  //
  // The division by hundred enters to the world of floating-points.
  // In production software, it's recommended to use a library like decimal.js to handle money calculations
  //
  // See more: https://github.com/MikeMcl/decimal.js/
  //
  const majorUnitAmount = money.amount / 100;

  return `${majorUnitAmount} ${money.currency}`;
};

const groupById = entities =>
  entities.reduce(
    (lookupMap, entity) => Object.assign({}, lookupMap, { [entity.id.uuid]: entity }),
    {}
  );

//
// Printing functions
//

const printStatus = response => {
  lineBreak();
  cyan(`** Response status:`);
  lineBreak();
  yellow(`${response.status} ${response.statusText}`);
  lineBreak();
};

const printMeta = response => {
  cyan('** Response meta:');
  lineBreak();
  yellow(`Total items: ${response.data.meta.totalItems}`);
  yellow(`Page: ${response.data.meta.page} / ${response.data.meta.totalPages}`);
  yellow(`Items per page: ${response.data.meta.perPage}`);
  lineBreak();
};

const printData = response => {
  // Group images by ID for easy and fast lookup
  const images = groupById(response.data.included.filter(entity => entity.type === 'image'));

  cyan('** Response data:');
  lineBreak();
  response.data.data.forEach(listing => {
    yellow(`${listing.attributes.title}, ${formatMoney(listing.attributes.price)}`);
    lineBreak();
    normal(`ID: ${listing.id.uuid}`);
    lineBreak();
    normal(`Images:`);
    listing.relationships.images.data.forEach(img => {
      const image = images[img.id.uuid];
      normal(`- ${image.attributes.variants.default.url}`);
    });
    lineBreak();
    normal(
      `Geolocation: ${listing.attributes.geolocation.lat},${listing.attributes.geolocation.lng}`
    );
    normal(`Created at: ${listing.attributes.createdAt}`);
    normal(`State: ${listing.attributes.state}`);
    lineBreak();
    lineBreak();
  });
};

// Create new SDK instance with clientId and baseUrl
const sdk = sharetribeSdk.createInstance({
  clientId,
  baseUrl,
});

lineBreak();
cyan('** Request:');
lineBreak();
yellow(`baseUrl: ${baseUrl}`);
yellow(`clientId: ${clientId}`);

// Call method sdk.listings.query with params include=images and
// per_page=5
//
// This will call the following API endpoint:
//
// /listings/query?include=images&per_page=5
//
// Returns a Promise.
//
sdk.listings
  .query({ include: 'images', per_page: 5 })
  .then(response => {
    // Successful response
    //
    // Render the response
    //
    printStatus(response);
    printMeta(response);
    printData(response);
  })
  .catch(response => {
    // An error occurred
    printStatus(response);
  });
