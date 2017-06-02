import petsgo from '../api/petsgo';
import {
  UPDATE_POSTS,
  UPDATE_POST,
  UPDATE_IS_FETCHING_POST,
  UPDATE_IS_NOT_FETCHING_POST
} from '../constants/actionTypes';

export const createPost = (data) => (dispatch) => {
  petsgo.createPost(data)
  .then(data => {
    return data;
  });
};

export const getPosts = () => (dispatch) => {
  petsgo.getAllPosts()
  .then(posts => {
    dispatch({ type: UPDATE_POSTS, posts });
  })
  .catch(error => {

  });
};

export const getPost = (id) => (dispatch) => {
  dispatch({ type: UPDATE_IS_FETCHING_POST });

  petsgo.getPost(id)
  .then(post => {
    dispatch({ type: UPDATE_POST, post });
    dispatch({ type: UPDATE_IS_NOT_FETCHING_POST });
  })
  .catch(error => {
    dispatch({ type: UPDATE_IS_NOT_FETCHING_POST });
  })
}
