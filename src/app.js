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
      icon: require('../img/首頁.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.SearchScreen',
      title: '探索週邊',
      icon: require('../img/地圖.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.CameraScreen',
      title: '拍照',
      icon: require('../img/相機.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.AdoptScreen',
      title: '寵物認養',
      icon: require('../img/領養.png'),
      navigatorStyle: {},
    }, {
      screen: 'petsgo.InfoScreen',
      title: '個人資訊',
      icon: require('../img/個人資訊.png'),
      navigatorStyle: {},
    }
  ],
  passProps: {},
  animationType: ''
});
