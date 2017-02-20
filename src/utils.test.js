import { fnPath, trimEndSlash } from './utils';

describe('utils', () => {
  describe('pathToMethodName', () => {
    it('takes URL path, returns method name', () => {
      expect(fnPath('users')).toEqual(['users']);
      expect(fnPath('/users')).toEqual(['users']);
      expect(fnPath('users/')).toEqual(['users']);
      expect(fnPath('/users/')).toEqual(['users']);
      expect(fnPath('/users/create/')).toEqual(['users', 'create']);
    });
  });

  describe('trimEndSlash', () => {
    it('trims trailing slashes', () => {
      expect(trimEndSlash('http://www.api.com')).toEqual('http://www.api.com');
      expect(trimEndSlash('http://www.api.com/')).toEqual('http://www.api.com');
      expect(trimEndSlash('http://www.api.com//')).toEqual('http://www.api.com');
    });
  });
});
