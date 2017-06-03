import petsgo from '../api/petsgo';
import {
  UPDATE_POSTS,
  UPDATE_POST,
  UPDATE_IS_FETCHING_POST,
  UPDATE_IS_NOT_FETCHING_POST
} from '../constants/actionTypes';

import { configureChannel } from '../channel';
let socket = configureChannel();
let channel = socket.channel('post');

export const createPost = (data) => (dispatch) => {
  petsgo.createPost(data)
  .then(data => {
    channel.push('new:post');
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

export const joinPostChannel = () => (dispatch) => {
  channel.join();
  channel.on('new:post', () => {
    console.log('new:post');
    getPosts()(dispatch);
  });
};
