import _ from 'lodash';

/**
 * Returns a nested key/value object
 * @param {string[]} keyPath - Path to the value
 * @param {*} val - Value
 * @example
 * // returns { a: { b: { c: 1 } } }
 * nestedKeyValObj(['a', 'b', 'c'], 1)
 */
export const nestedKeyValObj = (keyPath, val) => {
  const [head, ...tail] = keyPath;

  if (head) {
    return { [head]: nestedKeyValObj(tail, val) };
  }

  return val;
};

/**
 * Assigns new value to the given deep path in the object.
 * Note: This function mutates the given object.
 * @param {Object} obj - Object to modify
 * @param {string[]} path - Path to the value
 * @param {*} val - Value
 * @example
 * // returns { a: { b: 1, c: 2} }
 * assignDeep({ a: { b: 1 }, ['a', 'c'], 2 })
 */
export const assignDeep = (obj, path, val) =>
  _.defaultsDeep(obj, nestedKeyValObj(path, val));

/**
   Take URL and remove the trailing slashes.

   Example:

   ```
   trimEndSlash("http://www.api.com") => "http://www.api.com"
   trimEndSlash("http://www.api.com/") => "http://www.api.com"
   trimEndSlash("http://www.api.com//") => "http://www.api.com"
   ```
 */
export const trimEndSlash = url => _.trimEnd(url, '/');

export const fnPath = path => _.without(path.split('/'), '');
