import React from 'react';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import Layout from '../components/Layout';

class Users extends React.Component {
  render() {
    const { users, dispatch } = this.props;
    return (
      <Layout>
        <UserList users={users} dispatch={dispatch} />
      </Layout>
    );
  }
}

export default connect(({ users }) => ({ users }))(Users);
