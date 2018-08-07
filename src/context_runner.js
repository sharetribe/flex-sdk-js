const DEBUG = false;

const resolve = ctx => Promise.resolve(ctx);

const buildCtx = (params = {}, middleware) => ({
  ...params,
  enterQueue: [...middleware].reverse(),
  leaveStack: [],
});

const tryExecuteMw = (ctx, mw, stage) => {
  /* eslint-disable no-console */
  /* eslint-disable no-undef */
  if (DEBUG) {
    if (mw[stage]) {
      console.log(`Executing ${mw.constructor.name}#${stage}`);
    }
  }
  /* eslint-enable no-console */
  /* eslint-enable no-undef */

  return resolve(ctx)
    .then(mw[stage] || resolve)
    .catch(error => {
      const errorCtx = error.ctx || ctx;
      return Promise.resolve({
        ...errorCtx,
        error,
        errorMiddleware: mw.constructor.name,
        errorStage: stage,
      });
    });
};

const nextMw = ctx => {
  const leaveStack = [...ctx.leaveStack];
  const enterQueue = [...ctx.enterQueue];
  let mw;
  let type;

  if (ctx.error) {
    mw = leaveStack.shift();
    type = 'error';
  } else if (enterQueue.length) {
    mw = enterQueue.pop();
    leaveStack.unshift(mw);
    type = 'enter';
  } else {
    mw = leaveStack.shift();
    type = 'leave';
  }
  return [{ ...ctx, enterQueue, leaveStack }, mw, type];
};

const executeCtx = ctx => {
  const [newCtx, mw, type] = nextMw(ctx);

  if (mw) {
    return tryExecuteMw(newCtx, mw, type).then(executeCtx);
  }

  if (newCtx.error) {
    const { error, ...errorCtx } = newCtx;
    error.ctx = errorCtx;
    return Promise.reject(error);
  }

  return Promise.resolve(newCtx);
};

/**

   ## contextRunner([interceptors]) => (ctx: Object) => Promise

   `contextRunner` takes an array of interceptor objects and returns a
   runnable function that takes context map (i.e. `ctx`) as a
   parameter, executes the interceptor chain and returns a Promise.

   ## Return value

   After running the function returned by the context runner, a
   Promise will be returned.

   - If the result is successful a `Promise.resolve(ctx)` is returned
   - If the result is unsuccessful a `Promise.resolve(error)` is
   - returned. The `error` MUST be instance of Error, and it MUST
   - contain key `ctx`, which contains the context map.

   ## Interceptor

   Interceptor is an object with `enter`, `leave` and `exit`
   functions. The object implement all `enter`, `leave` and `exit`
   functions, or some or none of them.

   It might be beneficial to define interceptors as classes. This
   helps debugging, because instead of `[Object object]` you are able
   to see the name of the interceptor. However, if you define the
   interceptor as a class, you should NOT use `this` in the class
   methods. The methods will be called in unbinded fashion.

   ### enter(ctx) => ctx

   `enter` function will be called when the context runner is
   executing the interceptor chain in the `enter` stage. The function
   takes context map as a parameter and returns the context map. If
   the interceptor does async operations, it can also return a
   Promise. If an error occures during the execution, an Error can be
   thrown.

   ### leave(ctx) => ctx

   `leave` function will be called when the context runner is
   executing the interceptor chain in the `leave` stage. The function
   takes context map as a parameter and returns the context map. If
   the interceptor does async operations, it can also return a
   Promise. If an error occures during the execution, an Error can be
   thrown.

   ### error(ctx) => ctx

   `error` function will be called when the context runner is
   executing the interceptor chain in the `error` stage. The runner
   goes to an `error` stage, if a previously executed interceptor
   threw an error or returned a rejected Promise.

   In `error` stage, the context map will have `ctx.error` assigned to
   the error that was thrown.

   The error can be rescued by returning a context map where
   `ctx.error` is falsy.

   ## Example usage:

   ```
   class LocalSumNumbers {
     enter({ numbers, ...ctx }) {
       return { ...ctx, sum: numbers.reduce((a, b) => a + b, 0) }
     }
   }

   contextRunner([
     new LocalSumNumbers()
   ])({ numbers: [1, 2, 3, 4 ]}).then((ctx) => {
     console.log(ctx.sym) // prints 10
   });
   ```

 */
const contextRunner = middleware => params => executeCtx(buildCtx(params, middleware));

export default contextRunner;
