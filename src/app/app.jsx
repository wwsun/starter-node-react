import React from 'react';

import AppRoot from './components/AppRoot.jsx';

class App {

  constructor(options) {
    this.state = options.state;
  }

  render (element) {
    var appRootElement = React.createElement(AppRoot, {
      state: this.state
    });

    if (element) {
      React.render(appRootElement, element);
      return;
    }

    return React.renderToString(appRootElement);
  }

  renderToDOM(element) {
    if (!element) {
      throw new Error('App.renderToDOM: element is required!');
    }
    this.render(element);
  }

  renderToString() {
    return this.render();
  }

}

export default App;