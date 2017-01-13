import axios from 'axios';
import { methodPath, assignDeep } from './utils';

const defaultOpts = {
  baseUrl: 'https://api.sharetribe.com',
};

const defaultEndpoints = [];

class SharetribeSdk {
  constructor(opts, endpoints) {
    this.opts = Object.freeze({ ...defaultOpts, ...opts });

    const axiosInstance = axios.create({
      baseURL: this.opts.baseUrl,
    });

    [...defaultEndpoints, ...endpoints].forEach((ep) => {
      const req = {
        url: ep.path,
      };

      assignDeep(this, methodPath(ep.path), () => axiosInstance.request(req));
    });
  }
}

const createInstance = (opts = {}, endpoints = []) =>
  new SharetribeSdk(opts, endpoints);

export default createInstance;
