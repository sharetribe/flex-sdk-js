import { UUID } from './types';
import fake from './fake';
import { SharetribeSdk, validateConfig, ValidationResult } from './sdk';

describe('new SharetribeSdk', () => {
  describe('validateConfig', () => {
    it('removes unknown config options', () => {
      expect(validateConfig({ a: 1, b: 2 }, [{ name: 'a' }]))
        .toEqual({ a: 1 });
    });

    it('adds default value for missing config options', () => {
      expect(validateConfig({}, [{ name: 'a', default: 2 }]))
        .toEqual({ a: 2 });
    });

    it('throws error for unvalid values', () => {
      const isEven = v => v % 2 === 0;
      const validateIsEven = (v) => {
        if (isEven(v)) {
          return new ValidationResult(true);
        }

        const msg = 'Value must be even, where v % 2 === 0';
        return new ValidationResult(false, msg);
      };

      expect(() => validateConfig({ a: 3 }, [{ name: 'a', validate: validateIsEven }]))
        .toThrowError(
          'Failed to validate config option { a: 3 }, reason: Value must be even, where v % 2 === 0');
    });
  });

  it('creates a new instance with given options', () => {
    const inst = new SharetribeSdk({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    });

    expect(inst.opts).toEqual(expect.objectContaining({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }));
  });

  it('creates new endpoints', () => {
    const inst = new SharetribeSdk({}, [
      {
        path: 'posts/showAll',
      },
    ]);

    expect(inst.posts.showAll).toBeInstanceOf(Function);
  });

  it('calls user endpoint with query params', () => {
    const inst = new SharetribeSdk({}, [], fake.user.show);

    return inst.user.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        email: 'user@sharetribe.com',
        description: 'A team member',
      }));
    });
  });

  it('calls marketplace endpoint with query params', () => {
    const inst = new SharetribeSdk({}, [], fake.marketplace.show);

    return inst.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));
    });
  });

  it('allows user to pass custom read/write handlers', () => {
    class MyUuid {
      constructor(uuid) {
        this.myUuid = uuid;
      }
    }

    const handlers = [{
      type: UUID,
      customType: MyUuid,
      reader: v => new MyUuid(v.uuid), // reader fn type: UUID -> MyUuid
      writer: v => new UUID(v.myUuid), // writer fn type: MyUuid -> UUID
    }];

    const inst = new SharetribeSdk({}, [], fake.marketplace.show, handlers);

    return inst.marketplace.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new MyUuid('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));
    });
  });
});
