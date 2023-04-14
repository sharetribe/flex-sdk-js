import axios from 'axios';
import { sdkUserAgentString } from '../runtime';

// GET requests: `params` includes query params. `queryParams` will be ignored
// POST requests: `params` includes body params. `queryParams` includes URL query params
const doRequest = ({ params = {}, queryParams = {}, httpOpts }) => {
  const { method = 'get', headers } = httpOpts;

  let data = null;
  let query = null;

  if (method.toLowerCase() === 'post') {
    data = params;
    query = queryParams;
  } else {
    query = params;
    // leave `data` null
  }

  const headersWithUa = sdkUserAgentString
    ? { ...headers, 'User-Agent': sdkUserAgentString }
    : headers;

  const req = {
    ...httpOpts,
    headers: headersWithUa,
    method,
    data,
    params: query,
  };

  return axios.request(req);
};

/**
   Creates a list of endpoint interceptors that call the endpoint with the
   given parameters.
*/
const endpointRequest = ({ method, url, urlTemplate, httpOpts }) => {
  const { headers: httpOptsHeaders, ...restHttpOpts } = httpOpts;

  return {
    enter: ctx => {
      const { params, queryParams, pathParams, headers, perRequestOpts } = ctx;

      return doRequest({
        params,
        queryParams,
        httpOpts: {
          ...perRequestOpts,
          method: method || 'get',
          // Merge additional headers
          headers: { ...httpOptsHeaders, ...headers },
          ...restHttpOpts,
          url: url || urlTemplate(pathParams),
        },
      })
        .then(res => ({ ...ctx, res }))
        .catch(error => {
          const errorCtx = { ...ctx, res: error.response };
          // eslint-disable-next-line no-param-reassign
          error.ctx = errorCtx;
          throw error;
        });
    },
  };
};

export default endpointRequest;
