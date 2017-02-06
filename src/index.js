import SharetribeSdk from './sdk';
import * as types from './types';

const createInstance = config =>
  new SharetribeSdk(config);

/* eslint-disable import/prefer-default-export */
export {
  createInstance,
  types,
};
