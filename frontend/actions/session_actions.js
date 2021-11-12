export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

import * as APISessionUtils from '../util/session_api_util';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: []
})

export const login = user => dispatch => (
  APISessionUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APISessionUtils.logout()
    .then(user => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  APISessionUtils.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON)))
);