'use strict';

var path = require('path');
var views = require('co-views');

module.exports = views(path.resolve(__dirname, '../../client'), {
  map: {html: 'swig'}
});