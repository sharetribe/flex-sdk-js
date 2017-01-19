import axios from 'axios';
import _ from 'lodash';
import { methodPath, assignDeep } from './utils';
import { reader, writer } from './serializer';

const privateOpts = {
  headers: { Accept: 'application/transit' },
};

const defaultEndpoints = [
  { path: 'marketplace/show' },
  { path: 'user/show' },
];

// const logAndReturn = data => {
//   console.log(data);
//   return data;
// };

const createSdkMethod = (req, axiosInstance) =>
  (params = {}) =>
    axiosInstance.request({ ...req, params });

/**
 * Mutates 'obj' by adding endpoint methods to it.
 *
 * @param {Object} obj - Object that will be assigned with the endpoints.
 * @param {Object[]} endpoints - endpoint definitions
 * @param {Object} axiosInstance
 *
 */
const assignEndpoints = (obj, endpoints, axiosInstance) => {
  endpoints.forEach((ep) => {
    const req = {
      url: ep.path,
    };

    const sdkMethod = createSdkMethod(req, axiosInstance);

    // e.g. '/marketplace/users/show/' -> ['marketplace', 'users', 'show']
    const path = methodPath(ep.path);

    // Assign `sdkMethod` to path.
    //
    // E.g. assign obj.marketplace.users.show = sdkMethod
    assignDeep(obj, path, sdkMethod);
  });

  // Return the mutated obj
  return obj;
};

export class ValidationResult {
  constructor(success, reasonMessage = null) {
    this.success = success;
    this.reasonMessage = reasonMessage;
  }
}

/**
   Very naive regexp for checking valid base url.
 */
const baseUrlRegexp = /^(http|https):\/\/(.+)/;

export const validateBaseUrl = (url) => {
    const failureMsg = 'Value must be a string containing full URL, including the protocol. Example: \'http://api.sharetribe.com\'';

  if (!_.isString(url)) {
    return new ValidationResult(false, failureMsg);
  }
  else if (!url.match(baseUrlRegexp)) {
    const msg = 'Value must be a string containing full URL, including the protocol. Example: \'http://api.sharetribe.com\'';
    return new ValidationResult(false, failureMsg);
  }

  return new ValidationResult(true);
};

const validatePath = (v) => {
  if (_.isString(v) && !_.isEmpty(v)) {
    return new ValidationResult(true);
  }

  return new ValidationResult(false, "Endpoint path must be a non-empty string")
};

const endpointSchema = {
  path: validatePath,
}

const validateEndpoint = endpoint => {
  const unknownKey = _.keys(endpoint).find(key => endpointSchema[key] == null);
  const missingKey = _.keys(endpointSchema).find(key => endpoint[key] == null);

  if (unknownKey) {
    return new ValidationResult(false, `Unknown key "${unknownKey}" for endpoint ${JSON.stringify(endpoint)}`);
  }

  if (missingKey) {
    return new ValidationResult(false, `Missing required key "${missingKey}" for endpoint ${JSON.stringify(endpoint)}`);
  }

  const results = _.map(endpoint, (v, k) => endpointSchema[k](v));
  const firstFailure = results.find(res => res.success === false);

  if (firstFailure) {
    return firstFailure;
  }

  return new ValidationResult(true);
}

export const validateEndpoints = (endpoints) => {
  if (!_.isArray(endpoints)) {
    const msg = 'Value must be an array of objects';
    return new ValidationResult(false, msg);
  }

  const endpointResults = endpoints.map((endpoint) => validateEndpoint(endpoint));
  const endpointFailure = endpointResults.find(epr => epr.success === false);

  if (endpointFailure) {
    return endpointFailure;
  }

  return new ValidationResult(true);
}

const publicConfigSchema = [
  { name: 'baseUrl',
    default: 'https://api.sharetribe.com' },
  { name: 'typeHandlers',
    default: [] },
  { name: 'endpoints',
    default: [] },
];

export const validateConfig = (config, configSchema) =>
  configSchema.reduce((memo, configDef) => {
    /* eslint-disable no-param-reassign */
    const noopValidator = v => new ValidationResult(true, v);
    const value = config[configDef.name] || configDef.default;
    const validator = configDef.validate || noopValidator;
    const validationResult = validator(value);

    if (!validationResult.success) {
      throw new Error(
        `Failed to validate config option { ${configDef.name}: ${value} }, reason: ${validationResult.reasonMessage}`);
    }

    // Assign
    memo[configDef.name] = value;

    return memo;
  }, {});

export class SharetribeSdk {

  /**
     Instantiates a new SharetribeSdk instance.
     The constructor assumes the config options have been
     already validated.
   */
  constructor(config) {
    this.config = config;

    const { baseUrl, typeHandlers, endpoints, adapter } = config;

    const { readers, writers } = typeHandlers.reduce((memo, handler) => {
      const r = {
        type: handler.type,
        reader: handler.reader,
      };
      const w = {
        type: handler.type,
        customType: handler.customType,
        writer: handler.writer,
      };

      memo.readers.push(r);
      memo.writers.push(w);

      return memo;
    }, { readers: [], writers: [] });

    const r = reader(readers);
    const w = writer(writers);

    const httpOpts = {
      headers: privateOpts.headers,
      baseURL: baseUrl,
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

    const axiosInstance = axios.create(httpOpts);
    const allEndpoints = [...defaultEndpoints, ...endpoints];

    // Assign all endpoint definitions to 'this'
    assignEndpoints(this, allEndpoints, axiosInstance);
  }
}

export const createInstance = config =>
  new SharetribeSdk(validateConfig(config, publicConfigSchema));
