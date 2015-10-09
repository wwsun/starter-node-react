import React from 'react';

import UserProfile from './UserProfile.jsx';

import config from '../../../config/app';

class AppRoot extends React.Component {

  render() {

    return (
      <div>
        <h2>{config.title}</h2>
        <UserProfile user={this.props.state.user} />
      </div>
    );
  }
}

export default AppRoot;