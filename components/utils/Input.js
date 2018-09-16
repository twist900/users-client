import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { inputChange } from '../../actions';

class Input extends Component {
  onChange(e) {
    debugger;
    const { title, name } = this.props;
    this.props.dispatch(inputChange(title, name, e.target.value));
  }

  render() {
    return (
      <div>
        <FormGroup controlId="formBasicText">
          <FormControl
            disabled={this.props.disabled}
            type={this.props.type || 'text'}
            placeholder={this.props.placeholder}
            onChange={e => this.onChange(e)}
            value={this.props.val}
          />
        </FormGroup>
      </div>
    );
  }
}

export default connect()(Input);
