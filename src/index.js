import {
  AsyncStorage
} from 'react-native';
import {
  startMainApp,
  startLoginApp
} from './apps';

const getToken = async () => {
  return await AsyncStorage.getItem('@session:token');
};

const startApp = () => {
  getToken().then((token) => {
    if (token) {
      startMainApp();
    } else {
      startLoginApp();
    }
  });
};

export default startApp;
