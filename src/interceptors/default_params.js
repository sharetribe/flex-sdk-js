/**
   Add given params to the `ctx.params`

   Changes to `ctx`:

   - Modify `ctx.params`
 */
const defaultParams = (params = {}) => ({
  enter: ({ params: ctxParams, ...ctx }) => ({ ...ctx, params: { ...params, ...ctxParams } }),
});

export default defaultParams;
