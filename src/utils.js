import _ from 'lodash';

/**
 Null-safe version of Object.entries
 */
export const entries = obj => {
  if (obj == null) {
    return [];
  }
  return Object.entries(obj);
};

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
  entries(params)
    .reduce((pairs, entry) => {
      const [k, v] = entry;
      pairs.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      return pairs;
    }, [])
    .join('&');

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
   Serializes an object into a Sharetribe API query parameter value format. Null and
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

/**
   Compute longest common path prefix for an array of path parts separated by "/".
   The input array must be sorted lexically.
*/
const longestPathPrefix = (sortedPathParts, result = '') => {
  if (sortedPathParts.length === 0) {
    return '';
  }
  if (sortedPathParts.length === 1) {
    const comps = sortedPathParts[0];
    if (comps.length === 1) {
      return '';
    }
    const path = comps.slice(0, comps.length - 1).join('/');
    return `${path}/`;
  }

  const { length: l, 0: first, [l - 1]: last } = sortedPathParts;
  const [firstCurrent, ...firstRest] = first;
  const [lastCurrent, ...lastRest] = last;
  if (firstRest.length > 0 && lastRest.length > 0 && firstCurrent === lastCurrent) {
    return longestPathPrefix([firstRest, lastRest], `${result}${firstCurrent}/`);
  }

  return result;
};

/**
   Provided a list of paths, e.g. [content/page.json, content/init.json],
   return a canonical structure for those paths, which consists of a
   common prefix and a list of sorted relative paths, e.g.:
     {
       pathPrefix: 'content/',
       relativePaths: ['init.json', 'translations.json']
     }
*/
export const canonicalAssetPaths = paths => {
  const sortedPaths = [...new Set(paths)].map(p => (p[0] === '/' ? p.slice(1) : p)).sort();
  const sortedPathParts = [...sortedPaths].map(p => p.split('/'));
  const pathPrefix = longestPathPrefix(sortedPathParts);
  const prefixLength = pathPrefix.length;
  const relativePaths = sortedPaths.map(p => p.substring(prefixLength));

  return { pathPrefix, relativePaths };
};

const consoleAvailable = typeof console !== 'undefined';

export const deprecated = (msg, disable) => {
  /* eslint-disable no-console */
  /* eslint-disable no-undef */
  if (consoleAvailable && console.warn && !disable) {
    console.warn(msg);
  }
};
