import _ from 'lodash';
import { createTransitConverters } from '../serializer';

/**
   Transit encode the response
 */
export default class TransitResponse {
  error(ctx) {
    const { reader } = createTransitConverters(ctx.typeHandlers);

    if (!ctx.error.response) {
      return ctx;
    }

    // Don't try to parse 500
    if (ctx.error.response.status === 500) {
      return ctx;
    }

    return _.update({ ...ctx }, 'error.response.data', data => reader.read(data));
  }

  leave(ctx) {
    const { reader } = createTransitConverters(ctx.typeHandlers);

    if (!ctx.res) {
      return ctx;
    }

    return _.update({ ...ctx }, 'res.data', data => reader.read(data));
  }
}
