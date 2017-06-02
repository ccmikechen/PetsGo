import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

export default SideMenuHeader = ({ style, name, username }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    <Image
      style={styles.image}
      source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
    />
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.username}>@{username}</Text>
      </View>
    </View>
  </View>
);
