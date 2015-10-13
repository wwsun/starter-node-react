'use strict';

import path from 'path';
import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import route from 'koa-route';

import render from './lib/render';

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