import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default NewPostHeader = (props) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
    />
    <View>
      <Text style={styles.username}>台南金城武</Text>
      <TouchableOpacity>
        <Text style={styles.type}>分類 v</Text>
      </TouchableOpacity>
    </View>
  </View>
);
