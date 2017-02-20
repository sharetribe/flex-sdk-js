const resolve = ctx => Promise.resolve(ctx);

const buildEnterQueue = (params, middleware) => middleware.reverse();

const buildCtx = (params = {}, middleware) =>
  ({ ...params, enterQueue: buildEnterQueue(params, middleware), leaveStack: [] });

const tryExecuteMw = (ctx, mw, stage) =>
  resolve(ctx).then(mw[stage] || resolve).catch(error => {
    const errorCtx = error.ctx || ctx;
    return Promise.resolve({
      ...errorCtx,
      error,
      errorMiddleware: mw.constructor.name,
      errorStage: stage,
    });
  });

const nextMw = (ctx) => {
  const newCtx = { ...ctx };
  let mw;
  let type;

  if (newCtx.error) {
    mw = newCtx.leaveStack.shift();
    type = 'error';
  } else if (newCtx.enterQueue.length) {
    mw = newCtx.enterQueue.pop();
    newCtx.leaveStack.unshift(mw);
    type = 'enter';
  } else {
    mw = newCtx.leaveStack.shift();
    type = 'leave';
  }
  return [newCtx, mw, type];
};

const executeCtx = (ctx) => {
  const [newCtx, mw, type] = nextMw(ctx);

  if (mw) {
    return tryExecuteMw(newCtx, mw, type).then(executeCtx);
  } else if (newCtx.error) {
    const { error, ...errorCtx } = newCtx;
    error.ctx = errorCtx;
    return Promise.reject(error);
  }

  return Promise.resolve(newCtx);
};

const contextRunner = middleware => params => executeCtx(buildCtx(params, middleware));

export default contextRunner;
