import React from 'react';
import UserProfile from './UserProfile.jsx';

class About extends React.Component {

  render () {

    const user ={
      name: 'weiwei sun',
      age: 25,
      location: 'nanjing, China'
    };

    return (
      <div>
        <h3>about page</h3>

        <UserProfile user={user} />
      </div>
    );
  }
}

export default About;