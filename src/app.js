import {
  Platform
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'petsgo.HomeScreen',
      title: '首頁',
      icon: require('../img/home.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.SearchScreen',
      title: '探索週邊',
      icon: require('../img/map.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.CameraScreen',
      title: '拍照',
      icon: require('../img/camera.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.AdoptScreen',
      title: '寵物認養',
      icon: require('../img/adopt.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.LoginScreen',
      title: '個人資訊',
      icon: require('../img/user.png'),
      navigatorStyle: {},
    }
  ],
  passProps: {},
  animationType: ''
});
