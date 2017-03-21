import ps from './params_serializer';
import { UUID, LatLng, LatLngBounds } from './types';

describe('params serializer', () => {
  it('serializes params Object', () => {
    expect(ps({ a: 1 })).toEqual('a=1');
    expect(ps({ a: 1, b: 'foo' })).toEqual('a=1&b=foo');
  });

  it('serializes UUID', () => {
    expect(ps({ uuid: new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01') })).toEqual(
      'uuid=0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'
    );
  });

  it('serializes LatLng', () => {
    expect(ps({ location: new LatLng(12.34, -56.70001) })).toEqual('location=12.34,-56.70001');
  });

  it('serializes LatLngBounds', () => {
    expect(
      ps({ bounds: new LatLngBounds(new LatLng(12.34, -56.70001), new LatLng(-45.67, 12)) })
    ).toEqual('bounds=12.34,-56.70001,-45.67,12');
  });

  it('serializes array', () => {
    expect(ps({ alphabets: ['a', 'b', 'c'] })).toEqual('alphabets=a,b,c');
  });

  it('throws for Objects that it can not encode', () => {
    class Point {
      construct(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    expect(() => ps({ point: new Point(12, -5) })).toThrowError(
      "Don't know how to serialize query parameter 'point': [object Object]"
    );

    expect(() => ps({ foo: { a: 1, b: 'bar' } })).toThrowError(
      "Don't know how to serialize query parameter 'foo': [object Object]"
    );
  });
});
