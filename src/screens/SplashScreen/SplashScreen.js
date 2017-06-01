import React from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 50,
          fontWeight: 'bold'
        }}>
          PetsGo
        </Text>
      </View>
    );
  }
}

export default SplashScreen;
