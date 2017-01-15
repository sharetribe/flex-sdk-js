import transit from 'transit-js';
import { UUID } from './types';

const ident = x => x;

export const reader = () => transit.reader('json', {
  handlers: {
    u: rep => new UUID(rep),

    // Convert keywords to plain strings
    //
    // TODO This is problematic. When we convert keywords to strings,
    // we lose the information that the string was originally a
    // keyword. Thus, `read(write(data)) !== data`. Is this a bad thing,
    // I don't know yet? Can we make the server to threat Strings as if
    // they were keywords, that's an open question.
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

const uuidHandler = transit.makeWriteHandler({
  tag: () => 'u',
  rep: v => v.uuid,
});

export const writer = () => transit.writer('json', {
  handlers: transit.map([
    UUID, uuidHandler,
  ]),
});
