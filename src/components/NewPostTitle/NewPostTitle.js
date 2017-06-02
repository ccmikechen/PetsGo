import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';
import styles from './styles';

export default NewPostTitle = ({ style, onChange , ...restInput }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <View style={styles.title}>
      {Platform.OS == 'ios' ?
        <TextInput
          placeholder="標題"
          placeholderTextColor="rgb(171, 170, 171)"
          style={{
            fontSize: 22,
            height:30
          }}
          underlineColorAndroid="transparent"
          maxLength={30}
          autoCapitalize={"none"}
          onChangeText={onChange}
          {...restInput}
        />
        :
        <TextInput
          placeholder="標題"
          placeholderTextColor="rgb(171, 170, 171)"
          style={{
            fontSize: 22
          }}
          underlineColorAndroid="transparent"
          maxLength={30}
          autoCapitalize={"none"}
          onChangeText={onChange}
          {...restInput}
        />
      }
    </View>
  </View>
);
