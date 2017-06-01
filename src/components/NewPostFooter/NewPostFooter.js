import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default NewPostFooter = (props) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../../img/newpost_picture.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../../img/newpost_camera.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../../img/newpost_video.png')}
      />
    </TouchableOpacity>
  </View>
);
