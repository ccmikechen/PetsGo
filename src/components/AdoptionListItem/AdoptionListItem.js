import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default AdoptionListItem = ({ onPress, image, address, sex }) => (
  <View style={styles.listItem}>
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles.container} elevation={5}>
        <Image
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.address}>
          {address}
        </Text>
        <Image
          style={styles.sexIcon}
          source={sex == 'M' ?
            require('../../../img/home.png') :
            require('../../../img/user.png')
          } />
      </View>
    </TouchableWithoutFeedback>
  </View>
);
