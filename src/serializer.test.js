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
});

