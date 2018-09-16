import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChange } from '../../actions';

class Input extends Component {
  onChange(e) {
    const { title, name } = this.props;
    this.props.dispatch(inputChange(title, name, e.target.value));
  }

  render() {
    return (
      <div>
        <div controlId="formBasicText">
          <div
            disabled={this.props.disabled}
            type={this.props.type || 'text'}
            placeholder={this.props.placeholder}
            onChange={e => this.onChange(e)}
            value={this.props.val}
          />
        </div>
      </div>
    );
  }
}

export default connect()(Input);
