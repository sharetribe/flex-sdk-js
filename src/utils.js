import _ from 'lodash';

export const assignDeep = (obj, path, val) => {
  const deepObj = (p, v) => {
    const tail = _.tail(p);

    if (!_.isEmpty(tail)) {
      return { [_.head(p)]: deepObj(tail, v) };
    }

    return { [_.head(p)]: v };
  };

  return _.defaultsDeep(obj, deepObj(path, val));
};

export const methodPath = path => _.without(path.split('/'), '');
