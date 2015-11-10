import React from 'react';
import { Link } from 'react-router';

import config from '../../../config/app';

class AppRoot extends React.Component {

  render() {

    return (
      <div>
        {/*comment: public components: title and navbar*/}
        <h2>{config.title}</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/404">404</Link></li>
        </ul>

        {/*comment: child components*/}
        {this.props.children}

      </div>
    );
  }
}

export default AppRoot;