import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  RESET_NEW_USER
} from '../constants';

const initialState = {
  loading: false,
  list: null,
  newUser: { data: null, error: null, loading: false }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
    case DELETE_USER:
    case UPDATE_USER:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, list: action.payload.users };
    case DELETE_USER_SUCCESS:
      const index = state.list.findIndex(x => x.id === action.payload.userId);
      return {
        ...state,
        loading: false,
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)]
      };
    case CREATE_USER:
      return {
        ...state,
        newUser: { error: null, user: null, loading: true }
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.user.data],
        newUser: { user: action.item, error: null, loading: false }
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        newUser: {
          user: null,
          loading: false,
          error: action.error.message
        }
      };
    case RESET_NEW_USER:
      return {
        ...state,
        newUser: {
          user: null,
          loading: false,
          error: null
        }
      };
    default:
      return state;
  }
};
