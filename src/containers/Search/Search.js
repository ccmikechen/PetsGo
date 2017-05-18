import React from 'react';
import { View } from 'react-native';
import SearchOptionToggleMenu from '../SearchOptionToggleMenu';
import SearchMap from '../../components/SearchMap';
import styles from './styles';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchOptionToggleMenu style={styles.optionToggleMenu}/>
        <SearchMap style={styles.map}/>
      </View>
    );
  }
}

export default Search;
