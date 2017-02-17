/**

  # `run`

  Takes an array of middleware functions and returns a runnable middleware function.

  Usage:

  ```
  const runnableMiddleware = run([
    middlewareOne,
    middlewareTwo,
  ])

  runnableMiddleware(contextObject);
  ```

  # `middleware`

  A middleware function is a functions that takes two arguments:

  - `ctx`: A context object
  - `next(ctx)`: Function to call with possibly modified context object.

  A middleware function MUST return a Promise. If the Promise is resolved,
  the possibly modified `ctx` object MUST be returned as Promise payload.
  If the Promise is rejected, an Error object MUST be returned as payload.
  The Error object MUST have a property `ctx`, which is the `ctx` object.

  Usually, the middleware does not return Promise, but instead calls the
  `next(ctx)` function and returns the return value of `next(ctx)`, which
  is a Promise.

  Thus, the type of the middleware function is:

  ```
  (ctx: object, next: (ctx: object) => Promise(ctx: object)) => Promise(ctx: object)
  ```

  Usage:

  ```
  const timingMiddleware = (enterCtx, next) => {
    const start = (new Date()).getTime();

    return next(enterCtx).then((leaveCtx) => {
      const end = (new Date()).getTime();

      return { ...leaveCtx, time: (end - start) }
    }.catch((error)) => {
      const end = (new Date()).getTime();
      error.ctx.time = (end - start);
      throe error;
  });

  const logTimingMiddleware = (enterCtx, next) => {
    return next(enterCtx).then((leaveCtx) => {
      console.log(`Took: ${leaveCtx.time}`);
      return leaveCtx;
    }).catch((error) => {
      console.log(`Error took: ${error.ctx.time}`);
      throw error;
    })
  });

  const runnableMiddleware = run([
    logTimingMiddleware,
    timingMiddleware,
    doServerRequest
  ]);

  const ctx = {}; // Pass empty middleware as context

  runnableMiddleware(ctx).then(() => {
    console.log('Middleware stack running complete.')
  });
  ```

  # Tips:

  If you want to use a middleware function outside the middleware chain, you can do it like this:

  ```
  myMiddlewareFn(ctx, resultCtx => Promise.resolve(resultCtx)).then(resultCtx => {
    console.log('Done.');
  })
  ```
*/

const run = (middlewares) => {
  const [first, ...rest] = middlewares;

  // Return a middleware function (ctx, next) -> Promise
  return (ctx, next) => {
    if (first) {
      return first(ctx, newCtx => run(rest)(newCtx, next));
    } else if (next) {
      return next(ctx);
    }

    return Promise.resolve(ctx);
  };
};

export default run;
