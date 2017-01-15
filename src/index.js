import axios from 'axios';
import { methodPath, assignDeep } from './utils';
import { reader, writer } from './serializer';

const defaultOpts = {
  headers: { Accept: 'application/transit' },
  baseUrl: 'https://api.sharetribe.com',
};

const defaultEndpoints = [];

// const logAndReturn = data => {
//   console.log(data);
//   return data;
// };

class SharetribeSdk {
  constructor(opts, endpoints, adapter) {
    this.opts = Object.freeze({ ...defaultOpts, ...opts });

    const r = reader();
    const w = writer();

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

const createInstance = (opts = {}, endpoints = [], adapter = null) =>
  new SharetribeSdk(opts, endpoints, adapter);

export default createInstance;
