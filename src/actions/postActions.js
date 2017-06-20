import petsgo from '../api/petsgo';
import {
  UPDATE_POSTS,
  UPDATE_POST,
  UPDATE_IS_FETCHING_POST,
  UPDATE_IS_NOT_FETCHING_POST
} from '../constants/actionTypes';

import { postChannel } from '../channel';

export const createPost = ({ resolve, reject }) => (dispatch) => (data) => {
  petsgo.createPost(data)
  .then(data => {
    return data;
  })
  .then(data => {
    postChannel.push('new:post')
    .receive('ok', response => {
    })
    .receive('error', error => {
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
  postChannel.join()
  .receive('ok', messages => {
  })
  .receive('error', reason => {
  });
  postChannel.on('new:post', () => {
    getPosts()(dispatch);
  });
};

export const leavePostChannel = () => (dispatch) => {
  postChannel.leave();
}
