import SharetribeSdk from './sdk';

// TODO Rethink the constructor parameters. Add docs.
const createInstance = (opts = {}, endpoints = [], adapter = null, handlers = []) =>
  new SharetribeSdk(opts, endpoints, adapter, handlers);

export default createInstance;
