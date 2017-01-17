import axios from 'axios';
import { methodPath, assignDeep } from './utils';
import { reader, writer } from './serializer';

const defaultOpts = {
  headers: { Accept: 'application/transit' },
  baseUrl: 'https://api.sharetribe.com',
};

const defaultEndpoints = [
  { path: 'marketplace/show' },
  { path: 'user/show' },
];

// const logAndReturn = data => {
//   console.log(data);
//   return data;
// };

const createSdkMethod = (req, axiosInstance) =>
  (params = {}) =>
    axiosInstance.request({ ...req, params });

/**
 * Mutates 'obj' by adding endpoint methods to it.
 *
 * @param {Object} obj - Object that will be assigned with the endpoints.
 * @param {Object[]} endpoints - endpoint definitions
 * @param {Object} axiosInstance
 *
 */
const assignEndpoints = (obj, endpoints, axiosInstance) => {
  endpoints.forEach((ep) => {
    const req = {
      url: ep.path,
    };

    const sdkMethod = createSdkMethod(req, axiosInstance);

    // e.g. '/marketplace/users/show/' -> ['marketplace', 'users', 'show']
    const path = methodPath(ep.path);

    // Assign `sdkMethod` to path.
    //
    // E.g. assign obj.marketplace.users.show = sdkMethod
    assignDeep(obj, path, sdkMethod);
  });

  // Return the mutated obj
  return obj;
};

class SharetribeSdk {

  constructor(opts, endpoints, adapter, handlers) {
    this.opts = Object.freeze({ ...defaultOpts, ...opts });

    const { readers, writers } = handlers.reduce((memo, handler) => {
      const r = {
        type: handler.type,
        reader: handler.reader,
      };
      const w = {
        type: handler.type,
        customType: handler.customType,
        writer: handler.writer,
      };

      memo.readers.push(r);
      memo.writers.push(w);

      return memo;
    }, { readers: [], writers: [] });

    const r = reader(readers);
    const w = writer(writers);

    const httpOpts = {
      headers: this.opts.headers,
      baseURL: this.opts.baseUrl,
      transformRequest: [
        // logAndReturn,
        data => w.write(data),
      ],
      transformResponse: [
        // logAndReturn,
        data => r.read(data),
      ],
      adapter,
    };

    const axiosInstance = axios.create(httpOpts);
    const allEndpoints = [...defaultEndpoints, ...endpoints];

    // Assign all endpoint definitions to 'this'
    assignEndpoints(this, allEndpoints, axiosInstance);
  }
}

// TODO Rethink the constructor parameters. Add docs.
const createInstance = (opts = {}, endpoints = [], adapter = null, handlers = []) =>
  new SharetribeSdk(opts, endpoints, adapter, handlers);

export default createInstance;
