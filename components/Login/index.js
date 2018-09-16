import React, { Component } from 'react';
import Head from 'next/head';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Form from './Form';

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
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
        </Head>
        <div className="d-flex align-items-center h-100">
          <Col lg={4} />
          <Col lg={4}>
            <Form />
          </Col>
        </div>
      </div>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(Login);
