# Sharing session between client and server

For server side rendering, the server needs to be able to prefetch the
page data using the same user session than the client is using. For
example, if the user logs in as "joe", the client needs to pass the
session information to the server, so that the server is able to make
requests as "joe". In other words, the client and server need share
the same session information.

The sharing of the session can be achieved by cookies. When the client
SDK is configured to use the [Browser cookie
store](./token-store.md#browser-cookie-store) (default) and the server
SDK is configured to use the [Express cookie
store](./token-store.md#express-cookie-store), both client and server
are reading and writing the session to the same cookie. Thus, the
session information will be shared between server and client.

Have a look at the [Token store](./token-store.md) examples on how to
configure the cookie stores.
