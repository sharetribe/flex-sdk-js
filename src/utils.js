/* eslint 'import/prefer-default-export': 'off' */

import _ from 'lodash';

export const methodPath = path => _.without(path.split('/'), '');
