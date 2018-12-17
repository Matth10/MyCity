/**
 * Imports
 */
import * as fromUserActions from '../actions/user.actions';

/**
 * Set the initial state
 */
const initialState = {
  isAuth: false,
  token: null,
};

/**
 * Reducer that dispatch user actions
 */

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case fromUserActions.SIGNUP:
    case fromUserActions.LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    case fromUserActions.LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
};
