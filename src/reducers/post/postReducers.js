import Immutable from 'immutable';
import { handleActions } from 'redux-actions';
import { PostState } from '../../constants/model';

const postReducer = handleActions({
  UPDATE_POSTS: (state, { posts }) => (
    state.set('posts', posts)
  ),
  UPDATE_POST: (state, { post }) => (
    state.set('post', Immutable.fromJS(post))
  ),
  UPDATE_IS_FETCHING_POST: (state) => (
    state.set('isFetchingPost', true)
  ),
  UPDATE_IS_NOT_FETCHING_POST: (state) => (
    state.set('isFetchingPost', false)
  )
}, PostState);

export default postReducer;
