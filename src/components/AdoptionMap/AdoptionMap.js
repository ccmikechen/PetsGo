import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const AdoptionMap = ({ style, shelters, region }) => (
  <View style={style}>
    <MapView
      style={styles.map}
      region={region}
    >
      {shelters.map(location => (
        <MapView.Marker
          coordinate={{
            latitude: location.coordinate.lat,
            longitude: location.coordinate.lng
          }}
          title={location.name}
          description={location.address}
          key={location.id}
          pinColor='red'
        />
      ))}
    </MapView>
  </View>
);

export default AdoptionMap;
