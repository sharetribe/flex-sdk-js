import sharetribe from './index';
import { UUID } from './types'

describe('index', () => {
  it('creates a new instance with default options', () => {
    const inst = sharetribe();

    expect(inst.opts).toEqual(expect.objectContaining({
      baseUrl: 'https://api.sharetribe.com',
    }));
  });

  it('creates a new instance with given options', () => {
    const inst = sharetribe({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    });

    expect(inst.opts).toEqual(expect.objectContaining({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }));
  });

  it('creates new endpoints', () => {
    const inst = sharetribe({}, [
      {
        path: 'posts/showAll',
      },
    ]);

    expect(inst.posts.showAll).toBeInstanceOf(Function);
  });

  it('calls user endpoint with query params', () => {

    // This test will fail if API is not up and running locally

    const inst = sharetribe({
      baseUrl: 'http://localhost:8088/v1/marketplace/',
    }, [
      {
        path: 'marketplace/show',
      },
      {
        path: 'user/show'
      }
    ]);

    return inst.user.show({id: "0e0b60fe-d9a2-11e6-bf26-cec0c932ce01"}).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID("0e0b60fe-d9a2-11e6-bf26-cec0c932ce01"));
      expect(attrs).toEqual(expect.objectContaining({
        email: 'user@sharetribe.com',
        description: 'A team member'
      }));
    });
  });

  it('calls marketplace endpoint with query params', () => {

    // This test will fail if API is not up and running locally

    const inst = sharetribe({
      baseUrl: 'http://localhost:8088/v1/marketplace/',
    }, [
      {
        path: 'marketplace/show',
      },
      {
        path: 'user/show'
      }
    ]);

    return inst.marketplace.show({id: "0e0b60fe-d9a2-11e6-bf26-cec0c932ce01"}).then((res) => {
      const resource = res.data.data;
      const attrs = resource.attributes;

      expect(resource.id).toEqual(new UUID("0e0b60fe-d9a2-11e6-bf26-cec0c932ce01"));
      expect(attrs).toEqual(expect.objectContaining({
        name: 'Awesome skies.',
        description: 'Meet and greet with fanatical sky divers.',
      }));
    });
  });
});
