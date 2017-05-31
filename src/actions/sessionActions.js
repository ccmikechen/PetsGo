import { AsyncStorage } from 'react-native';
import petsgo from '../api/petsgo';
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  UPDATE_AUTHENTICATED
} from '../constants/actionTypes';
import { startMainApp } from '../apps';

export const createAccount = (data) => (dispatch) => {
  petsgo.createUser(data)
  .then(token => {
    AsyncStorage.setItem('@session:token', token);
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
  console.log(data);
  petsgo.createSession({
    ...data
  })
  .then(token => {
    AsyncStorage.setItem('@session:token', token);
    startMainApp();

    return dispatch({
      type: UPDATE_AUTHENTICATED
    });
  })
  .catch(error => {
    console.log(error);
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
