import _ from 'lodash';
import { UUID, LatLng, LatLngBounds } from './types';

/**
 * Takes a value for query string and returns it in encoded form.
 *
 * Uses `encodeURIComponent` with few exceptions:
 *
 * - Don't encode comma (,)
 *
 * Inspired by the `encode` function in Axios:
 * https://github.com/mzabriskie/axios/blob/b8f6f5049cf3da8126a184b6b270316402b5b374/lib/helpers/buildURL.js#L5
 */
const encode = value => encodeURIComponent(value).replace(/%2C/gi, ',');

const UNKNOWN_TYPE = 'unknown-type';

/**
 * Serialize a single value. May be called recursively in case of array value.
 */
const serializeValue = value => {
  let v;

  if (value instanceof UUID) {
    v = value.uuid;
  } else if (value instanceof LatLng) {
    v = `${value.lat},${value.lng}`;
  } else if (value instanceof LatLngBounds) {
    v = `${value.ne.lat},${value.ne.lng},${value.sw.lat},${value.sw.lng}`;
  } else if (Array.isArray(value)) {
    v = value.map(serializeValue);
  } else if (value instanceof Date) {
    v = value.toISOString();
  } else if (value == null) {
    v = value;
  } else if (typeof value !== 'object') {
    v = value;
  } else {
    throw new Error(UNKNOWN_TYPE);
  }

  return v;
};

/**
 * Take `key` and `value` and return a key-value tuple where
 * key and value are stringified.
 *
 * TODO Consider moving this function closer to the type definitions,
 * maybe in types.js file(?).
 */
const serialize = (key, value) => {
  let v;

  try {
    v = serializeValue(value);
  } catch (e) {
    if (e && e.message === UNKNOWN_TYPE) {
      throw new Error(`Don't know how to serialize query parameter '${key}': ${value}`);
    } else {
      throw e;
    }
  }

  // Ignore null and undefined values
  if (v == null) {
    return null;
  }

  return [key, encode(v)];
};

const paramsSerializer = params =>
  _.compact(
    _.map(params, (value, key) => {
      const serialized = serialize(key, value);

      if (serialized) {
        return serialized.join('=');
      }

      return null;
    })
  ).join('&');

export default paramsSerializer;
