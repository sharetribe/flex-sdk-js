module.exports = {
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: 'sharetribe-sdk.js',
    library: 'sharetribeSdk',
    libraryTarget: 'umd'
  }
};
