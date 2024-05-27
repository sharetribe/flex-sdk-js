import transit from 'transit-js';
import { reader, writer } from './serializer';
import { UUID, LatLng, Money, BigDecimal } from './types';

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

  it('reads and writes Object with key length', () => {
    // See: https://github.com/lodash/lodash/issues/5870
    const testData = {
      a: 1,
      b: 2,
      c: [3, 4, 5],
      d: {
        e: true,
      },
      length: 10,
    };

    const r = reader();
    const w = writer();

    expect(r.read(w.write(testData))).toEqual(testData);
  });

  it('reads and writes transit JSON verbose', () => {
    const testData = {
      a: 1,
      b: 2,
      c: [3, 4, 5],
      d: {
        e: true,
      },
    };

    const r = reader();
    const w = writer([], { verbose: true });

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

  it('decodes a set to an array', () => {
    const testData = transit.set(['b', 'a', 'b', 'b']);

    const decoded = reader().read(transit.writer().write(testData));

    expect(decoded).toHaveLength(2);
    expect(decoded).toEqual(expect.arrayContaining(['a', 'b']));
  });

  it('decodes a list to an array', () => {
    const testData = transit.list(['a', 'b']);

    const decoded = reader().read(transit.writer().write(testData));

    expect(decoded).toEqual(expect.arrayContaining(['a', 'b']));
  });

  it('handles UUIDs', () => {
    const testData = {
      id: new UUID('69c3d77a-db3f-11e6-bf26-cec0c932ce01'),
    };

    const roundTrip = reader().read(writer().write(testData));
    expect(roundTrip).toEqual(testData);
    expect(roundTrip.id).toBeInstanceOf(UUID);
  });

  it('handles LatLngs', () => {
    const testData = {
      location: new LatLng(12.34, 56.78),
    };

    const roundTrip = reader().read(writer().write(testData));
    expect(roundTrip).toEqual(testData);
    expect(roundTrip.location).toBeInstanceOf(LatLng);
  });

  it('handles Money', () => {
    const testData = {
      price: new Money(5000, 'EUR'),
    };

    const roundTrip = reader().read(writer().write(testData));
    expect(roundTrip).toEqual(testData);
    expect(roundTrip.price).toBeInstanceOf(Money);
  });

  it('handles BigDecimals', () => {
    const testData = {
      percentage: new BigDecimal('1.00000000000000000000000000001'),
    };

    const roundTrip = reader().read(writer().write(testData));
    expect(roundTrip).toEqual(testData);

    expect(roundTrip.percentage).toBeInstanceOf(BigDecimal);
  });

  it('handles types that are plain objects', () => {
    const uuid = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    const roundTrip = reader().read(writer().write({ uuid, _sdkType: 'UUID' }));
    expect(roundTrip).toEqual(new UUID(uuid));
    expect(roundTrip).toBeInstanceOf(UUID);
  });

  it('allows you to add your own reader handlers for predefined types', () => {
    class MyCustomUuid {
      constructor(str) {
        this.myCustomerUuidRepresentation = str;
      }
    }

    const r = reader([
      {
        sdkType: UUID,
        reader: v => new MyCustomUuid(v.uuid),
      },
    ]);

    const w = writer();

    const data = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    expect(r.read(w.write({ id: new UUID(data) })).id).toEqual(new MyCustomUuid(data));
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
        sdkType: UUID,
        appType: MyCustomUuid,
        writer: v => new UUID(v.myCustomUuidRepresentation),
      },
    ]);

    const data = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    expect(r.read(w.write({ id: new MyCustomUuid(data) })).id).toEqual(new UUID(data));
  });

  it('allows you to add your own writer handlers for predefined types using plain objects', () => {
    const myUuid = uuid => ({
      myType: 'My plain object UUID type',
      myUuidValue: uuid,
    });

    const r = reader();

    const w = writer([
      {
        sdkType: UUID,
        canHandle: v => v.myType === 'My plain object UUID type',
        writer: v => new UUID(v.myUuidValue),
      },
    ]);

    const data = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    expect(r.read(w.write({ id: myUuid(data) })).id).toEqual(new UUID(data));

    // Test that adding a custom writer doesn't break the default writer
    expect(r.read(w.write({ id: new UUID(data) })).id).toEqual(new UUID(data));
  });

  it('allows you to add your own writer handlers for any type of data', () => {
    const myArrayMoney = ['_my_money', 100, 'USD'];
    const myFnUuid = uuid => {
      const fn = () => uuid;
      fn.isMyFnUuid = true;
      return fn;
    };

    const r = reader();

    const w = writer([
      {
        appType: UUID,
        canHandle: v => v.isMyFnUuid,
        writer: v => new UUID(v()),
      },
      {
        appType: Money,
        canHandle: v => v[0] === '_my_money',
        writer: v => new Money(v[1], v[2]),
      },
    ]);

    const data = '69c3d77a-db3f-11e6-bf26-cec0c932ce01';

    expect(r.read(w.write({ id: myFnUuid(data) })).id).toEqual(new UUID(data));
    expect(r.read(w.write({ money: myArrayMoney })).money).toEqual(new Money(100, 'USD'));
  });
});
