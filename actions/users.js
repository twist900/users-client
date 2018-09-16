import api from '../api';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  RESET_NEW_USER
} from '../constants';

export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS });

  api.users
    .fetchAll()
    .then(users => dispatch({ type: FETCH_USERS_SUCCESS, payload: { users: users.data } }));
};

export const deleteUser = userId => dispatch => {
  dispatch({ type: DELETE_USER });

  api.users
    .deleteUser(userId)
    .then(users => dispatch({ type: DELETE_USER_SUCCESS, payload: { userId } }));
};

export const createUser = userData => dispatch => {
  dispatch({ type: CREATE_USER });

  api.users
    .createUser(userData)
    .then(user => dispatch({ type: CREATE_USER_SUCCESS, payload: { user } }));
};

export const resetNewUser = () => ({ type: RESET_NEW_USER });
