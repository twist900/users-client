import React from 'react';
import Login from '../components/Login';
import Layout from '../components/Layout';
import { connect } from 'react-redux';

const Index = props => (
  <Layout>
    <Login {...props} />
  </Layout>
);

export default connect(({ auth }) => ({ auth }))(Index);
