import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import ModalDropdown from 'react-native-modal-dropdown';

const _adjustFrame= (style) => {
  //console.log(`frameStyle={width:${style.width}, height:${style.height}, top:${style.top}, left:${style.left}, right:${style.right}}`);
  style.top += 75;
  return style;
}
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
        dropdownStyle={{width: 120,
          height: 150,
          borderColor: 'cornflowerblue',
          borderWidth: 1,
        borderRadius: 3,}}
        dropdownTextStyle={{fontSize:16,textAlign: 'center',
        textAlignVertical: 'center',}}
        dropdownTextHighlightStyle={{backgroundColor:'#56d5c6'}}
        adjustFrame={style => _adjustFrame(style)}
        defaultValue='未選分類 v'
        options={['活動', '協尋', '送養', '看護']}
        onSelect={onChange}
        {...restInput}
      />

    </View>
  </View>
);
