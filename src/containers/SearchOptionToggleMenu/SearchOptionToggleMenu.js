import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SearchOptionToggleButton from '../../components/SearchOptionToggleButton';
import styles from './styles';

class SearchOptionToggleMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { style } = this.props;
    let containerStyle = StyleSheet.flatten([styles.container, style]);

    return (
      <View style={containerStyle}>
        <SearchOptionToggleButton
          style={styles.button}
          icon={require('../../../img/hospital_red.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          icon={require('../../../img/restaurant_black.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          icon={require('../../../img/Beauty_black.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          icon={require('../../../img/PetSupplies_black.png')}
        />
      </View>
    );
  }
}

export default SearchOptionToggleMenu;
