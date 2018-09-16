import jwt from 'jsonwebtoken';
import fetch from 'isomorphic-unfetch';

const API_HOST =
  process.env.API_HOST || 'http://ec2-18-216-160-159.us-east-2.compute.amazonaws.com';

export const login = async (phoneNumber, password) => {
  const response = await fetch(`/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      auth: {
        phone_number: phoneNumber,
        password: password
      }
    })
  });

  const content = await response.json();
  return content.jwt;
};
