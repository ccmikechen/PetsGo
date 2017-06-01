import {
  AsyncStorage
} from 'react-native';

import {
  startMainApp,
  startLoginApp,
  startSplashApp
} from './apps';

import petsgo from './api/petsgo';

const startApp = () => {
  startSplashApp();
  petsgo.refreshSession()
  .then(() => {
    startMainApp();
  })
  .catch((err) => {
    startLoginApp();
  });
};

export default startApp;
