import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppRoot from './components/AppRoot.jsx';
import About from './components/About.jsx';
import NoMatch from './components/NoMatch.jsx';

class AppRoutes extends React.Component {

  render () {

    console.log(this.props.state);

    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppRoot}>
          <Route path="about" component={About} />
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    );
  }
}

export default AppRoutes;