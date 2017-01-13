const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

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
  new LodashModuleReplacementPlugin(),
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
  plugins,
};

export default () => ([nodeConfig, webConfig]);
