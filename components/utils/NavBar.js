import React from 'react';
import Router from 'next/router';
import { Col, Button } from 'react-bootstrap';

const handler = route =>
  Router.push({
    pathname: `/${route}`
  });

export default () => (
  <div>
    <div style={{ marginTop: '20px' }} />
  </div>
);
