import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default AdoptionListItem = (props) => (
  <View style={props.style}>
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={props.onPress}
    >
      <View style={styles.listItem}>
        <Image style={styles.image} source={props.icon} />
        <View style={styles.info}>
          <View style={styles.addressAndSex}>
            <Text style={styles.address}>
            </Text>
            <View style={styles.sexInfo}>
              <Text style={styles.sex}>
              </Text>
              <Image style={styles.sexIcon}/>
            </View>
          </View>
          <Text style={styles.shelterName}>{props.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </View>
);
