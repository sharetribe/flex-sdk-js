import { reader, writer } from './serializer';

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
});

