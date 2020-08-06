import { fnPath, trimEndSlash, formData, objectQueryString } from './utils';

describe('utils', () => {
  describe('pathToMethodName', () => {
    it('takes URL path, returns method name', () => {
      expect(fnPath('users')).toEqual(['users']);
      expect(fnPath('/users')).toEqual(['users']);
      expect(fnPath('users/')).toEqual(['users']);
      expect(fnPath('/users/')).toEqual(['users']);
      expect(fnPath('/users/create/')).toEqual(['users', 'create']);
    });

    it('camelizes it', () => {
      expect(fnPath('/listings/upload_image')).toEqual(['listings', 'uploadImage']);
      expect(fnPath('/listings/upload_new_awesome_image')).toEqual([
        'listings',
        'uploadNewAwesomeImage',
      ]);
    });
  });

  describe('trimEndSlash', () => {
    it('trims trailing slashes', () => {
      expect(trimEndSlash('http://www.api.com')).toEqual('http://www.api.com');
      expect(trimEndSlash('http://www.api.com/')).toEqual('http://www.api.com');
      expect(trimEndSlash('http://www.api.com//')).toEqual('http://www.api.com');
    });
  });

  describe('formData', () => {
    it('encodes params to formData', () => {
      expect(
        formData({ username: 'joe.dunphy@example.com', password: '}4$3.872487=3&&]/6?.' })
      ).toEqual('username=joe.dunphy%40example.com&password=%7D4%243.872487%3D3%26%26%5D%2F6%3F.');
    });
  });

  describe('objectQueryString', () => {
    it('constructs a valid URL string', () => {
      expect(
        objectQueryString({
          w: 500,
          h: 2000,
          fit: 'scale',
          newparam: 'newvalue',
          a: true,
          b: false,
        })
      ).toEqual('w:500;h:2000;fit:scale;newparam:newvalue;a:true;b:false');
    });

    it('drops null and undefined values', () => {
      expect(
        objectQueryString({
          w: 500,
          h: undefined,
          fit: 'scale',
          newparam: 'newvalue',
          a: null,
        })
      ).toEqual('w:500;fit:scale;newparam:newvalue');
    });

    it('serializes array values', () => {
      expect(
        objectQueryString({
          has_all: ['brakes', 'steering', true, 10],
          foo: 'bar',
          newparam: 'newvalue',
        })
      ).toEqual('has_all:brakes,steering,true,10;foo:bar;newparam:newvalue');
    });

    it('only takes an object', () => {
      expect(() => objectQueryString('foo')).toThrowError('Parameter not an object.');
      expect(() => objectQueryString(null)).toThrowError('Parameter not an object.');
    });

    it('does not allow nested objects', () => {
      expect(() => objectQueryString({ foo: { nested: 'value' } })).toThrowError(
        'Nested object in query parameter.'
      );
    });
  });
});
