import { fnPath, trimEndSlash, formData, objectQueryString, canonicalAssetPaths } from './utils';

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

    it('encodes Object with key length', () => {
      // See: https://github.com/lodash/lodash/issues/5870
      expect(formData({ length: 10 })).toEqual('length=10');
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

  describe('canonicalAssetPaths', () => {
    it('returns common path prefix and a list of sorted relative paths', () => {
      expect(
        canonicalAssetPaths([
          'content/pages/blog/page-b.json',
          'content/pages/blog/page-a.json',
          'content/pages/blog/page-c.json',
          'content/pages/blog/nested/page-d.json',
        ])
      ).toEqual({
        pathPrefix: 'content/pages/blog/',
        relativePaths: ['nested/page-d.json', 'page-a.json', 'page-b.json', 'page-c.json'],
      });
    });
    it('can handle absolute paths', () => {
      expect(
        canonicalAssetPaths([
          'content/pages/blog/page-b.json',
          '/content/pages/blog/page-a.json',
          '/content/pages/blog/page-c.json',
          'content/pages/blog/nested/page-d.json',
        ])
      ).toEqual({
        pathPrefix: 'content/pages/blog/',
        relativePaths: ['nested/page-d.json', 'page-a.json', 'page-b.json', 'page-c.json'],
      });
    });
    it('no common path prefix is found', () => {
      expect(
        canonicalAssetPaths(['content/pages/main.json', 'settings/admin.json', 'other/any.json'])
      ).toEqual({
        pathPrefix: '',
        relativePaths: ['content/pages/main.json', 'other/any.json', 'settings/admin.json'],
      });
    });
    it('returns empty path prefix assets at root level', () => {
      expect(canonicalAssetPaths(['page-b.json', 'page-a.json'])).toEqual({
        pathPrefix: '',
        relativePaths: ['page-a.json', 'page-b.json'],
      });
    });
    it('split a single asset path into prefix and asset', () => {
      expect(canonicalAssetPaths(['content/pages/main.json'])).toEqual({
        pathPrefix: 'content/pages/',
        relativePaths: ['main.json'],
      });
    });
    it('prefix is empty for single asset path at root level', () => {
      expect(canonicalAssetPaths(['main.json'])).toEqual({
        pathPrefix: '',
        relativePaths: ['main.json'],
      });
    });
    it('deduplicate asset paths', () => {
      expect(canonicalAssetPaths(['content/init.json', 'content/init.json'])).toEqual({
        pathPrefix: 'content/',
        relativePaths: ['init.json'],
      });
    });
    it('can handle an empty list', () => {
      expect(canonicalAssetPaths([])).toEqual({ pathPrefix: '', relativePaths: [] });
    });
  });
});
