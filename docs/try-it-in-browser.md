# Try it in browser!

The SDK is loaded in this page!

To try the SDK in the browser, just open the Console in your browsers Developer Tools. The SDK is loaded in a global names `sharetribeSdk`.

You can try for example copy-pasting the following commands to the Console:

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
const sdk = sharetribeSdk.createInstance({clientId, baseUrl});
```

Fetch 10 listings:

```js
sdk.listings.query({per_page: 10}).then(response => {
  console.log("Fetched " + response.data.data.length + " listings.");
  response.data.data.forEach(listing => {
    console.log(listing.attributes.title);
  })
})
```
