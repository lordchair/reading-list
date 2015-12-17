// webpack.config.js
var data = require('./data');

module.exports = {
  entry: './js/index.jsx',

  output: {
    filename: 'bundle.js',
    path: './dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
};