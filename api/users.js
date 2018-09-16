import jwt from 'jsonwebtoken';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';

const headers = () => ({
  'Content-Type': 'application/json;charset=utf-8',
  Authorization: `Bearer ${Cookies.get('id_token')}`
});

export const fetchAll = async () => {
  const response = await fetch('http://localhost:4000/api/v1/users', { headers: headers() });

  return response.json();
};

export const deleteUser = async userId => {
  const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
    method: 'delete',
    headers: headers()
  });

  return response.ok;
};
