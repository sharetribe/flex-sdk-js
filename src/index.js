import axios from 'axios';
import transit from 'transit-js';
import { methodPath, assignDeep } from './utils';
import { UUID } from './types';

const defaultOpts = {
  headers: {'Accept': 'application/transit'},
  baseUrl: 'https://api.sharetribe.com',
};

const defaultEndpoints = [];

const ident = x => x;

var transitReader = transit.reader("json", {
  handlers: {
    "u": (rep) => new UUID(rep),
  },
  arrayBuilder: {
    init: function(node) { return []; },
    add: function(ret, val, node) {
      ret.push(val);
      return ret; },
    finalize: ident,
  },
  mapBuilder: {
    init: function(node) { return {}; },
    add: function(ret, key, val, node) {
      ret[key.name()] = val;
      return ret },
    finalize: ident,
  }
});

class SharetribeSdk {
  constructor(opts, endpoints) {
    this.opts = Object.freeze({ ...defaultOpts, ...opts });

    const axiosInstance = axios.create({
      headers: this.opts.headers,
      baseURL: this.opts.baseUrl,
      transformRequest: [(data) => data],
      transformResponse: [(data) => {
        return transitReader.read(data);
        // return JSON.parse(data);
      }],
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
