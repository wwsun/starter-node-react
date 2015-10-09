import App from '../../app';

var attachElement = document.getElementById('react-app');

var state = {
  user: {
    name: 'weiwei sun',
    age: 25,
    location: 'nanjing, china'
  }
};

var app;

app = new App({state: state});

app.renderToDOM(attachElement);