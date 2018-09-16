import React, { Component } from 'react';
import Link from 'next/link';
import { Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { login } from '../../actions';
import SignForm from '../utils/SignForm';

class Form extends Component {
  onClick() {
    debugger;
    const { phoneNumber, password } = this.props.form.login;
    this.props.dispatch(login(phoneNumber, password));
  }

  render() {
    return (
      <div>
        {process.env.TEST}
        <Row style={{ marginTop: '40px' }}>
          <Col lg='12'>
            <Col lg='12' style={{ textAlign: 'center' }}>
              <h3>Sign In</h3>
            </Col>
            <SignForm title="login" />
            <Col lg={12} style={{ textAlign: 'center' }}>
              <Button type="submit" bsStyle="info" onClick={() => this.onClick()}>
                Sign In
              </Button>
            </Col>
            <Col lg={12} style={{ marginTop: '20px', textAlign: 'center' }}>
              <Link href="/signUp">
                <a>Sign up</a>
              </Link>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(({ form }) => ({ form }))(Form);
