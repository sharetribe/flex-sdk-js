import { UUID, LatLng } from './types';
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

  it('calls users endpoint with query params', () => {
    const inst = new SharetribeSdk({
      baseUrl: '',
      typeHandlers: [],
      endpoints: [],
      adapter: fake.users.show,
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

  it('calls listing search with query params', () => {
    const inst = new SharetribeSdk({
      baseUrl: '',
      typeHandlers: [],
      endpoints: [],
      adapter: fake.listings.search,
    });

    return inst.listings.search({ id: new UUID('0e0b60fe-d9a2-11e6-bf26-cec0c932ce01'), origin: new LatLng(40.00, -70.00) }).then((res) => {
      const data = res.data.data;

      expect(data.length).toEqual(2);
      expect(data[0].attributes.description).toEqual('27-speed Hybrid. Fully functional.');
      expect(data[0].attributes.geolocation instanceof LatLng).toEqual(true);
      expect(data[0].attributes.geolocation).toEqual(new LatLng(40.64542, -74.08508));
      expect(data[1].attributes.description).toEqual('Goes together perfectly with a latte and a bow tie.');
      expect(data[1].attributes.geolocation instanceof LatLng).toEqual(true);
      expect(data[1].attributes.geolocation).toEqual(new LatLng(40.64542, -74.08508));
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
