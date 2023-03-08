import _ from 'lodash';
import contextRunner from './context_runner';

const formatError = e => {
  /* eslint-disable no-param-reassign */
  if (e.response) {
    Object.assign(e, e.response);
    delete e.response;
  }

  if (e.ctx) {
    // Remove context `ctx` from the error response.
    //
    // `ctx` is SDK internal and shouldn't be exposed as a part of the
    // SDK public API. It can be added in the response for debugging
    // purposes, if needed.
    delete e.ctx;
  }

  if (e.config) {
    // Remove Axios config `config` from the error response.
    //
    // Axios attaches a config object to the error. This objects contains the
    // configuration that was used when error occured.
    //
    // `config` is SDK internal and shouldn't be exposed as a part of the
    // SDK public API. It can be added in the response for debugging
    // purposes, if needed.
    delete e.config;
  }

  throw e;
  /* eslint-enable no-param-reassign */
};

const createSdkFnContextRunner = ({
  params,
  queryParams,
  pathParams,
  perRequestOpts,
  ctx,
  interceptors,
}) =>
  contextRunner(_.compact(interceptors))({
    ...ctx,
    params,
    queryParams,
    pathParams,
    perRequestOpts,
  })
    .then(({ res }) => res)
    .catch(formatError);

export default createSdkFnContextRunner;
