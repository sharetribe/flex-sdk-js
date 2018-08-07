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
};

export default () => ([nodeConfig, webConfig]);
