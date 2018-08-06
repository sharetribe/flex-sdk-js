import transit from 'transit-js';
import _ from 'lodash';
import { UUID, LatLng, Money, BigDecimal } from './types';

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
   Composes two writers (default and custom) so that:

  ```
  class MyCustomUuid {
    constructor(uuid) {
      this.myUuid = uuid;
    }
  }

  const defaultWriter = {
     type: UUID,
     writer: v => new UUID(v),
  };

  const customWriter = {
     type: UUID,
     customType: MyCustomUuid,

     // type of writer fn: MyCustomUuid -> UUID
     writer: v => new UUID(v.myUuid),
  }

  Composition creates a new reader:

  {
     type: UUID,
     reader: v => new MyCustomUuid(new UUID(v))
  }
  ```
 */
const composeWriter = (defaultWriter, customWriter) => {
  const defaultWriterFn = defaultWriter.writer;
  const customWriterFn = customWriter ? customWriter.writer : _.identity;

  return rep => defaultWriterFn(customWriterFn(rep));
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
    type: UUID,
    reader: rep => new UUID(rep),
  },
  {
    type: LatLng,
    reader: ([lat, lng]) => new LatLng(lat, lng),
  },
  {
    type: Money,
    reader: ([amount, currency]) => new Money(amount, currency),
  },
  {
    type: BigDecimal,
    reader: rep => new BigDecimal(rep),
  },
];

/**
   List of default writers
 */
const defaultWriters = [
  {
    type: UUID,
    writer: v => v.uuid,
  },
  {
    type: LatLng,
    writer: v => [v.lat, v.lng],
  },
  {
    type: Money,
    writer: v => [v.amount, v.currency],
  },
  {
    type: BigDecimal,
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
      const defaultReader = _.find(defaultReaders, r => r.type === typeClass);
      const customReader = _.find(customReaders, r => r.type === typeClass);

      return [tag, composeReader(defaultReader, customReader)];
    })
  );

/**
   Take `customWriters` param and construct a list of write handlers
   from `customWriters`, `defaultWriters` and `typeMap`.
*/
const constructWriteHandlers = customWriters =>
  _.flatten(
    _.map(typeMap, (typeClass, tag) => {
      const defaultWriter = _.find(defaultWriters, w => w.type === typeClass);
      const customWriter = _.find(customWriters, w => w.type === typeClass);
      const composedWriter = composeWriter(defaultWriter, customWriter);
      const customTypeClass = customWriter ? customWriter.customType : defaultWriter.type;

      const handler = transit.makeWriteHandler({
        tag: () => tag,
        rep: composedWriter,
      });

      return [customTypeClass || typeClass, handler];
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
  const ownHandlers = constructWriteHandlers(customWriters);
  const { verbose } = opts;
  const transitType = verbose ? 'json-verbose' : 'json';

  return transit.writer(transitType, {
    handlers: transit.map([...ownHandlers, ...MapHandler]),

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
    },
    { readers: [], writers: [] }
  );

  return {
    reader: reader(readers),
    writer: writer(writers, opts),
  };
};
