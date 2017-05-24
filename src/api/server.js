import { AsyncStorage, Platform } from 'react-native';


const API = Platform.OS == 'ios' ?
  "https://test.bearlab.io/api" :
  "http://test.bearlab.io/api";


const getToken = async () => {
  const token = await AsyncStorage.getItem('@session:token');
  return token && JSON.parse(token) || '';
};

const headers = () => {
  const jsonToken = getToken();

  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer: ${jsonToken}`
  };
};

const parseResponse = (response) => {
  return response.json().then((json) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
};

const queryString = (params) => {
  const query = Object.keys(params)
                      .map(k =>
                         `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
                      .join('&');
  return `${query.length ? '?' : ''}${query}`;
};

export default {
  fetch(url, params = {}) {
    return fetch(`${API}${url}${queryString(params)}`, {
      method: 'GET',
      headers: headers()
    })
    .then(parseResponse);
  },

  post(url, data) {
    const body = JSON.stringify(data);
    console.log(body);
    return fetch(`${API}${url}`, {
      method: 'POST',
      headers: headers(),
      body
    })
    .then(parseResponse);
  },

  patch(url, data) {
    const body = JSON.stringify(data);

    return fetch(`${API}${url}`, {
      method: 'PATCH',
      headers: headers(),
      body
    })
    .then(parseResponse);
  },

  delete(url) {
    return fetch(`${API}${url}`, {
      method: 'DELETE',
      headers: headers()
    })
    .then(parseResponse);
  }
};
