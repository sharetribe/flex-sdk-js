import run from './middleware';

describe('middleware runner', () => {
  const createMiddleware = (v) =>
    (enterCtx, next) => {
      enterCtx.enter.push(v);
      return next(enterCtx).then((leaveCtx) => {
        leaveCtx.leave.push(v);
        return leaveCtx;
      });
    };

  it('runs the middleware chain', () => {
    const a = createMiddleware('a');
    const b = createMiddleware('b');
    const c = createMiddleware('c');

    return run({ enter: [], leave: []}, [a, b, c]).then((resultCtx) => {
      expect(resultCtx).toEqual({ enter: ['a', 'b', 'c'], leave: ['c', 'b', 'a'] });
    });
  });

  it('can recover from failure', () => {
    const a = createMiddleware('a');
    const b = createMiddleware('b');

    const retry = (enterCtx, next) => {
      enterCtx.enter.push('retry');
      return next(enterCtx).catch((error) => {
        const errorCtx = error.ctx;
        errorCtx.error.push('retry');
        return next(errorCtx);
      }).then((leaveCtx) => {
        leaveCtx.leave.push('retry');
        return leaveCtx;
      });
    };

    // Make a middleware that fails once.
    let failed = false;
    const failOnce = (enterCtx) => {
      enterCtx.enter.push('fail');
      let res;
      if (!failed) {
        failed = true;
        const e = new Error('Failed');
        e.ctx = enterCtx;
        res = Promise.reject(e);
      } else {
        res = Promise.resolve(enterCtx);
      }

      return res.then((leaveCtx) => {
        leaveCtx.leave.push('fail');
        return leaveCtx;
      }).catch((error) => {
        error.ctx.error.push('fail');
        return Promise.reject(error);
      });
    };

    return run({ enter: [], leave: [], error: [] }, [a, retry, b, failOnce]).then((resultCtx) => {
      expect(resultCtx).toEqual({ enter: ['a', 'retry', 'b', 'fail', 'b', 'fail'], leave: ['fail', 'b', 'retry', 'a'], error: ['fail', 'retry'] });
    });
  });
});
