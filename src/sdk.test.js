import { UUID } from './types';
import fake from './fake';
import SharetribeSdk from './sdk';

describe('new SharetribeSdk', () => {
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

    return inst.users.show({ id: '0e0b60fe-d9a2-11e6-bf26-cec0c932ce01' }).then((res) => {
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
