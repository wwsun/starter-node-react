var path = require('path');
var node_modules = path.resolve(__dirname, '../node_modules');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  output: {
    path: path.resolve(__dirname, '../dist'), // for standalone building
    publicPath: '/assets/', // for hot building
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /src(\\|\/).+\.jsx?$/, exclude: /node_modules/, loader: 'babel', query: {presets: ['es2015', 'react']}}
    ]
  }
};