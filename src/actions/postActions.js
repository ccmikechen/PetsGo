import petsgo from '../api/petsgo';
import {
  UPDATE_POSTS
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
