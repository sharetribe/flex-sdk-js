const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Load the "app bundle" for server
const bundle = require('./bundle');

// Load the "app bundle" as string and render it
const bundleString = fs.readFileSync('./bundle.js');

// Load SDK for Node
const sharetribe = require('../../build/sharetribe-sdk-node').default;

// Initialize the SDK instance
const sdk = sharetribe({
  baseUrl: 'http://api.open-notify.org/',
}, [
  { path: 'iss-now/' },
]);

// Setup static asset path for browser to fetch the build package
app.use('/build', express.static(path.join(__dirname, '../../build')));

// Add one root route and do the server rendering
app.get('/', (req, res) => {
  sdk['iss-now']().then((iss) => {
    res.send(
`
<!DOCTYPE html>
<html>
  <head>
    <title>Server-rendering example</title>
    <script src="/build/sharetribe-sdk-web.js"></script>
    <script>
      const sdk = sharetribeSdk.default({baseUrl: 'http://api.open-notify.org/'}, [{ path: 'iss-now/' }]);

      // Load the bundle
      const module = {};
      ((module) => {
        ${bundleString}
      })(module);
      const bundle = module.exports;

      const redraw = (html) => { document.body.innerHTML = html };
      setInterval(() => { sdk['iss-now']().then((iss) => { redraw(bundle.renderBodyHtml(iss.data))})}, 5000);
      console.log('Timer started');
    </script>
  </head>
  <body>${bundle.renderBodyHtml(iss.data)}</body>
</html>
`
    );
  });
});

app.listen(3344, () => {
  console.log('Example app listening on port 3344!')
});

