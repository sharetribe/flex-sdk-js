# Keep-Alive

*Node.js only*

By default, Node.js `http.Agent` and `https.Agent` create a new connection for each request. After the request is completed, the connection is closed. By keeping the connection open and reusing it for consecutive requests, the request time can be reduced. This is escpecially true for HTTPS connections, where the SSL handshake requires adds extra overhead for each request.

The SDK can be configured to use custom `httpAgent` and `httpsAgent`, where the `keepAlive` is set to `true`.

Using persistent Keep-Alive connections is recommended, because of the reductions to the request times.

**Example:**

``` js
const express = require('express');
const http = require('http');
const https = require('https');

const app = express();

// Instantiate HTTP(S) Agents with keepAlive set to true.
// This will reduce the request time for consecutive requests by
// reusing the existing TCP connection, thus eliminating the time used
// for setting up new TCP connections.
const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

app.get('/', (req, res) => {
  // Initialize the SDK instance
  const sdk = sharetribeSdk.createInstance({
    clientId: "<your Client ID>",
    baseUrl: "<your Base URL>",
    httpAgent: httpAgent,
    httpsAgent: httpsAgent
  });

  // Call the SDK to preload listings
  sdk.listings.search({ ... }).then((listingsResult) => {
    // do rendering etc.
  });
});
```
