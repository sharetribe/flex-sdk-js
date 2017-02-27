/* eslint-env node */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */

require('babel-register');

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const htmlTemplate = fs.readFileSync('./index.html', 'utf8');

// Setup static asset path for browser to fetch the build package
app.use('/build', express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => {
  res.send(htmlTemplate);
});

const port = 8081;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Example app listening on port ${port}!`);
  console.log(`http://localhost:${port}`);
});
