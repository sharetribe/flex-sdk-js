import { formData } from './utils';
import paramsSerializer from './params_serializer';

const createHeaders = transitVerbose => {
  if (transitVerbose) {
    return {
      'X-Transit-Verbose': 'true',
      Accept: 'application/transit+json',
    };
  }

  return {
    Accept: 'application/transit+json',
  };
};

export const defaultSdkConfig = {
  clientId: null,
  clientSecret: null,
  baseUrl: 'https://flex-api.sharetribe.com',
  assetCdnBaseUrl: 'https://cdn.st-api.com',
  typeHandlers: [],
  adapter: null,
  version: 'v1',
  httpAgent: null,
  httpsAgent: null,
  transitVerbose: false,
  disableDeprecationWarnings: false,
};

export const apis = {
  api: ({ baseUrl, version, adapter, httpAgent, httpsAgent, transitVerbose }) => ({
    headers: createHeaders(transitVerbose),
    baseURL: `${baseUrl}/${version}`,
    transformRequest: v => v,
    transformResponse: v => v,
    adapter,
    paramsSerializer,
    httpAgent,
    httpsAgent,
  }),
  auth: ({ baseUrl, version, adapter, httpAgent, httpsAgent }) => ({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    baseURL: `${baseUrl}/${version}/`,
    transformRequest: [data => formData(data)],
    // using default transformRequest, which can handle JSON and fallback to plain
    // test if JSON parsing fails
    adapter,
    httpAgent,
    httpsAgent,
  }),
  assets: ({ assetCdnBaseUrl, version, adapter, httpAgent, httpsAgent }) => ({
    headers: {
      Accept: 'application/json',
    },
    baseURL: `${assetCdnBaseUrl}/${version}`,
    adapter,
    paramsSerializer,
    httpAgent,
    httpsAgent,
  }),
};
