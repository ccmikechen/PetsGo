import petsgo from '../api/petsgo';
import {
  UPDATE_POSTS
} from '../constants/actionTypes';

export const createNewPost = (data) => (dispatch) => {
  petsgo.createPost(data)
  .then(data => {

  })
  .catch(error => {

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
