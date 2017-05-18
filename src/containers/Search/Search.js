import React from 'react';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import SearchOptionToggleMenu from '../SearchOptionToggleMenu';
import SearchMap from '../../components/SearchMap';
import styles from './styles';
import { fetchStoresInfo } from '../../actions/searchActions';

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
    let { options, locations } = this.props;
    let filterdLocations = Object.keys(locations).reduce((list, key) => {
      let loc = locations[key];
      if (options[key].actived) {
        return [...list, ...loc];
      } else {
        return list;
      }
    }, []);

    return (
      <View style={styles.container}>
        <SearchOptionToggleMenu style={styles.optionToggleMenu}/>
        <SearchMap
          style={styles.map}
          locations={filterdLocations}
          />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    locations: state.getIn(['search', 'locations']).toJS(),
    options: state.getIn(['search', 'options']).toJS()
  }),
  { fetchStoresInfo }
)(Search);
