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
      title: 'petsgo',
      icon: require('../img/首頁.png'),
      navigatorStyle: {},
    },
    {
      screen: 'petsgo.HomeScreen',
      title: 'petsgo',
      icon: require('../img/地圖.png'),
      navigatorStyle: {},
    },
    {
      screen: 'petsgo.HomeScreen',
      title: 'petsgo',
      icon: require('../img/相機.png'),
      navigatorStyle: {},
    },
    {
      screen: 'petsgo.HomeScreen',
      title: 'petsgo',
      icon: require('../img/領養.png'),
      navigatorStyle: {},
    },
    {
      screen: 'petsgo.HomeScreen',
      title: 'petsgo',
      icon: require('../img/個人資訊.png'),
      navigatorStyle: {},
    }
  ],
  passProps: {},
  animationType: ''
});
