import contextRunner from './context_runner';

describe('context runner', () => {
  const createEnterMW = name => ctx => {
    const { enters = [], ...newCtx } = ctx;
    return { ...newCtx, enters: [...enters, name] };
  };

  const createLeaveMW = name => ctx => {
    const { leaves = [], ...newCtx } = ctx;
    return { ...newCtx, leaves: [...leaves, name] };
  };

  const createErrorRaiseMW = name => ctx => {
    const { errors = [], ...newCtx } = ctx;
    return { ...newCtx, errors: [...errors, name] };
  };

  const createErrorResolveMW = name => ctx => {
    const { errors = [], ...newCtx } = ctx;
    return { ...newCtx, errors: [...errors, name], error: null };
  };

  const enterRaiseMW = () => {
    throw new Error('middleware enter failed');
  };

  const leaveRaiseMW = () => {
    throw new Error('middleware leave failed');
  };

  const createTestMiddlewareEL = name => ({
    enter: createEnterMW(name),
    leave: createLeaveMW(name),
  });

  const createTestMiddlewareE = name => ({
    enter: createEnterMW(name),
  });

  const createTestMiddlewareL = name => ({
    leave: createLeaveMW(name),
  });

  const createTestMiddlewareELERaise = name => ({
    enter: createEnterMW(name),
    leave: createLeaveMW(name),
    error: createErrorRaiseMW(name),
  });

  const createTestMiddlewareRaise = () => ({
    enter: enterRaiseMW,
  });

  const createTestMiddlewareELEResolve = name => ({
    enter: createEnterMW(name),
    leave: createLeaveMW(name),
    error: createErrorResolveMW(name),
  });

  const createTestMiddlewareELRaise = name => ({
    enter: createEnterMW(name),
    leave: leaveRaiseMW,
  });

  const createEnterTimeoutMW = name => ctx => {
    const { enters = [], ...newCtx } = ctx;

    return new Promise(resolve => {
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        resolve({ ...newCtx, enters: [...enters, name] });
      }, 10);
    });
  };

  const createLeaveTimeoutMW = name => ctx => {
    const { leaves = [], ...newCtx } = ctx;

    return new Promise(resolve => {
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        resolve({ ...newCtx, leaves: [...leaves, name] });
      }, 10);
    });
  };

  const createTestMiddlewareTimeoutEL = name => ({
    enter: createEnterTimeoutMW(name),
    leave: createLeaveTimeoutMW(name),
  });

  it('exists', () => {
    expect(contextRunner).not.toBeNull();
    expect(contextRunner).not.toBeUndefined();
  });

  it('executes enter and leave phases of middleware', () => {
    const mw = createTestMiddlewareEL('one');
    const runner = contextRunner([mw]);

    return runner().then(ctx => {
      expect(ctx.enters).toEqual(['one']);
      expect(ctx.leaves).toEqual(['one']);
    });
  });

  it('executes enters in given orders and leaves in reverse', () => {
    const mw1 = createTestMiddlewareEL('one');
    const mw2 = createTestMiddlewareEL('two');
    const mw3 = createTestMiddlewareEL('three');
    const runner = contextRunner([mw1, mw2, mw3]);

    return runner().then(ctx => {
      expect(ctx.enters).toEqual(['one', 'two', 'three']);
      expect(ctx.leaves).toEqual(['three', 'two', 'one']);
    });
  });

  it('calls enter and leave only on middleware that define them', () => {
    const mw1 = createTestMiddlewareE('one');
    const mw2 = createTestMiddlewareEL('two');
    const mw3 = createTestMiddlewareL('three');
    const runner = contextRunner([mw1, mw2, mw3]);

    return runner().then(ctx => {
      expect(ctx.enters).toEqual(['one', 'two']);
      expect(ctx.leaves).toEqual(['three', 'two']);
    });
  });

  it('calls error on all middlewares in stack', () => {
    const mw1 = createTestMiddlewareELERaise('one');
    const mw2 = createTestMiddlewareELERaise('two');
    const mw3 = createTestMiddlewareRaise();
    const runner = contextRunner([mw1, mw2, mw3]);

    return runner().catch(error => {
      const { ctx } = error;
      expect(ctx.enters).toEqual(['one', 'two']);
      expect(ctx.leaves).toBeUndefined();
      expect(ctx.errors).toEqual(['two', 'one']);
    });
  });

  it('middleware can resolve an error which leads to remaining leaves being called', () => {
    const mw1 = createTestMiddlewareEL('one');
    const mw2 = createTestMiddlewareELEResolve('two');
    const mw3 = createTestMiddlewareRaise();
    const runner = contextRunner([mw1, mw2, mw3]);

    return runner().then(ctx => {
      expect(ctx.enters).toEqual(['one', 'two']);
      expect(ctx.leaves).toEqual(['one']);
      expect(ctx.errors).toEqual(['two']);
    });
  });

  it('leave raising trigger the error flow', () => {
    const mw1 = createTestMiddlewareELERaise('one');
    const mw2 = createTestMiddlewareELRaise('two');
    const mw3 = createTestMiddlewareEL('three');
    const runner = contextRunner([mw1, mw2, mw3]);

    return runner().catch(error => {
      const { ctx } = error;

      expect(ctx.enters).toEqual(['one', 'two', 'three']);
      expect(ctx.leaves).toEqual(['three']);
      expect(ctx.errors).toEqual(['one']);
    });
  });

  it('supports async operations', () => {
    const mw1 = createTestMiddlewareTimeoutEL('one');
    const mw2 = createTestMiddlewareTimeoutEL('two');
    const mw3 = createTestMiddlewareTimeoutEL('three');
    const runner = contextRunner([mw1, mw2, mw3]);

    return runner().then(ctx => {
      expect(ctx.enters).toEqual(['one', 'two', 'three']);
      expect(ctx.leaves).toEqual(['three', 'two', 'one']);
    });
  });
});
