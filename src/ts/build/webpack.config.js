const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const devConfig = require('./webpack.dev.conf');
const prodConfig = require('./webpack.prod.conf');

let config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

module.exports = merge(baseConfig, config);