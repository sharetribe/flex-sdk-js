import { methodPath } from './utils';

describe('utils', () => {
  describe('pathToMethodName', () => {
    it('takes URL path, returns method name', () => {
      expect(methodPath('users')).toEqual(['users']);
      expect(methodPath('/users')).toEqual(['users']);
      expect(methodPath('users/')).toEqual(['users']);
      expect(methodPath('/users/')).toEqual(['users']);
      expect(methodPath('/users/create/')).toEqual(['users', 'create']);
    });
  });
});
