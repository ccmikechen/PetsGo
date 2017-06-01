import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import styles from './styles';

export default NewPostInput = ({ style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <View style={styles.title}>
      <TextInput
        placeholder="標題"
        placeholderTextColor="rgb(171, 170, 171)"
        style={{
          fontSize: 20
        }}
        underlineColorAndroid="transparent"
        maxLength={30}
      />
    </View>
    <View style={styles.content}>
      <AutoGrowingTextInput
        placeholder="內容"
        placeholderTextColor="rgb(171, 170, 171)"
        style={{
          fontSize: 18,
          height: '100%'
        }}
        underlineColorAndroid="transparent"
      />
    </View>
  </View>
);
