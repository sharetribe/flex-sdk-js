const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
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
  path: './build',
  filename: `sharetribe-sdk-${target}.js`,
  library: 'sharetribeSdk',
  libraryTarget: 'umd',
});

const plugins = [
  new LodashModuleReplacementPlugin({
    collections: true,
  }),
];

// Node configs
const nodeConfig = {
  entry,
  output: output('node'),
  target: 'node',
  module,
  externals: {
    axios: true,
  },
  plugins,
};

// Web configs
const webConfig = {
  entry,
  output: output('web'),
  target: 'web',
  module,
  plugins: [
    ...plugins,
    // new webpack.optimize.UglifyJsPlugin(),
  ],
};

export default () => ([nodeConfig, webConfig]);
