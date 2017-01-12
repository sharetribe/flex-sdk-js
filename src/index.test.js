import sharetribe from '../build/sharetribe-sdk-node';

describe('index', () => {
  it('creates a new instance with default options', () => {
    const inst = sharetribe();

    expect(inst.opts).toEqual(expect.objectContaining({
      host: 'api.sharetribe.com',
      protocol: 'https',
    }));
  });

  it('creates a new instance with given options', () => {
    const inst = sharetribe({
      host: 'jsonplaceholder.typicode.com',
    });

    expect(inst.opts).toEqual(expect.objectContaining({
      host: 'jsonplaceholder.typicode.com',
      protocol: 'https',
    }));
  });

  it('creates new endpoints', () => {
    const inst = sharetribe({}, [
      {
        path: 'posts/showAll',
      },
    ]);

    expect(inst['posts.showAll']).toBeInstanceOf(Function);
  });

  it('calls endpoints', () => {
    const inst = sharetribe({
      host: 'jsonplaceholder.typicode.com',
    }, [
      {
        path: 'users',
      },
    ]);

    return inst.users().then(res => expect(res.data.length).toEqual(10));
  });
});
