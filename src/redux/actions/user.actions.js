/**
 * Actions types
 */
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';

/**
 * Actions creators
 */

export function userIsLogin(token) {
  return { type: LOGIN, token };
}

export function userIsSignUp(token) {
  return { type: SIGNUP, token };
}

export function userIsLogOut() {
  return { type: LOGOUT };
}
