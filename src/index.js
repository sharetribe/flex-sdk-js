import axios from 'axios';
import { methodPath, assignDeep } from './utils';
import { reader, writer } from './serializer';

const defaultOpts = {
  headers: {'Accept': 'application/transit'},
  baseUrl: 'https://api.sharetribe.com',
};

const defaultEndpoints = [];

class SharetribeSdk {
  constructor(opts, endpoints) {
    this.opts = Object.freeze({ ...defaultOpts, ...opts });

    const r = reader();
    const w = writer();

    const axiosInstance = axios.create({
      headers: this.opts.headers,
      baseURL: this.opts.baseUrl,
      transformRequest: [(data) => w.write(data)],
      transformResponse: [(data) => r.read(data)],
    });

    [...defaultEndpoints, ...endpoints].forEach((ep) => {
      const req = {
        url: ep.path,
      };

      assignDeep(this, methodPath(ep.path), (params = {}) => axiosInstance.request({ ...req, params}));
    });
  }
}

const createInstance = (opts = {}, endpoints = []) =>
  new SharetribeSdk(opts, endpoints);

export default createInstance;
