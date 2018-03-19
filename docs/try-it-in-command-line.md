# Try it in command-line!

The SDK ships with a command-line REPL that can be used to try out the
SDK.

To start the REPL, go to the directory where you cloned the SDK Git repository and type:

```
$ yarn run repl
```

Then copy-paste the following commands to the REPL:

Set your clientId:

```js
const clientId = "<your clientId here>";
```

Set your baseUrl:

```js
const baseUrl = "<your baseUrl here>";
```

Create new SDK instance:

```js
const sdk = sharetribeSdk.createInstance({
  clientId,
  baseUrl,
  tokenStore: sharetribeSdk.tokenStore.memoryStore()
});
```

Fetch 10 listings:

```js
sdk.listings.query({per_page: 10}).then(response => {
  console.log("Fetched " + response.data.data.length + " listings.");
  response.data.data.forEach(listing => {
    console.log(listing.attributes.title);
  });
});
```
