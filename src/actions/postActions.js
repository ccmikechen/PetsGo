import petsgo from '../api/petsgo';
import {
  UPDATE_POSTS,
  UPDATE_POST
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
  petsgo.getPost(id)
  .then(post => {
    dispatch({ type: UPDATE_POST, post });
  })
  .catch(error => {

  })
}
