import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default SearchOptionToggleButton = (props) => (
  <View
    style={props.style}
  >
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <View
        style={styles.toggleButton}
      >
        <Image style={styles.icon} source={props.icon} />
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);
