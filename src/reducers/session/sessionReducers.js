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
  UPDATE_UNAUTHENTICATED: (state) => (
    state.set('isAuthenticated', false)
      .setIn(['user', 'username'], '')
      .setIn(['user', 'sex'], '')
      .setIn(['user', 'phoneNumber'], )
      .setIn(['user', 'firstName'], '')
      .setIn(['user', 'lastName'], '')
      .setIn(['user', 'image'], '')
      .setIn(['user', 'id'], null)
      .setIn(['user', 'email'], '')
      .setIn(['user', 'birthday'], null)
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
  ),
  UPDATE_IS_LOGGING_IN: (state) => (
    state.setIn(['login', 'isLoggingIn'], true)
  ),
  UPDATE_IS_NOT_LOGGING_IN: (state) => (
    state.setIn(['login', 'isLoggingIn'], false)
  ),
  UPDATE_IS_SIGNING_UP: (state) => (
    state.setIn(['signUp', 'isSigningUp'], true)
  ),
  UPDATE_IS_NOT_SIGNING_UP: (state) => (
    state.setIn(['signUp', 'isSigningUp'], false)
  )
}, SessionState);

export default sessionReducer;
