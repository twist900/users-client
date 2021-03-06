import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';

const headers = () => ({
  'Content-Type': 'application/json;charset=utf-8',
  Authorization: `Bearer ${Cookies.get('id_token')}`
});

const API_HOST = process.env.HOST || 'http://ec2-18-216-160-159.us-east-2.compute.amazonaws.com';

export const fetchAll = async () => {
  const response = await fetch(`/api/v1/users`, { headers: headers() });

  return response.json();
};

export const deleteUser = async userId => {
  const response = await fetch(`/api/v1/users/${userId}`, {
    method: 'delete',
    headers: headers()
  });

  return response.ok;
};

export const createUser = async userData => {
  const { phoneNumber } = userData;
  const response = await fetch(`/api/v1/users`, {
    method: 'post',
    headers: headers(),
    body: JSON.stringify({ ...userData, phone_number: phoneNumber })
  });

  return response.json();
};
