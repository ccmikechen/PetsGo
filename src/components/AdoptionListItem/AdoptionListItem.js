import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default AdoptionListItem = ({ onPress, image, address, sex, key }) => (
  <View style={styles.listItem} key={key}>
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <View style={styles.container} elevation={5}>
        {image == '' ?
          <Image
            style={styles.image}
            source={require('../../../img/No-image-found.jpg')}
          /> :
          <Image
            style={styles.image}
            source={{uri: image}}
          />
        }

        <Text style={styles.address}>
          {address}
        </Text>
        <Image
          style={styles.sexIcon}
          source={sex == 'M' ?
            require('../../../img/sex_M.png') :
            require('../../../img/sex_F.png')
          } />
      </View>
    </TouchableWithoutFeedback>
  </View>
);
