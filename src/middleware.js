const run = (ctx, middlewares) => {
  const [first, ...rest] = middlewares;

  if (first) {
    return first(ctx, (newCtx) => run(newCtx, rest))
  } else {
    return Promise.resolve(ctx);
  }
}

export default run;
