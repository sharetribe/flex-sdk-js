import sharetribe from './index';

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

  it('calls endpoints', () => {
    const inst = sharetribe({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }, [
      {
        path: 'users',
      },
    ]);

    return inst.users().then(res => expect(res.data.length).toEqual(10));
  });
});
