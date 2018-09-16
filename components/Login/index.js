import React, { Component } from 'react';
import Head from 'next/head';
import Form from './LoginForm';

class Login extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.auth.token) {
      document.location.pathname = '/users';
    }
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Head>
          <title>Sign In</title>
        </Head>

        <Form dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default Login;
