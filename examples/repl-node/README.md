# Node REPL example

This example let's you explore the Sharetribe SDK from Node REPL.

The `localhost.js` file instantiates a REPL with access to Sharetribe API running in `localhost:8808`.

## Start the REPL

First, build the bundle:

```
npm run build
```

Start the REPL:

```
node localhost.js
```

Now, do your first request:

```
> res = sdk.marketplace.show({marketplace_id: "16c6a4b8-88ee-429b-835a-6725206cd08c"})
Promise { <pending> }
> res.then((response) => console.log(response.data))
Promise { <pending> }
> { data:
   { id: UUID { uuid: '16c6a4b8-88ee-429b-835a-6725206cd08c' },
     type: 'marketplace',
     links: { self: '/v1/api/marketplace/show' },
     attributes:
      { name: 'Bikesoil',
        description: 'Peer to peer bike rentals in Essex.' },
     relationships: {} },
  meta: {},
  included: [] }
```
