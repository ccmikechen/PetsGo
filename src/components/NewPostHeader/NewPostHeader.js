import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';

const _onSelect = (idx, value, onSelect) => (console.log(idx, value,onSelect()))
export default NewPostHeader = ({ style, onChange, ...restInput }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Image
      style={styles.image}
      source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
    />
    <View>
      <Text style={styles.username}>台南金城武</Text>
      <ModalDropdown
        style={styles.type}
        textStyle={{fontSize:15, color:'#FFF'}}
        dropdownStyle={{width: 100,
          height: 150,
          borderColor: 'cornflowerblue',
          borderWidth: 1,
        borderRadius: 3,}}
        dropdownTextStyle={{fontSize:15,textAlign: 'center',
        textAlignVertical: 'center',}}
        dropdownTextHighlightStyle={{backgroundColor:'#56d5c6'}}
        defaultValue='分類 v'
        options={['活動', '協尋', '送養', '看護']}
        onSelect={onChange}
        {...restInput}
      />

    </View>
  </View>
);
