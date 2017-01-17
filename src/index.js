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

    const instanceOpts = {
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

    const axiosInstance = axios.create(instanceOpts);

    [...defaultEndpoints, ...endpoints].forEach((ep) => {
      const req = {
        url: ep.path,
      };

      assignDeep(this, methodPath(ep.path),
                 (params = {}) => axiosInstance.request({ ...req, params }));
    });
  }
}

// TODO Rethink the constructor parameters. Add docs.
const createInstance = (opts = {}, endpoints = [], adapter = null, handlers = []) =>
  new SharetribeSdk(opts, endpoints, adapter, handlers);

export default createInstance;
