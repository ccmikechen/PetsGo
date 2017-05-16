import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

export default class petsgo extends Component {
  render() {
    return (
        <Text>
          Welcome!
        </Text>
    );
  }
}

AppRegistry.registerComponent('petsgo', () => petsgo);
