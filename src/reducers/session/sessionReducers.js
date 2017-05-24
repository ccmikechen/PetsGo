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
}, SessionState);

export default sessionReducer;
