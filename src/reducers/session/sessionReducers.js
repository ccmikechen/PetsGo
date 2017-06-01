import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { SessionState } from '../../constants/model';

const sessionReducer = handleActions({
  UPDATE_USERNAME: (state, { username }) => (
    state.set('username', username)
  ),
  UPDATE_PASSWORD: (state, { password }) => (
    state.set('password', password)
  ),
  UPDATE_AUTHENTICATED: (state) => (
    state.set('isAuthenticated', true)
  ),
  UPDATE_CURRENT_ACCOUNT: (state, { user }) => (
    state.setIn(['user', 'username'], user.username)
      .setIn(['user', 'sex'], user.sex)
      .setIn(['user', 'phoneNumber'], user.phone_number)
      .setIn(['user', 'firstName'], user.first_name)
      .setIn(['user', 'lastName'], user.last_name)
      .setIn(['user', 'image'], user.image)
      .setIn(['user', 'id'], user.id)
      .setIn(['user', 'email'], user.email)
      .setIn(['user', 'birthday'], user.birthday)
  )
}, SessionState);

export default sessionReducer;
