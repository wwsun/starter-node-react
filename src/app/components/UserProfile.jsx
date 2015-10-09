import React from 'react';

class UserProfile extends React.Component {

  render () {

    return (
      <div>
        <ul>
          <li>name: {this.props.user.name}</li>
          <li>age: {this.props.user.age}</li>
          <li>location: {this.props.user.location}</li>
        </ul>
      </div>
    );
  }
}

export default UserProfile;