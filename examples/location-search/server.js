/* eslint-env node */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */

require('babel-register');

const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');

const app = express();

// Load SDK for Node
const sharetribeSdk = require('../../src/index');

const clientId = '08ec69f6-d37e-414d-83eb-324e94afddf0';
const marketplaceId = '16c6a4b8-88ee-429b-835a-6725206cd08c';

const htmlTemplate = fs.readFileSync('./index.html', 'utf8');

// Setup static asset path for browser to fetch the build package
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/build', express.static(path.join(__dirname, '../../build')));

app.use(cookieParser());

// Add one root route and do the server rendering
app.get('/', (req, res) => {
  // Initialize the SDK instance
  const sdk = sharetribeSdk.createInstance({
    clientId,
    baseUrl: 'http://localhost:8088',
    tokenStore: sharetribeSdk.tokenStore.expressCookieStore({
      clientId,
      req,
      res,
    }),
  });

  const params = {
    marketplace_id: marketplaceId,
    include: ['author'],
  };

  if (req.query.origin) {
    params.origin = req.query.origin;
  } else {
    params.origin = '0,0';
  }

  if (req.query.bounds) {
    params.bounds = req.query.bounds;
  }

  sdk.listings.search(params).then((listingsResult) => {
    res.send(htmlTemplate.replace('__initialData__', JSON.stringify(listingsResult)));
  }).catch((e) => {
    console.log('Warning! Call to sdk.listings.show() failed:');
    console.log(e);
    res.send(htmlTemplate.replace('__initialData__}', 'null'));
  });
});

app.listen(8080, () => {
  /* eslint-disable no-console */
  console.log('Example app listening on port 8080!');
  console.log('http://localhost:8080');
});

