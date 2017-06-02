import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { PostState } from '../../constants/model';

const postReducer = handleActions({
  UPDATE_POSTS: (state, { posts }) => (
    state.set('posts', posts)
  )
}, PostState);

export default postReducer;
