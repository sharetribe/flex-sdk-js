import { fnPath, assignDeep, nestedKeyValObj } from './utils';

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

  describe('nestedKeyValObj', () => {
    it('takes a nested key path and a value and returns nested object', () => {
      const keyPath = ['sharetribe', 'user', 'id'];
      const value = '123abc';
      const expected = {
        sharetribe: {
          user: {
            id: '123abc',
          },
        },
      };

      expect(nestedKeyValObj(keyPath, value)).toEqual(expected);
    });

    it('returns val if path is empty', () => {
      expect(nestedKeyValObj([], 1)).toEqual(1);
    });
  });

  describe('assignDeep', () => {
    it('assigns value to object to given path', () => {
      expect(assignDeep({}, [], 1)).toEqual({});
      expect(assignDeep({}, ['sharetribe'], 1)).toEqual({ sharetribe: 1 });
      expect(assignDeep({ sharetribe: { listings: 1 } }, ['sharetribe', 'users'], 1)).toEqual({ sharetribe: { users: 1, listings: 1 } });
      expect(assignDeep({ sharetribe: { listings: 1 } }, ['sharetribe', 'users', 'create'], 1)).toEqual({ sharetribe: { users: { create: 1 }, listings: 1 } });
    });

    it('mutates the destination object', () => {
      const a = { a: 1 };
      const abc = assignDeep(a, ['b', 'c'], 1);

      expect(a).toEqual({ a: 1, b: { c: 1 } });
      expect(abc).toEqual({ a: 1, b: { c: 1 } });
      expect(a).toBe(abc);
    });
  });
});
