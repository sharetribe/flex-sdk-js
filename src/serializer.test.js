import transit from 'transit-js';
import { reader, writer } from './serializer';
import { UUID, LatLng, Money } from './types';

describe('serializer', () => {
  it('reads and writes transit', () => {
    const testData = {
      a: 1,
      b: 2,
      c: [3, 4, 5],
      d: {
        e: true,
      },
    };

    const r = reader();
    const w = writer();

    expect(r.read(w.write(testData))).toEqual(testData);
  });

  it('writes map keys as symbols', () => {
    const testData = {
      a: 1,
      b: { c: { d: 2 } }, // handles nested objects recursively
      e: [{ f: 3 }, { g: 4 }], // handles nested objects in arrays
    };

    const expectedData = transit.map();
    expectedData.set(transit.keyword('a'), 1);

    const b = transit.map();
    const c = transit.map();

    c.set(transit.keyword('d'), 2);
    b.set(transit.keyword('c'), c);

    const f = transit.map();
    f.set(transit.keyword('f'), 3);
    const g = transit.map();
    g.set(transit.keyword('g'), 4);

    expectedData.set(transit.keyword('b'), b);
    expectedData.set(transit.keyword('e'), [f, g]);

    const w = writer();
    const transitReader = transit.reader();

    expect(transit.equals(transitReader.read(w.write(testData)), expectedData)).toEqual(true);
  });

  it('handles UUIDs', () => {
    const testData = {
      id: new UUID('69c3d77a-db3f-11e6-bf26-cec0c932ce01'),
    };

    const r = reader();
    const w = writer();

    expect(r.read(w.write(testData))).toEqual(testData);
  });

  it('handles LatLngs', () => {
    const testData = {
      location: new LatLng(12.34, 56.78),
    };

    const r = reader();
    const w = writer();

    expect(r.read(w.write(testData))).toEqual(testData);
  });

  it('handles Money', () => {
    const testData = {
      price: new Money(5000, 'EUR'),
    };

    const r = reader();
    const w = writer();

    expect(r.read(w.write(testData))).toEqual(testData);
  });

  it('allows you to add your own reader handlers for predefined types', () => {
    class MyCustomUuid {
      constructor(str) {
        this.myCustomerUuidRepresentation = str;
      }
    }

    const r = reader([
      {
        type: UUID,
        reader: v => new MyCustomUuid(v.uuid),
      },
    ]);

    const w = writer();

    const data = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    expect(r.read(w.write({ id: new UUID(data) })).id)
      .toEqual(new MyCustomUuid(data));
  });

  it('allows you to add your own writers handlers for predefined types', () => {
    class MyCustomUuid {
      constructor(str) {
        this.myCustomUuidRepresentation = str;
      }
    }

    const r = reader();

    const w = writer([
      {
        type: UUID,
        customType: MyCustomUuid,
        writer: v => new UUID(v.myCustomUuidRepresentation),
      },
    ]);

    const data = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    expect(r.read(w.write({ id: new MyCustomUuid(data) })).id)
      .toEqual(new UUID(data));
  });
});

