import {
  Platform
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

export const startSplashApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'petsgo.SplashScreen',
      navigatorStyle: {
        navBarHidden: true,
        drawUnderNavBar: true
      }
    }
  });
};

const navigatorStyle = {
  navBarBackgroundColor: '#AADDEE',
  navBarTextColor: '#FFFFFF'
};

export const startMainApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'petsgo.HomeScreen',
        title: '首頁',
        icon: require('../img/home.png'),
        navigatorStyle,
      }, {
        screen: 'petsgo.SearchScreen',
        title: '探索週邊',
        icon: require('../img/map.png'),
        navigatorStyle,
      }, {
        screen: 'petsgo.CameraScreen',
        title: '拍照',
        icon: require('../img/camera.png'),
        navigatorStyle,
      }, {
        screen: 'petsgo.AdoptScreen',
        title: '寵物認養',
        icon: require('../img/adopt.png'),
        navigatorStyle,
      }, {
        screen: 'petsgo.InfoScreen',
        title: '個人資訊',
        icon: require('../img/user.png'),
        navigatorStyle,
      }
    ],
    drawer: {
      left: {
        screen: 'petsgo.AppDrawer',
        passProps: {}
      }
    },
    passProps: {},
    animationType: ''
  });
};

export const startLoginApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'petsgo.LoginScreen',
      navigatorStyle: {
        navBarHidden: true,
        drawUnderNavBar: true
      }
    }
  });
};
