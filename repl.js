/* eslint-env node */
/* eslint-disable no-console */

// Don't show an error when devDependencies (i.e. colors) is imported
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const colors = require('colors');
const repl = require('repl');
const sharetribeSdk = require('./src/index');

// Start REPL
const replInstance = repl.start('> ');

// Attach history
require('repl.history')(replInstance, './.repl_history');

// Assign SDK as global
const ctx = replInstance.context;
ctx.sharetribeSdk = sharetribeSdk;

// Welcome message

colors.setTheme({
  h1: 'yellow',
  h2: 'yellow',
  inline: 'gray',
  block: 'gray',
});

console.log('');
console.log('');
console.log('  # REPL'.h1);
console.log('  ');
console.log('  With the REPL you can test and try out the SDK with real results from the API.');
console.log('  ');
console.log('  To start the REPL, type:');
console.log('  ');
console.log('  ```'.block);
console.log('  > yarn run repl'.block);
console.log('  ```'.block);
console.log('  ');
console.log('  ## Globals'.h2);
console.log('  ');
console.log('  The following globals are available:');
console.log('  ');
console.log(`  - ${'`sharetribeSdk`'.inline}: The SDK module`);
console.log('  ');
console.log('  ## Example usage'.h2);
console.log('  ');
console.log('  Create new SDK instance:');
console.log('  ');
console.log('  ```'.block);
console.log('  const clientId = "<your clientId here>";'.block);
console.log('  const baseUrl = "<your baseUrl here>";'.block);
console.log('  const sdk = sharetribeSdk.createInstance({'.block);
console.log('    clientId,'.block);
console.log('    baseUrl,'.block);
console.log('    tokenStore: sharetribeSdk.tokenStore.memoryStore()'.block);
console.log('  });'.block);
console.log('  ```'.block);
console.log('  ');
console.log('  Fetch 10 listings:');
console.log('  ');
console.log('  ```'.block);
console.log('  sdk.listings.query({per_page: 10}).then(response => {'.block);
console.log('    console.log("Fetched " + response.data.data.length + " listings.");'.block);
console.log('    response.data.data.forEach(listing => {'.block);
console.log('      console.log(listing.attributes.title);'.block);
console.log('    });'.block);
console.log('  });'.block);
console.log('  ```'.block);
console.log('  ');
console.log(`  Type ${'`.exit`'.inline} when you want to exit the REPL`);
console.log('  ');
console.log('  Hit [Enter] when you\'re ready to start!');
