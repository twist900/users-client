import React from 'react';
import { Col } from 'react-bootstrap';
import Input from './Input';

export default props => (
  <div>
    <Col lg={12}>
      <Input placeholder="Phone Number" type="phoneNumber" title={props.title} name="phoneNumber" />
    </Col>
    <Col lg={12}>
      <Input placeholder="Password" type="password" title={props.title} name="password" />
    </Col>
  </div>
);
