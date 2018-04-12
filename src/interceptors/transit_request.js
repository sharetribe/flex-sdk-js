import { createTransitConverters } from '../serializer';

/**
   Transit encode the request
 */
export default class TransitRequest {
  enter(ctx) {
    const { params, headers = {}, typeHandlers, transitVerbose, ...restCtx } = ctx;

    if (headers['Content-Type'] === 'application/transit+json') {
      return ctx;
    }

    const { writer } = createTransitConverters(typeHandlers, { verbose: transitVerbose });

    return {
      params: writer.write(params),
      headers: {
        ...headers,
        'Content-Type': 'application/transit+json',
      },
      typeHandlers,
      transitVerbose,
      ...restCtx,
    };
  }
}
