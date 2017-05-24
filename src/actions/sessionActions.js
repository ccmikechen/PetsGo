import server from '../api/server';
import {

} from '../constants/actionTypes';

export const createAccount = (dispatch) => {
  let data = 'testdata';
  return (dispatch) => server.post('/users', {
    username: data,
    email: data,
    password: data,
    first_name: data,
    last_name: data,
    sex: data
  })
  .then(response => {
    console.log(response);
    return response;
  })
  .catch(error => {
    console.log(error);
  });
};
