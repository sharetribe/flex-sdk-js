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

export const fnPath = path => _.without(path.split('/'), '');

export const formData = params => _.reduce(params, (pairs, v, k) => {
  pairs.push(`${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
  return pairs;
}, []).join('&');
