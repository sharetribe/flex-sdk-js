/* eslint-env node */
/* eslint-disable no-console */

// Don't show an error when devDependencies (i.e. colors) is imported
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const colors = require('colors');
const repl = require('repl');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const sharetribeSdk = require('./src/index');

// Welcome message when Playground starts
const printWelcomeMessage = raw =>
      _ => {
        colors.setTheme({
          h1: 'yellow',
          h2: 'yellow',
          inline: 'gray',
          block: 'gray',
        });

        if (raw) {
          console.log('');
          console.log('  # Playground (raw mode)'.h1);
          console.log('  ');
          console.log('  With the Marketplace API Playground you can test and try out the SDK with real results from the API.');
          console.log('  ');
          console.log('  ## Globals'.h2);
          console.log('  ');
          console.log('  The following globals are available:');
          console.log('  ');
          console.log(`  - ${'`sharetribeSdk`'.inline}: The SDK module`);
          console.log(`  - ${'`printResponse`'.inline}: Helper function for pretty printing the API response.`);
          console.log('  ');
          console.log('  ## Example usage'.h2);
          console.log('  ');
          console.log('  Create new SDK instance:');
          console.log('  ');
          console.log('  ```'.block);
          console.log('  const clientId = "<your clientId here>";'.block);
          console.log('  const sdk = sharetribeSdk.createInstance({'.block);
          console.log('    clientId,'.block);
          console.log('    tokenStore: sharetribeSdk.tokenStore.memoryStore()'.block);
          console.log('  });'.block);
          console.log('  ```'.block);
          console.log('  ');
          console.log('  Print marketplace information:');
          console.log('  ');
          console.log('  sdk.marketplace.show().then(printResponse);'.block);
          console.log('  ');
          console.log('  Fetch 10 listings:');
          console.log('  ');
          console.log('  sdk.listings.query({per_page: 10}).then(response => {'.block);
          console.log('    console.log("Fetched " + response.data.data.length + " listings.");'.block);
          console.log('    response.data.data.forEach(listing => {'.block);
          console.log('      console.log(listing.attributes.title);'.block);
          console.log('    });'.block);
          console.log('  });'.block);
          console.log('  ');
          console.log(`  Type ${'`.exit`'.inline} when you want to exit the Playground`);
        } else {
          console.log('');
          console.log('  # Playground'.h1);
          console.log('  ');
          console.log('  With the Marketplace API Playground you can test and try out the SDK with real results from the API.');
          console.log('  ');
          console.log('  ## Globals'.h2);
          console.log('  ');
          console.log('  The following globals are available:');
          console.log('  ');
          console.log(`  - ${'`sharetribeSdk`'.inline}: The SDK module`);
          console.log(`  - ${'`sdk`'.inline}: An SDK instance initialized with your client ID`);
          console.log(`  - ${'`printResponse`'.inline}: Helper function for pretty printing the API response.`);
          console.log('  ');
          console.log('  ## Example usage'.h2);
          console.log('  ');
          console.log('  Print marketplace information:');
          console.log('  ');
          console.log('  sdk.marketplace.show().then(printResponse);'.block);
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
          console.log(`  Type ${'`.exit`'.inline} when you want to exit the Playground`);
        };
      }

// CLI Usage information
const optionDefinitions = [
  {
    name: 'help',
    description: 'Display this usage guide.',
    alias: 'h',
    type: Boolean
  },
  {
    name: 'clientid',
    description: 'Your Marketplace API Client ID to initialize the SDK with. You create your Client ID in Flex Console: {underline https://flex-console.sharetribe.com/applications}.',
    alias: 'c',
    typeLabel: '{underline ID}',
    type: String
  },
  {
    name: 'user',
    description: 'The email of the user to log in with. The SDK is initialized in an authenticated state.',
    alias: 'u',
    typeLabel: '{underline email}',
    type: String
  },
  {
    name: 'password',
    description: 'The password of the user to log in with. The SDK is initialized in an authenticated state.',
    alias: 's',
    typeLabel: '{underline password}',
    type: String
  },
  {
    name: 'raw',
    description: 'Start the playground without initializing the SDK.',
    type: Boolean
  }
];

const printUsage = _ => {
  console.log(commandLineUsage([
    {
      header: 'Marketplace API Playground',
      content: 'The easiest way to call the Flex Marketplace API using the JS SDK to try things out, to learn the APIs and to test your ideas.'
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    }
  ]));
};

const printResponse = response => {
  console.log(JSON.stringify(response.data, null, 4));
  return response;
}

// Parse command line args
//
const options = commandLineArgs(optionDefinitions);

if (options.help || (!options.raw && options.clientid == null)) {
  printUsage();
  process.exit();
};

const startRepl = (sharetribeSdk, sdk) =>
      _ => {
        // Start REPL
        const replInstance = repl.start('> ');
        // Attach history
        replInstance.setupHistory('./.repl_history', (err, repl) => null);

        // Assign SDK as global
        const ctx = replInstance.context;
        ctx.sharetribeSdk = sharetribeSdk;
        ctx.printResponse = printResponse;
        if (sdk) {
          ctx.sdk = sdk;
        }
      }

const exitOnFailure = msg =>
      _ => {
        console.error(msg)
        process.exit(1);
      };

// If client ID is provided on start, instantiate and expose sdk
if (options.clientid) {
  const sdk = sharetribeSdk.createInstance({
    clientId: options.clientid,
    tokenStore: sharetribeSdk.tokenStore.memoryStore()
  });

  // If user auth info is given too, log in with the user.
  if (options.user && options.password) {
    console.log('Initializing SDK instance with Client ID: ' + options.clientid)
    sdk.marketplace.show()
      .then(result => console.log(`Successfully connected to ${result.data.data.attributes.name} marketplace.`))
      .catch(exitOnFailure(`Unable to access the Marketplace API with the given Client ID: ${options.clientid}.`))
      .then(_ => {
        console.log('Logging in user ' + options.user);
        sdk.login({
          username: options.user,
          password: options.password
        })
          .catch(exitOnFailure(`Unable to log in with the email: ${options.user} and password: ${options.password}`))
          .then(printWelcomeMessage(false))
          .then(startRepl(sharetribeSdk, sdk))
      });

  // No user auth, just Client ID
  } else {
    console.log('Initializing SDK instance with Client ID: ' + options.clientid)
    sdk.marketplace.show()
      .then(result => console.log(`Successfully connected to ${result.data.data.attributes.name} marketplace.`))
      .catch(exitOnFailure(`Unable to access the Marketplace API with the given Client ID: ${options.clientid}.`))
      .then(printWelcomeMessage(false))
      .then(startRepl(sharetribeSdk, sdk));

  }
// Raw mode
} else {
  printWelcomeMessage(true)();
  startRepl(sharetribeSdk, null)();
}

