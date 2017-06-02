import server from './server';
import { AsyncStorage } from 'react-native';

export default {
  createSession: ({ username, password }) => (
    server.post('/sessions', {
      username,
      password
    })
    .then(response => {

      if (response.error) {
        throw new Error(response.error);
      }
      let token = response.meta.token;
      AsyncStorage.setItem('@session:token', token);
      return token;
    })
  ),
  destroySession: () => (
    server.delete('/sessions')
    .then(response => {
      if (response.ok) {
        AsyncStorage.setItem('@session:token', '');
      }
      return response;
    })
  ),
  refreshSession: () => {
    return server.post('/sessions/refresh')
    .then(response => {
      if (response.error) {
        throw new Error(response.error)
      }
      let token = response.meta.token;
      AsyncStorage.setItem('@session:token', token);
      return token;
    });
  },
  createUser: (data) => (
    server.post('/users', {
      ...data
    })
    .then(response => {
      if (response.errors) {
        throw new Error(response.errors);
      }
      let token = response.meta.token;
      AsyncStorage.setItem('@session:token', token);
      return token;
    })
  ),
  getCurrentUser: () => (
    server.fetch('/sessions/user')
    .then(response => {
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    })
  ),
  getAllPosts: () => (
    server.fetch('/posts')
    .then(response => {
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    })
  ),
  getPost: (id) => (
    server.fetch(`/posts/${id}`)
    .then(response => {
      if (response.error) {
        throw new Error(response.error);
      }
      return response.data;
    })
  ),
  createPost: ({ title, content, type }) => (
    server.post('/posts', {
      title,
      content,
      type
    })
    .then(response => {
      if (response.errors) {
        throw new Error(response.errors);
      }
      return response.data;
    })
  )
};
