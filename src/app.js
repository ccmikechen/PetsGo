import {
  Platform
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [{
      screen: 'petsgo.HomeScreen',
      title: 'petsgo',
      icon: require('../img/one.png'),
      navigatorStyle: {},
    }
  ],
  passProps: {},
  animationType: ''
});
