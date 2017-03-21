import { createTransitConverters } from '../serializer';

/**
   Transit encode the request
 */
export default class TransitRequest {
  enter(ctx) {
    const { params, headers = {}, typeHandlers, ...restCtx } = ctx;

    if (headers['Content-Type'] === 'application/transit+json') {
      return ctx;
    }

    const { writer } = createTransitConverters(typeHandlers);

    return {
      params: writer.write(params),
      headers: {
        ...headers,
        'Content-Type': 'application/transit+json',
      },
      typeHandlers,
      ...restCtx,
    };
  }
}
