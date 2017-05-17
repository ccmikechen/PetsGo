import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
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
  }
}

export default Search;
