var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');

var dir_client = path.resolve(__dirname, '../src/client/scripts');
var dir_dist = path.resolve(__dirname, '../dist');

module.exports = {
  entry: path.resolve(dir_client, 'client.js'),
  output: {
    path: dir_dist, // for standalone building
    publicPath: '/assets/', // for hot building
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /src(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}}
    ]
  }
};