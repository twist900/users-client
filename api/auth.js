import jwt from 'jsonwebtoken';
import fetch from 'isomorphic-unfetch';

export const login = async (phoneNumber, password) => {
  const response = await fetch('http://localhost:4000/signin', {
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
