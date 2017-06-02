import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../store';
import AppDrawer from './AppDrawer';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import CameraScreen from './CameraScreen';
import AdoptScreen from './AdoptScreen';
import InfoScreen from './InfoScreen';
import NewPostScreen from './NewPostScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import PostScreen from './PostScreen';

export function registerScreens() {
  Navigation.registerComponent('petsgo.AppDrawer', () => AppDrawer, store, Provider);
  Navigation.registerComponent('petsgo.SplashScreen', () => SplashScreen, store, Provider);
  Navigation.registerComponent('petsgo.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('petsgo.SignUpScreen', () => SignUpScreen, store, Provider);
  Navigation.registerComponent('petsgo.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('petsgo.SearchScreen', () => SearchScreen, store, Provider);
  Navigation.registerComponent('petsgo.CameraScreen', () => CameraScreen, store, Provider);
  Navigation.registerComponent('petsgo.AdoptScreen', () => AdoptScreen, store, Provider);
  Navigation.registerComponent('petsgo.InfoScreen', () => InfoScreen, store, Provider);
  Navigation.registerComponent('petsgo.NewPostScreen', () => NewPostScreen, store, Provider);
  Navigation.registerComponent('petsgo.PostScreen', () => PostScreen, store, Provider);
}
