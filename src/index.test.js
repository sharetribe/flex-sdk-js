import sharetribe from '../build/sharetribe-sdk-node';

describe('index', () => {
  it('returns a list of 10 users', () =>
    // This is not a mocked request. It really calls the service.
    sharetribe()
      .then(res => expect(res.data.length).toEqual(10)));
});
