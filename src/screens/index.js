import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CameraScreen from './CameraScreen';
import AdoptScreen from './AdoptScreen';
import InfoScreen from './InfoScreen';

export function registerScreens() {
  Navigation.registerComponent('petsgo.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('petsgo.SearchScreen', () => SearchScreen, store, Provider);
  Navigation.registerComponent('petsgo.CameraScreen', () => CameraScreen, store, Provider);
  Navigation.registerComponent('petsgo.AdoptScreen', () => AdoptScreen, store, Provider);
  Navigation.registerComponent('petsgo.InfoScreen', () => InfoScreen, store, Provider);
}
