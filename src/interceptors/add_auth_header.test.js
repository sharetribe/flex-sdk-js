import AddAuthHeader from './add_auth_header';

describe('AddAuthHeader', () => {
  it('adds the auth token to the header', () => {
    const ctx = {
      authToken: {
        token_type: 'Bearer',
        access_token: 'secret-123',
      },
    };

    const addAuthHeader = new AddAuthHeader();

    const newCtx = addAuthHeader.enter(ctx);

    expect(newCtx).toEqual(
      expect.objectContaining({
        headers: {
          Authorization: 'Bearer secret-123',
        },
      })
    );
  });

  it('merges the new header, and does not override existing headers, except the auth header', () => {
    const ctx = {
      authToken: {
        token_type: 'Bearer',
        access_token: 'secret-123',
      },
      headers: {
        Authorization: 'Bearer old-invalid-token',
        'Content-Type': 'application/transit+json',
      },
    };

    const addAuthHeader = new AddAuthHeader();

    const newCtx = addAuthHeader.enter(ctx);

    expect(newCtx).toEqual(
      expect.objectContaining({
        headers: {
          Authorization: 'Bearer secret-123',
          'Content-Type': 'application/transit+json',
        },
      })
    );
  });
});
