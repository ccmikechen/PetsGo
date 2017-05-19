import React from 'react';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import SearchOptionToggleMenu from '../SearchOptionToggleMenu';
import SearchMap from '../../components/SearchMap';
import SearchLocationInfo from '../../components/SearchLocationInfo';
import styles from './styles';
import { fetchStoresInfo, updateRegion } from '../../actions/searchActions';


class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  getGeolocation = () => (
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        },
        {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
      );
    })
  )

  componentWillMount() {
    this.getGeolocation().then((position) => {
      this.props.fetchStoresInfo(position);
    });
  }

  render() {
    let { options, locations, region, updateRegion } = this.props;

    let filterdLocations = Object.keys(locations).reduce((list, key) => {
      let loc = locations[key];
      if (options[key].actived) {
        return [...list, ...loc];
      } else {
        return list;
      }
    }, []);

    let setLocationsColor = (locations) => locations.map((location) => {
      const colorMap = {
        hospital: 'red',
        restaurant: 'orange',
        salon: 'purple',
        necessities: 'green'
      };
      return {...location, color: colorMap[location.type]};
    });

    return (
      <View style={styles.container}>
        <SearchOptionToggleMenu style={styles.optionToggleMenu}/>
        <SearchMap
          style={styles.map}
          region={region}
          locations={setLocationsColor(filterdLocations)}
          onRegionChange={updateRegion}
        />
        <SearchLocationInfo style={styles.info}/>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    locations: state.getIn(['search', 'locations']).toJS(),
    options: state.getIn(['search', 'options']).toJS(),
    region: state.getIn(['search', 'region']).toJS()
  }),
  { fetchStoresInfo, updateRegion }
)(Search);
