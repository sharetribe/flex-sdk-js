/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

// Shared configs
const entry = './src/index.js';

const babelLoader = {
  test: /.js$/,
  exclude: [/node_modules/],
  use: 'babel-loader',
};

const module = {
  rules: [babelLoader],
};

const output = target => ({
  path: path.resolve(__dirname, 'build'),
  filename: `sharetribe-flex-sdk-${target}.js`,
  library: 'sharetribeSdk',
  libraryTarget: 'umd',
});

// Node configs
const nodeConfig = {
  entry,
  output: output('node'),
  target: 'node',
  module,
  externals: [
    'axios',
    'jsonwebtoken'
  ],
};

// Web configs
const webConfig = {
  entry,
  output: output('web'),
  target: 'web',
  module,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    alias: {
      // JWT is mocked with empty implementation in the browser build as it is
      // not needed there and this prevents downstream webpack runs from
      // attemtpting to include the dependency.
      jsonwebtoken: path.resolve(__dirname, 'src/jwt_mock.js')
    }
  }
};

export default () => ([nodeConfig, webConfig]);
