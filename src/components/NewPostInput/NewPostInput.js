import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import styles from './styles';

export default class NewPostInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{paddingLeft:5}}>
          <TextInput
            placeholder="請輸入標題"
            placeholderTextColor="rgb(171, 170, 171)"
            style={{fontSize:20,height:20}}
            maxLength={30}
          />
        </View>
        <View style={{paddingLeft:5}}>
          <TextInput
            multiline = {true}
            placeholder="請輸入內容..."
            placeholderTextColor="rgb(171, 170, 171)"
            style={{marginTop:10,fontSize:14}}
          />
        </View>
      </View>
    );
  }
}
