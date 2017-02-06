import SharetribeSdk from './sdk';

const createInstance = config =>
  new SharetribeSdk(config);

/* eslint-disable import/prefer-default-export */
export {
  createInstance,
};
