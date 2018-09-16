import { LOGGED_IN } from '../constants';
import api from '../api';
import Cookies from 'js-cookie';

export const login = (phoneNumber, password) => async dispatch => {
  const token = await api.auth.login(phoneNumber, password);

  if (token) {
    Cookies.set('id_token', token, { expires: 7 });
    dispatch({ type: LOGGED_IN, token });
  }
};
