import React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
                <View>
                  <Text>
                    Hello, World!
                  </Text>
                </View>
        );
    }
}

export default MainScreen;
