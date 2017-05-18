import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

export default SearchMap = ({ style }) => (
  <View style={style}>
    <MapView
      style={styles.map}
      region={{
        latitude: 22.6426664,
        longitude: 120.3284185,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 22.6426664,
          longitude: 120.3284185,
        }}
        title="test title"
        description="test description"
      />
    </MapView>
  </View>
);
