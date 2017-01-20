import _ from 'lodash';
import { UUID } from './types';
import fake from './fake';
import { SharetribeSdk, validateConfig, ValidationResult, validateBaseUrl, validateEndpoints, validateTypeHandlers } from './sdk';

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

  describe('validation functions', () => {
    const success = new ValidationResult(true);

    describe('validateBaseUrl', () => {
      const expectedMsg = 'Value must be a string containing full URL, including the protocol. Example: \'http://api.sharetribe.com\'';
      const failure = new ValidationResult(false, expectedMsg);

      it('returns success for valid base url', () => {
        expect(validateBaseUrl('https://api.sharetribe.com')).toEqual(success);
      });

      it('returns failure result for empty url', () => {
        expect(validateBaseUrl('')).toEqual(failure);
      });

      it('returns failure for unsupported protocols', () => {
        expect(validateBaseUrl('unsupported://localhost.com')).toEqual(failure);
      });

      it('returns failure for non-string values', () => {
        expect(validateBaseUrl(true)).toEqual(failure);
        expect(validateBaseUrl(123)).toEqual(failure);
      });
    });

    describe('validateEndpoints', () => {
      const typeMsg = 'Value must be an array of objects';
      const typeFailure = new ValidationResult(false, typeMsg);

      it('returns failure for non-array values', () => {
        expect(validateEndpoints(true)).toEqual(typeFailure);
        expect(validateEndpoints(1)).toEqual(typeFailure);
        expect(validateEndpoints({})).toEqual(typeFailure);
      });

      it('returns success for empty array', () => {
        expect(validateEndpoints([])).toEqual(success);
      });

      it('returns a failure if any endpoint contains unknown keys', () => {
        const unknownKeyMsg = 'Unknown key "a" for endpoint {"a":"b"}';
        const unknownKeyFailure = new ValidationResult(false, unknownKeyMsg);
        expect(validateEndpoints([{ a: 'b' }])).toEqual(unknownKeyFailure);
      });

      it('returns a failure if a key is missing', () => {
        const missingKeyMsg = 'Missing required key "path" for endpoint {}';
        const missingKeyFailure = new ValidationResult(false, missingKeyMsg);
        expect(validateEndpoints([{}])).toEqual(missingKeyFailure);
      });

      it('returns a failure for invalid path', () => {
        const pathMsg = 'Endpoint path must be a non-empty string';
        const pathFailure = new ValidationResult(false, pathMsg);

        expect(validateEndpoints([{ path: '' }])).toEqual(pathFailure);
      });
    });

    describe('validateTypeHandlers', () => {
      const typeMsg = 'Value must be an array of objects';
      const typeFailure = new ValidationResult(false, typeMsg);

      class MyCustomType { }

      const defaultHandler = {
        type: UUID,
        customType: MyCustomType,
        reader: v => v,
        writer: v => v,
      };

      it('returns failure for non-array values', () => {
        expect(validateTypeHandlers(true)).toEqual(typeFailure);
        expect(validateTypeHandlers(1)).toEqual(typeFailure);
        expect(validateTypeHandlers({})).toEqual(typeFailure);
      });

      it('returns success for empty array', () => {
        expect(validateTypeHandlers([])).toEqual(success);
      });

      it('returns a failure if any type handler contains unknown keys', () => {
        const unknownKeyMsg = 'Unknown key "a" for type handler {"type":"[Function]","customType":"[Function]","reader":"[Function]","writer":"[Function]","a":"b"}';
        const unknownKeyFailure = new ValidationResult(false, unknownKeyMsg);
        expect(validateTypeHandlers([{ ...defaultHandler, a: 'b' }])).toEqual(unknownKeyFailure);
      });

      it('returns a failure if a key is missing', () => {
        const missingKeyMsg = 'Missing required key "type" for type handler {"customType":"[Function]","reader":"[Function]","writer":"[Function]"}';
        const missingKeyFailure = new ValidationResult(false, missingKeyMsg);
        expect(validateTypeHandlers([_.omit(defaultHandler, ['type'])])).toEqual(missingKeyFailure);
      });

      it('returns a failure for invalid type', () => {
        const predefinedTypeMsg = 'Type must be one of predefined types: [UUID]';
        const predefinedTypeFailure = new ValidationResult(false, predefinedTypeMsg);

        class Test {}

        expect(validateTypeHandlers([{ ...defaultHandler, type: Test }]))
          .toEqual(predefinedTypeFailure);
      });

      it('returns a success for valid type', () => {
        expect(validateTypeHandlers([{ ...defaultHandler, type: UUID }])).toEqual(success);
      });

      it('returns a failure if reader is not a function', () => {
        const notFunctionMsg = 'Reader must be a function';
        const notFunctionFailure = new ValidationResult(false, notFunctionMsg);

        expect(validateTypeHandlers([{ ...defaultHandler, reader: 'string' }])).toEqual(notFunctionFailure);
      });

      it('returns a failure if writer is not a function', () => {
        const notFunctionMsg = 'Writer must be a function';
        const notFunctionFailure = new ValidationResult(false, notFunctionMsg);

        expect(validateTypeHandlers([{ ...defaultHandler, writer: 'string' }])).toEqual(notFunctionFailure);
      });
    });
  });

  it('creates a new instance with given options', () => {
    const inst = new SharetribeSdk({
      baseUrl: 'https://jsonplaceholder.typicode.com',
      typeHandlers: [],
      endpoints: [],
      adapter: null,
    });

    expect(inst.config).toEqual(expect.objectContaining({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }));
  });

  it('creates new endpoints', () => {
    const inst = new SharetribeSdk({
      typeHandlers: [],
      endpoints: [{
        path: 'posts/showAll',
      }],
      adapter: null,
    });

    expect(inst.posts.showAll).toBeInstanceOf(Function);
  });

  it('calls user endpoint with query params', () => {
    const inst = new SharetribeSdk({
      baseUrl: '',
      typeHandlers: [],
      endpoints: [],
      adapter: fake.user.show,
    });

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
    const inst = new SharetribeSdk({
      baseUrl: '',
      typeHandlers: [],
      endpoints: [],
      adapter: fake.marketplace.show,
    });

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

    const inst = new SharetribeSdk({
      baseUrl: '',
      endpoints: [],
      adapter: fake.marketplace.show,
      typeHandlers: handlers,
    });

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
