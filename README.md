# starter-node-react
A starter project for react-app, if you don't familiar with React with Webpack,
the following links is highly recommended.

- [Roadmap for learning React](https://github.com/wwsun/awesome-javascript/tree/master/sections/React)
- [React and Webpack Cookbook - chn version](https://fakefish.github.io/react-webpack-cookbook/index.html)

## Dependencies

please use the latest version of following tools:

1. ECMAScript 6
1. React [0.14](http://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)
1. React-router [1.0](https://github.com/rackt/react-router)
1. Webpack 1.12
1. Babel [6.0](https://babeljs.io/blog/2015/10/29/6.0.0/)
1. Koa 1.0
1. Node.js 4.1

## Running

### Install dependencies

    npm install
    
### Build

If your app is ready, and you want to check the results, you can execute

    npm run build

then the `bundle.js` is serving at `http://localhost:300/bundle.js` via your koa server, 
or you can use hot mode if you want to `build` repeatedly to check the code changes:

    npm run dev
    
then the `bundle.js` is serving at `http://localhost:8080/assets/bundle.js` via `webpack-dev-server`

**remember!!! you should modify the path of file `bundle.js` in `home.html` manually!**

### Start

    npm start
    
### Browse

Open your browser, and visit `http://localhost:3000` to check the result

## Reference documentations

1. [Babel 6.0 released](https://babeljs.io/blog/2015/10/29/6.0.0/)
1. [Babel-loader documentation](https://github.com/babel/babel-loader)
1. [webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html)
1. [React-router 1.0 doc](https://github.com/rackt/react-router)