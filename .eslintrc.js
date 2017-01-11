module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: false,
    node: false
  },
  globals: {
    //
    // Specify globals needed by Mocha/Chai
    // Set the value to `false` to prevent the variables
    // to be overriden.
    // See: http://eslint.org/docs/user-guide/configuring#specifying-globals
    //
    describe: false,
    it: false,
    expect: false
  }
};
