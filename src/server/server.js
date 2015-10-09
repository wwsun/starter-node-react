'use strict';

var path = require('path');
var koa = require('koa');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');

var render = require('./lib/render');

var app = koa();

// Logger
app.use(logger());

// Routes

app.use(route.get('/', home));

function *home() {
  this.body = yield render('home', {name: 'weiwei sun'});
}

// Serve static files
app.use(serve(path.join(__dirname, '../../dist')));

if (module.parent) {
  app.listen(3000);
  console.log('listening on port 3000...');
}