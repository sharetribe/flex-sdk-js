import sharetribe from '../build/sharetribe-sdk-node';

describe('index', () => {
  it('returns a nice greeting with my name on it', () => {
    expect(sharetribe('John')).toEqual('Hello, John!');
  });
});
