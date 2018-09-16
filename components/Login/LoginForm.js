import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import { login } from '../../actions';

class LoginForm extends Component {
  state = {
    phoneNumber: '',
    password: ''
  };

  onClick() {
    const { phoneNumber, password } = this.state;
    this.props.dispatch(login(phoneNumber, password));
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <style global jsx>{`
          .login-form,
          .login-form__grid {
            height: 100%;
          }
        `}</style>
        <div className="login-form">
          <Grid columns={1} centered className="login-form__grid">
            <Grid.Row verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" textAlign="center">
                  Log-in to your account
                </Header>
                <Form size="large">
                  <Segment>
                    <Form.Input
                      type="text"
                      onChange={e => this.setState({ phoneNumber: e.target.value })}
                      value={this.state.phoneNumber}
                      icon="user"
                      iconPosition="left"
                      placeholder="Phone number"
                      fluid
                    />
                    <Form.Input
                      type="text"
                      onChange={e => this.setState({ password: e.target.value })}
                      value={this.state.password}
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      fluid
                    />

                    <Button
                      style={{ color: 'white', backgroundColor: '#007bff' }}
                      fluid
                      size="large"
                      onClick={e => {
                        this.onClick(e);
                      }}
                    >
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  <b>Hint:</b>
                  <br />
                  Phone number: 123-123-123
                  <br />
                  Password: password
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default LoginForm;
