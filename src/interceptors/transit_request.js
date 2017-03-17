import { createTransitConverters } from '../serializer';

/**
   Transit encode the request
 */
export default class TransitRequest {
  enter({ params, headers = {}, typeHandlers, ...ctx }) {
    const { writer } = createTransitConverters(typeHandlers);

    return {
      params: writer.write(params),
      headers: {
        ...headers,
        'Content-Type': 'application/transit+json',
      },
      typeHandlers,
      ...ctx,
    };
  }
}
