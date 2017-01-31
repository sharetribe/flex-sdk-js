const repl = require('repl');
const msg = 'message';
const sharetribeSdk = require('../../build/sharetribe-sdk-node');
const sdk = sharetribeSdk.default({
  baseUrl: 'http://localhost:8088/v1/api/',
});

const ctx = repl.start('> ').context;

// Assign SDK as global
ctx.sdk = sdk;
