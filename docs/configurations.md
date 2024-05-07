# Configurations

There are a few configuration options that can given to the
`createInstance` method:

``` js
const sharetribeSdk = require('sharetribe-flex-sdk');

var sdk = sharetribeSdk.createInstance({

  // An API application client ID (mandatory)
  clientId: "08ec69f6-d37e-414d-83eb-324e94afddf0",

  // An API application client secret. Only to be used in a server
  // environment and not to be exposed to a client/browser.
  clientSecret: "8af2bf99c380b3a303ab90ae4012c8cd8f69d309",

  // Token store
  //
  // Token store instance to use. Token store is where the SDK
  // saves the session information.
  //
  // Built-in token stores:
  //
  // - sharetribeSdk.tokenStore.browserCookieStore
  // - sharetribeSdk.tokenStore.expressCookieStore
  // - sharetribeSdk.tokenStore.memoryStore
  //
  // Default: sharetribeSdk.tokenStore.browserCookieStore()
  //
  tokenStore: sharetribeSdk.tokenStore.browserCookieStore(),

  // List of custom type handlers
  typeHandlers: [
    {
      sdkType: UUID,
      // "type" was renamed to "sdkType" on v1.4.0
      appType: MyUuidType,
      // "customType" was renamed to "appType" on v1.4.0

      // Writer fn type signature must be:
      // appType -> sdkType
      //
      // E.g.
      // MyUuidType -> UUID
      writer: v => new UUID(v.myUuid),

      // Reader fn type signature must be:
      // sdkType -> appType
      //
      // E.g.
      // UUID -> MyUuidType
      reader: v => new MyUuidType(v.uuid),
    }
  ],

  // Node.js only.
  // HTTP and HTTPS agents to be used when performing
  // http and https request. This allows defining non-default
  // options for agent, such as `{ keepAlive: true }`.
  //
  httpAgent: httpAgent,
  httpsAgent: httpsAgent,

  // If true and default browser token store is used,
  // the cookie is never transferred without HTTPS connection.
  // Default: false
  secure: false,

  // SDK uses Transit format to communicate with the API.
  // If this configuration is `true` a verbose Transit mode is enabled.
  // Useful for development.
  // Default: false
  transitVerbose: false,

  // API base URL (optional)
  // Defaults to Sharetribe production (https://flex-api.sharetribe.com)
  // Change this if you want to point the SDK to somewhere else (like localhost).
  // Useful mainly for Sharetribe's internal development
  baseUrl: "https://api-base-url.example.sharetribe.com/",

  // Asset CDN base URL (optional)
  // Defaults to Sharetribe production (https://cdn.st-api.com)
  // Change this if you want to point the SDK to somewhere else (like localhost).
  // Useful mainly for Sharetribe's internal development
  assetCdnBaseUrl: "https://asset-cdn-base-url.example.sharetribe.com/",

  // Allow use of Client Secret in browser (optional, defaults to false)
  //
  // Privileged Marketplace API calls that use Client Secret are meant to be done
  // from a secure context, e.g. from a private Node.js server. Using Client Secret
  // in an open website exposes the it to the public.
  //
  // By default, the SDK will display a warning if Client Secret is used in browser
  // but if you know what you are doing, and you have secured the website properly so
  // that Client Secret is not leaked, you can suppress the warning by setting this
  // to `true`.
  dangerouslyAllowClientSecretInBrowser: false,

  // Disables deprecation warnings.
  //
  // Deprecation warnings are printed with `console.warn` if `console.warn`
  // is available. Setting this value to `true` will suppress those warnings.
  disableDeprecationWarnings: false
});
```
