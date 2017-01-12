import axios from 'axios';
import { methodPath } from './utils';

const defaultOpts = {
  host: 'api.sharetribe.com',
  protocol: 'https',
};

const defaultEndpoints = [];

class SharetribeSDK {
  constructor(opts, endpoints) {
    this.opts = Object.freeze({ ...defaultOpts, ...opts });

    const axiosInstance = axios.create({
      baseURL: `${this.opts.protocol}://${this.opts.host}`,
    });

    [...defaultEndpoints, ...endpoints].forEach((ep) => {
      const req = {
        url: ep.path,
      };

      this[methodPath(ep.path).join('.')] = () => axiosInstance.request(req);
    });
  }
}

const createInstance = (opts = {}, endpoints = []) =>
  new SharetribeSDK(opts, endpoints);

export default createInstance;
