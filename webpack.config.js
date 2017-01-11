module.exports = {
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: 'sharetribe-sdk.js',
    library: 'sharetribeSdk',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  }
};
