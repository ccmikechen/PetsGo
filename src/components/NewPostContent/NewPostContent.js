import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform
} from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import styles from './styles';

export default NewPostContent = ({ style, onChange, ...restInput }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <View style={styles.content}>
      <AutoGrowingTextInput
        multiline={true}
        placeholder="內容"
        placeholderTextColor="rgb(171, 170, 171)"
        style={{
          fontSize: 22,
          height: '100%'
        }}
        underlineColorAndroid="transparent"
        autoCapitalize= {"none"}
        onChangeText= {onChange}
        blurOnSubmit={false}
        returnKeyType='done'
        {...restInput}
      />
    </View>
  </View>
);
