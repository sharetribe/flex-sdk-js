import _ from 'lodash';
import { entries } from '../utils';

/**
   Takes `params` from `ctx` and converts to `FormData`

   Changes to `ctx`:

   - Modify `ctx.params`
 */
export default class MultipartRequest {
  enter({ params, ...ctx }) {
    if (_.isPlainObject(params)) {
      /* eslint-disable no-undef */
      if (typeof FormData === 'undefined') {
        throw new Error(
          "Don't know how to create multipart request from Object, when the FormData is undefined"
        );
      }

      const formDataObj = entries(params).reduce((fd, entry) => {
        const [key, val] = entry;
        fd.append(key, val);
        return fd;
      }, new FormData());
      /* eslint-enable no-undef */

      return { params: formDataObj, ...ctx };
    }

    return { params, ...ctx };
  }
}
