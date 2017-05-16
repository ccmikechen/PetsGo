// import { createAction } from 'redux-actions';
import {
    HELLO
} from '../constants/actionTypes';

export function hello(text) {
  return dispatch => {
    dispatch({ type: HELLO, text })
  }
}
