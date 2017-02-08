/* eslint-env node */
/* eslint-disable no-console */

// Don't show an error when devDependencies (i.e. colors) is imported
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const colors = require('colors');
const repl = require('repl');
const sharetribeSdk = require('./src/index');

const sdk = sharetribeSdk.createInstance({
  clientId: '08ec69f6-d37e-414d-83eb-324e94afddf0',
  baseUrl: 'http://localhost:8088/',
});

const ctx = repl.start('> ').context;

// Assign SDK as global
ctx.sdk = sdk;
ctx.sharetribeSdk = sharetribeSdk;
Object.assign(ctx, sharetribeSdk.types);

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
console.log('  > npm run repl'.block);
console.log('  ```'.block);
console.log('  ');
console.log('  ## Globals'.h2);
console.log('  ');
console.log('  The following globals are available:');
console.log('  ');
console.log(`  - ${'`sharetribeSdk`'.inline}: The SDK module`);
console.log(`  - ${'`sdk`'.inline}: SDK instance configured to connect to http://localhost:8088`);
console.log(`  - ${'`UUID`'.inline}, ${'`LatLng`'.inline}, e.g. all available types`);
console.log('  ');
console.log('  ## Example usage'.h2);
console.log('  ');
console.log('  Fetch and log all listings in a marketplace:');
console.log('  ');
console.log('  ```'.block);
console.log('  > res = sdk.marketplace.show({marketplace_id: \'16c6a4b8-88ee-429b-835a-6725206cd08c\'})'.block);
console.log('  > res.then((response) => console.log(response.data))'.block);
console.log('  > { data:'.block);
console.log('     { id: UUID { uuid: \'16c6a4b8-88ee-429b-835a-6725206cd08c\' },'.block);
console.log('       type: \'marketplace\','.block);
console.log('       links: { self: \'/v1/api/marketplace/show\' },'.block);
console.log('       attributes:'.block);
console.log('        { name: \'Bikesoil\','.block);
console.log('          description: \'Peer to peer bike rentals in Essex.\' },'.block);
console.log('       relationships: {} },'.block);
console.log('    meta: {},'.block);
console.log('    included: [] }'.block);
console.log('  ```'.block);
console.log('  ');
console.log(`  Type ${'`.exit`'.inline} when you want to exit the REPL`);
console.log('  ');
console.log('  Hit [Enter] when you\'re ready to start!');
