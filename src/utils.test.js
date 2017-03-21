import { fnPath, trimEndSlash, formData } from './utils';

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
});
