import run from './middleware';

xdescribe('middleware runner', () => {
  describe('basics', () => {
    it('throws an exception without parameters', () => {
      expect(() => run()({ data: true })).toThrowError(TypeError);
    });

    it('returns resolved Promise, if no middleware is given', () => {
      run([])({ data: true }).then(ctx => expect(ctx).toEqual({ data: true }));
    });

    it('runs the middleware', () => {
      const mw1 = (ctx, next) => next([...ctx, 1]);
      run([mw1])([]).then(ctx =>
        expect(ctx).toEqual([1]));
    });

    it('runs a chain or middleware', () => {
      const mw1 = (ctx, next) => next([...ctx, 1]);
      const mw2 = (ctx, next) => next([...ctx, 2]);
      run([mw1, mw2])([]).then(ctx =>
        expect(ctx).toEqual([1, 2]));
    });

    it('continues to the next middleware if the `next` is provided', () => {
      const mw1 = (ctx, next) => next([...ctx, 1]);
      const mw2 = (ctx, next) => next([...ctx, 2]);
      const mw3 = (ctx, next) => next([...ctx, 3]);
      const mw4 = (ctx, next) => next([...ctx, 4]);

      const mw34 = run([mw3, mw4]);
      run([mw1, mw2])([], mw34).then(ctx =>
        expect(ctx).toEqual([1, 2, 3, 4]));
    });

    it('allows chaining', () => {
      const mw1 = (ctx, next) => next([...ctx, 1]);
      const mw2 = (ctx, next) => next([...ctx, 2]);
      const mw3 = (ctx, next) => next([...ctx, 3]);
      const mw4 = (ctx, next) => next([...ctx, 4]);

      const mw12 = run([mw1, mw2]);
      const mw34 = run([mw3, mw4]);

      run([mw12, mw34])([]).then(ctx =>
        expect(ctx).toEqual([1, 2, 3, 4]));
    });

    it('halts the chain execution if Promise is returned', () => {
      const mw1 = (ctx, next) => next([...ctx, 1]);
      const mwResolve = ctx => Promise.resolve(ctx);
      const mw3 = (ctx, next) => next([...ctx, 3]);

      run([mw1, mwResolve, mw3])([]).then((ctx) => {
        expect(ctx).toEqual([1]);
      });
    });

    it('can hook on *enter* or *leave* phase', () => {
      const mw12 = (enterCtx, next) => next([...enterCtx, 1]).then(leaveCtx => [...leaveCtx, 2]);
      const mw3 = (ctx, next) => next([...ctx, 3]);

      run([mw12, mw3])([]).then((ctx) => {
        expect(ctx).toEqual([1, 3, 2]);
      });
    });

    it('can hook to *error* phase', () => {
      const mwEnter1 = (enterCtx, next) => next([...enterCtx, 1]);
      const mwError2 = (enterCtx, next) => next(enterCtx).catch((error) => {
        // eslint-disable-next-line no-param-reassign
        error.ctx = [...error.ctx, 2];
        throw error;
      });
      const mwReject = (enterCtx) => {
        const error = new Error();
        error.ctx = enterCtx;
        return Promise.reject(error);
      };

      run([
        mwEnter1,
        mwError2,
        mwReject,
      ])([]).catch((error) => {
        const ctx = error.ctx;
        expect(ctx).toEqual([1, 2]);
      });
    });

    it('can rescue errored chain', () => {
      const mwEnter1 = (enterCtx, next) => next([...enterCtx, 1]);
      const mwLeave2 = (enterCtx, next) => next(enterCtx).then(leaveCtx => [...leaveCtx, 2]);
      const mwError3 = (enterCtx, next) => next(enterCtx).catch((error) => {
        // eslint-disable-next-line no-param-reassign
        error.ctx = [...error.ctx, 3];
        throw error;
      });
      const mwRescue = (enterCtx, next) =>
        next(enterCtx).catch(error => Promise.resolve(error.ctx));
      const mwReject = (enterCtx) => {
        const error = new Error();
        error.ctx = enterCtx;
        return Promise.reject(error);
      };

      run([
        mwEnter1,
        mwLeave2,
        mwRescue,
        mwError3,
        mwReject,
      ])([]).then((ctx) => {
        expect(ctx).toEqual([1, 3, 2]);
      });
    });
  });

  describe('use cases', () => {
    const createMiddleware = v =>
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

      return run([a, b, c])({ enter: [], leave: [] }).then((resultCtx) => {
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
          throw error;
        });
      };

      return run([a, retry, b, failOnce])({ enter: [], leave: [], error: [] }).then((resultCtx) => {
        expect(resultCtx).toEqual({ enter: ['a', 'retry', 'b', 'fail', 'b', 'fail'], leave: ['fail', 'b', 'retry', 'a'], error: ['fail', 'retry'] });
      });
    });

    it('can compose middlewares', () => {
      const a = createMiddleware('a');
      const b = createMiddleware('b');
      const c = createMiddleware('c');
      const d = createMiddleware('d');

      const ab = run([a, b]);
      const cd = run([c, d]);

      return run([ab, cd])({ enter: [], leave: [] }).then((resultCtx) => {
        expect(resultCtx).toEqual({ enter: ['a', 'b', 'c', 'd'], leave: ['d', 'c', 'b', 'a'] });
      });
    });
  });
});
