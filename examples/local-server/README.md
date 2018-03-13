# Local server example

This example connects to the local Sharetribe API server running on http://localhost:8088.

## Install

```
> yarn run build
> cp ../../build/sharetribe-sdk-web.js ./
> yarn install -g http-server
> http-server
> open http://localhost:8080
```

The example also uses `browserCookieStore` to store the cookies. You can see how this works in your browser when you open the Web Inspector. You can see that the SDK makes only 1 authentication request, and after that there are no more authentication requests sent, because the authentication token is read from the cookie store.
