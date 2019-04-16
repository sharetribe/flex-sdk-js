/* eslint no-underscore-dangle: ["error", { "allow": ["_sdkType"] }] */

import transit from 'transit-js';
import _ from 'lodash';
import { UUID, LatLng, Money, BigDecimal, toClassInstance } from './types';

/**
   Composes two readers (default and custom) so that:

  ```
  class MyCustomUuid {
    constructor(uuid) {
      this.myUuid = uuid;
    }
  }

  const defaultReader = {
     type: UUID,
     reader: v => new UUID(v),
  };

  const customReader = {
     type: UUID,

     // type of reader function: UUID -> MyCustomUuid
     reader: v => new MyCustomUuid(v.uuid),
  }

  Composition creates a new reader:

  {
     type: UUID,
     reader: v => new MyCustomUuid(new UUID(v))
  }
  ```
 */
const composeReader = (defaultReader, customReader) => {
  const defaultReaderFn = defaultReader.reader;
  const customReaderFn = customReader ? customReader.reader : _.identity;

  return rep => customReaderFn(defaultReaderFn(rep));
};

/**
   Type map from Transit tags to type classes
 */
const typeMap = {
  u: UUID,
  geo: LatLng,
  mn: Money,
  f: BigDecimal,
};

/**
   List of default readers
 */
const defaultReaders = [
  {
    sdkType: UUID,
    reader: rep => new UUID(rep),
  },
  {
    sdkType: LatLng,
    reader: ([lat, lng]) => new LatLng(lat, lng),
  },
  {
    sdkType: Money,
    reader: ([amount, currency]) => new Money(amount, currency),
  },
  {
    sdkType: BigDecimal,
    reader: rep => new BigDecimal(rep),
  },
];

/**
   List of default writers
 */
const defaultWriters = [
  {
    sdkType: UUID,
    writer: v => v.uuid,
  },
  {
    sdkType: LatLng,
    writer: v => [v.lat, v.lng],
  },
  {
    sdkType: Money,
    writer: v => [v.amount, v.currency],
  },
  {
    sdkType: BigDecimal,
    writer: v => v.value,
  },
];

/**
   Take `customReaders` param and construct a list of read handlers
   from `customReaders`, `defaultReaders` and `typeMap`.
*/
const constructReadHandlers = customReaders =>
  _.fromPairs(
    _.map(typeMap, (typeClass, tag) => {
      const defaultReader = _.find(defaultReaders, r => r.sdkType === typeClass);
      const customReader = _.find(customReaders, r => r.sdkType === typeClass);

      return [tag, composeReader(defaultReader, customReader)];
    })
  );

const writeHandlers = _.flatten(
  _.map(typeMap, (typeClass, tag) => {
    const defaultWriter = _.find(defaultWriters, w => w.sdkType === typeClass);

    const handler = transit.makeWriteHandler({
      tag: () => tag,
      rep: defaultWriter.writer,
    });

    return [typeClass, handler];
  })
);

/**
   Builds JS objects from Transit maps
 */
const mapBuilder = {
  init: () => ({}),
  add: (ret, key, val) => {
    /* eslint-disable no-param-reassign */
    ret[key] = val;
    return ret;
  },
  finalize: _.identity,
};

export const reader = (customReaders = []) => {
  const handlers = constructReadHandlers(customReaders);

  return transit.reader('json', {
    handlers: {
      ...handlers,

      // Convert keywords to plain strings.
      // The conversion loses the information that the
      // string was originally a keyword. However, the API
      // can coerse strings to keywords, so it's ok to send strings
      // to the API when keywords is expected.
      ':': rep => rep,

      // Convert set to an array
      // The conversion loses the information that the
      // array was originally a set. However, the API
      // can coerse arrays to sets, so it's ok to send arrays
      // to the API when set is expected.
      set: rep => rep,

      // Convert list to an array
      list: rep => rep,
    },
    mapBuilder,
  });
};

const MapHandler = [
  Object,
  transit.makeWriteHandler({
    tag: () => 'map',
    rep: v =>
      _.reduce(
        v,
        (map, val, key) => {
          map.set(transit.keyword(key), val);
          return map;
        },
        transit.map()
      ),
  }),
];

export const writer = (customWriters = [], opts = {}) => {
  const { verbose } = opts;
  const transitType = verbose ? 'json-verbose' : 'json';

  return transit.writer(transitType, {
    handlers: transit.map([...writeHandlers, ...MapHandler]),

    // Use transform to transform custom types to sdk types before sdk
    // types are encoded by transit.
    transform: v => {
      if (v && v instanceof Object) {
        if (v._sdkType) {
          return toClassInstance(v);
        }

        const customWriter = _.find(
          customWriters,
          w => (w.appType && v instanceof w.appType) || (w.canHandle && w.canHandle(v))
        );

        if (customWriter) {
          return customWriter.writer(v);
        }
      }

      return v;
    },

    // This is only needed for the REPL
    // TODO This could be stripped out for production build
    handlerForForeign: (x, handlers) => {
      if (Array.isArray(x)) {
        return handlers.get('array');
      }
      if (typeof x === 'object') {
        return handlers.get('map');
      }

      return null;
    },
  });
};

export const createTransitConverters = (typeHandlers = [], opts) => {
  const { readers, writers } = typeHandlers.reduce(
    (memo, handler) => {
      const r = {
        sdkType:
          handler.sdkType ||
          // DEPRECATED Use handler.sdkType instead of handler.type
          handler.type,
        reader: handler.reader,
      };
      const w = {
        sdkType:
          handler.sdkType ||
          // DEPRECATED Use handler.sdkType instead of handler.type
          handler.type,
        appType:
          handler.appType ||
          // DEPRECATED Use handler.appType instead of handler.customType
          handler.customType,
        canHandle: handler.canHandle,
        writer: handler.writer,
      };

      memo.readers.push(r);
      memo.writers.push(w);

      return memo;
    },
    { readers: [], writers: [] }
  );

  return {
    reader: reader(readers),
    writer: writer(writers, opts),
  };
};
