import { LOGGED_IN } from '../constants';

const initialState = {
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
