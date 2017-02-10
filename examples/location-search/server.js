/* eslint-env node */

/* eslint-disable import/no-unresolved */
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Load SDK for Node
const sharetribeSdk = require('../../build/sharetribe-sdk-node');

// Initialize the SDK instance
const sdk = sharetribeSdk.createInstance({
  clientId: 'noop',
  baseUrl: 'http://api.open-notify.org/',
  endpoints: [
    { path: 'iss-now/' },
  ],
});

// Setup static asset path for browser to fetch the build package
app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/build', express.static(path.join(__dirname, '../../build')));

// Add one root route and do the server rendering
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080, () => {
  /* eslint-disable no-console */
  console.log('Example app listening on port 8080!');
  console.log('http://localhost:8080');
});

