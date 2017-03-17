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
