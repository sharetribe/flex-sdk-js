## Configurations

There are a few config options that can given to the `createInstance`:

``` js
const sharetribeSdk = require('sharetribe-sdk');

var sdk = sharetribeSdk.createInstance({

  // The API ClientID (mandatory)
  clientId: "08ec69f6-d37e-414d-83eb-324e94afddf0",

  // The API base URL (mandatory)
  baseUrl: "https://api.sharetribe.com/v1/",

  // Token store
  //
  // Token store instance to use. Token store is where the SDK saves the session information.
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

  // List of type handlers
  typeHandlers: [
    {
      type: UUID,
      customType: MyUuidType,

      // Writer fn type signature must be:
      // type -> customType
      //
      // E.g.
      // UUID -> MyUuidType
      writer: v => new UUID(v.myUuid),

      // Reader fn type signature must be:
      // customType -> type
      //
      // E.g.
      // MyUuidType -> UUID
      reader: v => new MyUuidType(v.uuid),
    }
  ],


  // Node.js only.
  // HTTP and HTTPS agents to be used when performing
  // http and https request. This allows defining non-default
  // options for agent, such as `{ keepAlive: true }`.
  //
  httpAgent: httpAgent,
  httpsAgent: httpsAgent
});
```
