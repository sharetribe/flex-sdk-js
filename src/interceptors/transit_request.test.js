import { createTransitConverters } from '../serializer';
import TransitRequest from './transit_request';

describe('TransitRequest', () => {
  it('encodes to Transit', () => {
    const data = {
      data: {
        a: 1,
        b: [2, 3],
      },
    };

    const ctx = {
      params: data,
    };

    const transitRequest = new TransitRequest();

    const newCtx = transitRequest.enter(ctx);
    const { writer } = createTransitConverters();

    expect(newCtx).toEqual(
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/transit+json',
        }),
        params: writer.write(data),
      })
    );
  });

  it('is idempotent', () => {
    const data = {
      data: {
        a: 1,
        b: [2, 3],
      },
    };

    const ctx = {
      params: data,
    };

    const transitRequest = new TransitRequest();

    const newCtx = transitRequest.enter(transitRequest.enter(ctx));
    const { writer } = createTransitConverters();

    expect(newCtx).toEqual(
      expect.objectContaining({
        headers: expect.objectContaining({
          'Content-Type': 'application/transit+json',
        }),
        params: writer.write(data),
      })
    );
  });
});
