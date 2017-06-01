import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const filterLocations = (locations) => {
  let idSet = new Set();

  return locations.filter(location => {
    if (idSet.has(location.id)) {
      return false;
    } else {
      idSet.add(location.id);
      return true;
    }
  });
};

export default SearchMap = ({ style, locations, region, onRegionChange }) => (
  <View style={style}>
    <MapView
      style={styles.map}
      region={region}
      onRegionChange={onRegionChange}
    >
      {filterLocations(locations).map(location => (
        <MapView.Marker
          coordinate={{
            latitude: location.coordinate.lat,
            longitude: location.coordinate.lng
          }}
          title={location.name}
          description={location.address}
          key={location.id}
          pinColor={location.color}
        />
      ))}
    </MapView>
  </View>
);
