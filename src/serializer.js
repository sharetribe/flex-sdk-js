import transit from 'transit-js';
import _ from 'lodash';
import { UUID } from './types';

const ident = x => x;

/**
   Composes two readers (default and custom) so that:

  ```
  const defaultReader = {
     type: UUID,
     reader: (rep) => new UUID(rep),
  };

  const customReader = {
     type: UUID,
     reader: (rep) => new MyCustomUuid(rep.uuid), // rep instanceof UUID === true
  }

  Composition creates a new reader:

  {
     type: UUID,
     reader: (rep) => new MyCustomUuid(new UUID(rep))
  }
  ```
 */

const composeReader = (defaultReader, customReader) => {
  const defaultReaderFn = defaultReader.reader;
  const customReaderFn = customReader ? customReader.reader : _.identity;

  return rep => customReaderFn(defaultReaderFn(rep));
};

const composeWriter = (defaultWriter, customWriter) => {
  const defaultWriterFn = defaultWriter.writer;
  const customWriterFn = customWriter ? customWriter.writer : _.identity;

  return rep => defaultWriterFn(customWriterFn(rep));
};

const typeMap = {
  u: UUID,
};

const defaultReaders = [{
  type: UUID,
  reader: rep => new UUID(rep),
}];

const defaultWriters = [{
  type: UUID,
  writer: v => v.uuid,
}];

export const reader = (customReaders = []) => {
  const handlers = _.fromPairs(_.map(typeMap, (typeClass, tag) => {
    const defaultReader = _.find(defaultReaders, r => r.type === typeClass);
    const customReader = _.find(customReaders, r => r.type === typeClass);

    return [tag, composeReader(defaultReader, customReader)];
  }));

  return transit.reader('json', {
    handlers: {
      ...handlers,

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
};

export const writer = (customWriters = []) => {
  const handlers = _.flatten(_.map(typeMap, (typeClass, tag) => {
    const defaultWriter = _.find(defaultWriters, w => w.type === typeClass);
    const customWriter = _.find(customWriters, w => w.type === typeClass);
    const composedWriter = composeWriter(defaultWriter, customWriter);
    const customTypeClass = customWriter ? customWriter.customType : defaultWriter.type;

    const handler = transit.makeWriteHandler({
      tag: () => tag,
      rep: composedWriter,
    });

    return [customTypeClass || typeClass, handler];
  }));

  return transit.writer('json', {
    handlers: transit.map(handlers),
  });
};
