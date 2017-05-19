import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';

export default SearchLocationInfo = (props) => (
  <View style={props.style} >
    <View style={styles.lefttext}>
      <Text style={styles.storename}>向日葵動物醫院</Text>
      <Text style={styles.storeinfo}>(07)3134134</Text>
      <Text style={styles.storeinfo}>807高雄市三民區正忠路352號</Text>
      <Text style={styles.storeinfo}>目前營業中</Text>
    </View>
    <View style={styles.righttext}>
      <View style={styles.markerView}>
        <Image
          style={styles.marker}
          source={require('../../../img/marker.png')}/>
        <Text style={styles.markertext}>300m</Text>
      </View>
      <TouchableOpacity >
        <View style={styles.navigationView}>
          <Image
            style={styles.navigation}
            source={require('../../../img/navigation.png')}/>
          <Text style={styles.navigationtext}>導航</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);
