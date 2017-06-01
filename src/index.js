import {
  AsyncStorage
} from 'react-native';

import {
  startMainApp,
  startLoginApp
} from './apps';

import petsgo from './api/petsgo';

const startApp = () => {
  petsgo.refreshSession()
  .then(() => {
    startMainApp();
  })
  .catch(() => {
    startLoginApp();
  });
};

export default startApp;
