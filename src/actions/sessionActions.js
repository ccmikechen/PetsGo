import { AsyncStorage } from 'react-native';
import petsgo from '../api/petsgo';
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_AUTHENTICATED,
  UPDATE_UNAUTHENTICATED,
  UPDATE_CURRENT_ACCOUNT,
  REFRESH_SESSION,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  VERIFY_FAILED
} from '../constants/actionTypes';
import {
  startMainApp,
  startLoginApp
} from '../apps';

export const createAccount = (data) => (dispatch) => {
  petsgo.createUser(data)
  .then(token => {
    startMainApp();

    return dispatch({
      type: UPDATE_AUTHENTICATED
    });
  })
  .catch(error => {
    console.log(error);
  });
};

export const login = (data) => (dispatch) => () => {
  petsgo.createSession({
    ...data
  })
  .then(token => {
    startMainApp();

    return dispatch({
      type: UPDATE_AUTHENTICATED
    });
  })
  .catch(error => {
    dispatch({
      type: LOGIN_FAILED,
      error
    })
  });
};

export const logout = () => (dispatch) => {
  petsgo.destroySession()
  .then(response => {
    dispatch({
      type: UPDATE_UNAUTHENTICATED
    });
    console.log('logout', response);
    startLoginApp();
  });
};

export const verifyAndRefreshSession = () => (dispatch) => {
  petsgo.refreshSession()
  .then(token => {

  })
  .catch(error => {
    dispatch({
      type: VERIFY_FAILED,
      error
    })
  });
};

export const getCurrentAccount = () => (dispatch) => {
  petsgo.getCurrentUser()
  .then(user => {
    dispatch({
      type: UPDATE_CURRENT_ACCOUNT,
      user
    });
  })
  .catch(error => {
    dispatch({
      type: VERIFY_FAILED,
      error
    })
  });
};

export const updateUsername = (username) => (dispatch) => {
  return dispatch({
    type: UPDATE_USERNAME,
    username
  });
};

export const updatePassword = (password) => (dispatch) => {
  return dispatch({
    type: UPDATE_PASSWORD,
    password
  });
};
