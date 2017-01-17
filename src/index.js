import SharetribeSdk from './sdk';

// TODO Rethink the constructor parameters. Add docs.
const createInstance = (opts = {}, endpoints = [], handlers = []) =>
  new SharetribeSdk(opts, endpoints, null, handlers);

export default createInstance;
