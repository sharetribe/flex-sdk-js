import _ from 'lodash';

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

      const formDataObj = _.reduce(
        params,
        (fd, val, key) => {
          fd.append(key, val);
          return fd;
        },
        new FormData()
      );
      /* eslint-enable no-undef */

      return { params: formDataObj, ...ctx };
    }

    return { params, ...ctx };
  }
}
