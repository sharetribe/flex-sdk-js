import transit from 'transit-js';
import { UUID } from './types';

const ident = x => x;

export const reader = () => transit.reader('json', {
  handlers: {
    u: rep => new UUID(rep),

    // Convert keywords to plain strings
    ':': rep => rep,
  },
  arrayBuilder: {
    init: () => [],
    add: (ret, val) => {
      ret.push(val);
      return ret;
    },
    finalize: ident,
  },
  mapBuilder: {
    init: () => ({}),
    add: (ret, key, val) => {
      /* eslint-disable no-param-reassign */
      ret[key] = val;
      return ret;
    },
    finalize: ident,
  },
});

export const writer = () => transit.writer('json');
