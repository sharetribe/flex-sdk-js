/**
   Mock empty implementation of jsonwebtoken's .sign() method.
   This is used by webpack in browser build in order to avoid
   the node-only dependency breaking builds downstream.
*/
const jwt = {
  sign: (/* value, secret */) => {
    throw new Error('JWT support not implemented.');
  },
};

export default jwt;
