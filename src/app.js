import {
  Platform
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'petsgo.MainScreen', // unique ID registered with Navigation.registerScreen
    title: 'petsgo', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: '' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
