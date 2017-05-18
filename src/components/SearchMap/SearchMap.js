import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

export default SearchMap = ({ style, locations }) => (
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
      {locations.map(location => (
        <MapView.Marker
          coordinate={{
            latitude: location.coordinate.lat,
            longitude: location.coordinate.lng
          }}
          title={location.name}
          description={location.address}
        />
      ))}
    </MapView>
  </View>
);
