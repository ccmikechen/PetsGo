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

export const createPost = ({ resolve, reject }) => (dispatch) => (data) => {
  petsgo.createPost(data)
  .then(data => {
    console.log('response data', data);
    return data;
  })
  .then(data => {
    console.log('push new:post');
    channel.push('new:post')
    .receive('ok', response => {
      console.log('ok', response);
    })
    .receive('error', error => {
      console.log('error', error);
    });
    resolve(data);
    return data;
  })
  .catch(errors => {
    reject(errors);
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
  console.log('start join');
  channel.join()
  .receive('ok', messages => {
    console.log('join ok');
  })
  .receive('error', reason => {
    console.log('join error', reason);
  });
  channel.on('new:post', () => {
    console.log('new:post');
    getPosts()(dispatch);
  });
};
