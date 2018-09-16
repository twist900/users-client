import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER
} from '../constants';

const initialState = {
  loading: false,
  list: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
    case DELETE_USER:
    case UPDATE_USER:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, list: action.payload.users };
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      const index = state.list.findIndex(x => x.id === action.payload.userId);
      return {
        ...state,
        loading: false,
        list: [...state.list.slice(0, index), ...state.list.slice(index + 1)]
      };
    default:
      return state;
  }
};
