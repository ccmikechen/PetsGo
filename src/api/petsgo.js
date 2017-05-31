import server from './server';

export default {
  createSession: ({ username, password }) => (
    server.post('/sessions', {
      username,
      password
    })
    .then(response => response.meta.token)
  ),
  destroySession: () => (
    server.delete('/sessions')
  ),
  refreshSession: () => (
    server.post('/sessions/refresh')
  ),
  createUser: (data) => (
    server.post('/users', {
      ...data
    })
    .then(response => response.meta.token)
  ),
  getAllPosts: () => (
    server.get('/posts')
    .then(response => response.data)
  ),
  createPost: ({ title, content, type }) => (
    server.post('/posts', {
      title,
      content,
      type
    })
    .then(response => response.data)
  )
};
