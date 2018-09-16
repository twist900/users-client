import { LOGGED_IN } from '../constants';
import * as api from '../api';

export const login = (phoneNumber, password) => async dispatch => {
  const token = await api.login(phoneNumber, password);

  if (token) {
    document.cookie = `id_token=${token}; expires=Thu, 18 Dec 2020 12:00:00 UTC`;
    dispatch({ type: LOGGED_IN, token });
  }
};
