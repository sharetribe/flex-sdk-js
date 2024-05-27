/* eslint no-underscore-dangle: ["error", { "allow": ["_sdkType"] }] */

import transit from 'transit-js';
import _ from 'lodash';
import { UUID, LatLng, Money, BigDecimal, toType } from './types';
import { entries } from './utils';

/**
   Composes two readers (sdk type and app type) so that:

  ```
  class MyCustomUuid {
    constructor(uuid) {
      this.myUuid = uuid;
    }
  }

  const sdkTypeReader = {
     sdkType: UUID,
     reader: v => new UUID(v),
  };

  const appTypeReader = {
     sdkType: UUID,

     // type of reader function: UUID -> MyCustomUuid
     reader: v => new MyCustomUuid(v.uuid),
  }

  Composition creates a new reader:

  {
     sdkType: UUID,
     reader: v => new MyCustomUuid(new UUID(v))
  }
  ```
 */
const composeReader = (sdkTypeReader, appTypeReader) => {
  const sdkTypeReaderFn = sdkTypeReader.reader;
  const appTypeReaderFn = appTypeReader ? appTypeReader.reader : _.identity;

  return rep => appTypeReaderFn(sdkTypeReaderFn(rep));
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
   List of SDK type readers
 */
const sdkTypeReaders = [
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
   List of SDK type writers
 */
const sdkTypeWriters = [
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
   Take `appTypeReaders` param and construct a list of read handlers
   from `appTypeReaders`, `sdkTypeReaders` and `typeMap`.
*/
const constructReadHandlers = appTypeReaders =>
  _.fromPairs(
    _.map(typeMap, (typeClass, tag) => {
      const sdkTypeReader = _.find(sdkTypeReaders, r => r.sdkType === typeClass);
      const appTypeReader = _.find(appTypeReaders, r => r.sdkType === typeClass);

      return [tag, composeReader(sdkTypeReader, appTypeReader)];
    })
  );

const writeHandlers = _.flatten(
  _.map(typeMap, (typeClass, tag) => {
    const sdkTypeWriter = _.find(sdkTypeWriters, w => w.sdkType === typeClass);

    const handler = transit.makeWriteHandler({
      tag: () => tag,
      rep: sdkTypeWriter.writer,
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

export const reader = (appTypeReaders = []) => {
  const handlers = constructReadHandlers(appTypeReaders);

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
      entries(v).reduce((map, entry) => {
        const [key, val] = entry;
        map.set(transit.keyword(key), val);
        return map;
      }, transit.map()),
  }),
];

export const writer = (appTypeWriters = [], opts = {}) => {
  const { verbose } = opts;
  const transitType = verbose ? 'json-verbose' : 'json';

  return transit.writer(transitType, {
    handlers: transit.map([...writeHandlers, ...MapHandler]),

    // Use transform to transform app types to sdk types before sdk
    // types are encoded by transit.
    transform: v => {
      // Check _.isObject for two reasons:
      // 1. _.isObject makes sure the value is not null, so the null check can be omitted in the canHandle implementation
      // 2. Perf. No need to run canHandle for primitives
      if (_.isObject(v)) {
        if (v._sdkType) {
          return toType(v);
        }

        const appTypeWriter = _.find(
          appTypeWriters,
          w =>
            // Check if the value is an application type instance
            (w.appType && v instanceof w.appType) ||
            // ...or if the canHandle returns true.
            (w.canHandle && w.canHandle(v))
        );

        if (appTypeWriter) {
          return appTypeWriter.writer(v);
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

export const read = (str, opts = {}) => {
  const { typeHandlers = [] } = opts;
  const converters = createTransitConverters(typeHandlers);
  return converters.reader.read(str);
};

export const write = (data, opts = {}) => {
  const { typeHandlers = [], verbose = false } = opts;
  const converters = createTransitConverters(typeHandlers, { verbose });
  return converters.writer.write(data);
};
