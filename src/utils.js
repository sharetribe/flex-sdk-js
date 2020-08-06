import _ from 'lodash';

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

export const fnPath = path =>
  _.without(path.split('/'), '').map(part => part.replace(/_\w/g, m => m[1].toUpperCase()));

export const formData = params =>
  _.reduce(
    params,
    (pairs, v, k) => {
      pairs.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      return pairs;
    },
    []
  ).join('&');

/**
   Serialize a single attribute in an object query parameter.
*/
const serializeAttribute = attribute => {
  if (_.isPlainObject(attribute)) {
    throw new Error('Nested object in query parameter.');
  } else if (Array.isArray(attribute)) {
    return attribute.join(',');
  } else {
    return attribute;
  }
};

/**
   Serializes an object into a Flex API query parameter value format. Null and
   undefined object attributes are dropped.

   Example:

   {
     a: 'foo',
     b: '150',
     c: null,
     d: ['foo', 'bar'],
   }

   =>

   'a:foo;b:150;d:foo,bar'
*/
export const objectQueryString = obj => {
  if (!_.isPlainObject(obj)) {
    throw new Error('Parameter not an object.');
  }

  return Object.entries(obj)
    .filter(([, v]) => v !== null && v !== undefined)
    .map(([k, v]) => `${k}:${serializeAttribute(v)}`)
    .join(';');
};
