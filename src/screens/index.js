import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import MainScreen from  './MainScreen';

export function registerScreens() {
  Navigation.registerComponent('petsgo.MainScreen', () => MainScreen, store, Provider);
}
