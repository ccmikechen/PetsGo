import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { PostState } from '../../constants/model';

const postReducer = handleActions({
  UPDATE_POSTS: (state, { posts }) => (
    state.set('posts', posts)
  ),
  UPDATE_POST: (state, { post }) => (
    state.set('post', post)
  )
}, PostState);

export default postReducer;
