import React from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';

class Users extends React.Component {
  render() {
    return (
      <div>
        <UserList />
      </div>
    );
  }
}

export default connect()(Users);
