import { reader, writer } from './serializer';
import { UUID } from './types';

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

  it('handles UUIDs', () => {
    const testData = {
      id: new UUID('69c3d77a-db3f-11e6-bf26-cec0c932ce01'),
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

