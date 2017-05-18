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
          title="動物醫院"
          icon={require('../../../img/user.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物餐廳"
          icon={require('../../../img/user.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物美容"
          icon={require('../../../img/user.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物用品店"
          icon={require('../../../img/user.png')}
        />
      </View>
    );
  }
}

export default SearchOptionToggleMenu;
