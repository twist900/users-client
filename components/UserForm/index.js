import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from './InlineError';
import { createUser } from '../../actions';

class UserForm extends Component {
  state = {
    data: {
      name: '',
      phoneNumber: '',
      password: ''
    },
    errors: {},
    serverError: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Can't be blank";
    if (!data.phoneNumber) errors.phoneNumber = "Can't be blank";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    const { loading, serverError } = this.props;

    return (
      <Form onSubmit={this.onSubmit.bind(this)} loading={loading}>
        {serverError && (
          <Message negative>
            <Message.Header>{serverError}</Message.Header>
            <p>{serverError.message}</p>
          </Message>
        )}
        <Form.Field error={!!errors.name}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="name"
            value={data.name}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>
        <Form.Field error={!!errors.phoneNumber}>
          <label htmlFor="phoneNumber">phoneNumber</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="phoneNumber"
            value={data.phoneNumber}
            onChange={this.onChange}
          />
          {errors.phoneNumber && <InlineError text={errors.phoneNumber} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Add</Button>
      </Form>
    );
  }
}
UserForm.defaultProps = {
  loading: false,
  serverError: {}
};

UserForm.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  serverError: PropTypes.shape({ message: PropTypes.string.isRequired })
};

export default UserForm;
