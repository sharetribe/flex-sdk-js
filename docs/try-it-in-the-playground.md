# Try it in the API Playground!

The SDK ships with a command-line based API Playground. You can use
the Playground to try out the SDK with real API access to learn and
test things. It also supports executing scripts against the API.

To start the Playground, go to the directory where you cloned the SDK
Git repository and type:

```
$ yarn run playground --clientid <CLIENT-ID>
```

or use the shorthand:
```
$ yarn run pg -c <CLIENT-ID>
```

This will start the playground using your Marketplace API Client ID to
connect to your marketplace. You can create a new Client ID or find your
existing ones in Console at
https://console.sharetribe.com/advanced/applications.

## Making API Requests

You can make API requests to the Marketplace API and print the results
using the built-in response printer:

```js
sdk.listings.query({per_page: 5}).then(printResponse);
```

Alternatively you can use the pr() helper function:
```js
sdk.listings.query({per_page: 5});
pr();
```

You can also do custom processing of responses:

```js
sdk.listings.query({per_page: 10}).then(response => {
  console.log("Fetched " + response.data.data.length + " listings.");
  response.data.data.forEach(listing => {
    console.log(listing.attributes.title);
  });
});
```

## Authenticated access

To start the Playground in a user authenticated mode you can pass in
the user info you want to log in with:

```
$ yarn run pg -c <CLIENT-ID> -u useremail@yourdomain.com -s user-secret-password
```

In the Playground you can now make requests authenticated as the user:

```js
sdk.currentUser.show().then(printResponse);
```

## Viewing Marketplace API reference documentation

The Playground has a command for opening the Marketplace API reference
documentation in browser:

```
$ yarn run pg --apidocs
```

You can also do this in a playground session using the built-in
apiDocs function:

```js
apiDocs();
```

## Scripting support

The Playground also supports reading commands from a script file. The
commands from the given file are read as if they were lines entered
into an interactive Playground.

Let's say you have a script file create-listing.js for creating a new
listing for the logged in user:

```js
sdk.ownListings.query().then(res => {
  console.log(`You have ${res.data.data.length} listings.`);
}).then(_ => {
  console.log('Creating a new listings');
  return sdk.ownListings.create({
    title: "My new listings",
    description: "A shiny new listing",
    geolocation: new LatLng(40.64542, -74.08508),
    price: new Money(1590, "USD"),
    publicData: {
      category: 'Electric',
      gears: 22
    }
  });
}).then(res => {
  console.log(`Created a new listings with id ${res.data.data.id.uuid}`);
  return sdk.ownListings.query();
}).then(res => {
  console.log(`You now have ${res.data.data.length} listings.`);
});
```

You can execute the script by running:

```
$ yarn run pg -c <CLIENT-ID> -u useremail@yourdomain.com -s user-secret-password --script create-listing.js
```

The output will look something like:

```
Initializing SDK instance with Client ID: <CLIENT-ID>...
Successfully connected to Saunatime marketplace.
Logging in user useremail@yourdomain.com...
Executing script...

> sdk.ownListings.query().then(res => {
...   console.log(`You have ${res.data.data.length} listings.`);
... }).then(() => {
...   console.log('Creating a new listing');
...   return sdk.ownListings.create({
.....     title: "My new listings",
.....     description: "A shiny new listing",
.....     geolocation: new LatLng(40.64542, -74.08508),
.....     price: new Money(1590, "USD"),
.....     publicData: {
.......       category: 'Electric',
.......       gears: 22
.......     }
.....   });
... }).then(res => {
...   console.log(`Created a new listing with id ${res.data.data.id.uuid}`);
...   return sdk.ownListings.query();
... }).then(res => {
...   console.log(`You now have ${res.data.data.length} listings.`);
... });

> You have 10 listings.
Creating a new listing
Created a new listing with id 5e579343-0241-4d73-a50a-d8c5062feb86
You now have 11 listings.
```

