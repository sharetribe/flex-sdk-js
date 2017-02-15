const run = (middlewares) => {
  const [first, ...rest] = middlewares;

  // Return a middleware function (ctx, next) -> Promise
  return (ctx, next) => {

    if (first) {
      return first(ctx, (newCtx) => run(rest)(newCtx, next))
    } else if (next) {
      return next(ctx);
    } else {
      return Promise.resolve(ctx);
    }
  };
}

export default run;
