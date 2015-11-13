import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../app2/containers/App.js';
import todoApp from '../../app2/reducers/reducers';

let store = createStore(todoApp);

//import App from '../../app';
//
var attachElement = document.getElementById('react-app');
//
//var state = {
//  user: {
//    name: 'weiwei sun',
//    age: 25,
//    location: 'nanjing, china'
//  }
//};
//
//var app;
//
//app = new App({state: state});
//
//app.renderToDOM(attachElement);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  attachElement
);