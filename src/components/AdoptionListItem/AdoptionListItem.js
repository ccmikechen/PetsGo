import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default AdoptionListItem = ({ onPress, animal }) => (
  <View style={styles.listItem} key={animal.key}>
    <TouchableWithoutFeedback
      onPress={onPress(animal)}
    >
      <View style={styles.container} elevation={5}>
        {animal.image == '' ?
          <Image
            style={styles.image}
            source={require('../../../img/noimagefound.png')}
          /> :
          <Image
            style={styles.image}
            source={{uri: animal.image}}
          />
        }

        <Text style={styles.address}>
          {animal.address}
        </Text>
        <Image
          style={styles.sexIcon}
          source={animal.sex == 'M' ?
            require('../../../img/sex_M.png') :
            require('../../../img/sex_F.png')
          }
        />
      </View>
    </TouchableWithoutFeedback>
  </View>
);
