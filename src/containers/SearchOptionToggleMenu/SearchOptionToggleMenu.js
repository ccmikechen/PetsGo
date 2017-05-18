import React from 'react';
import { connect } from 'react-redux';
import { View, Button, StyleSheet, Alert } from 'react-native';
import SearchOptionToggleButton from '../../components/SearchOptionToggleButton';
import styles from './styles';
import { toggleOption } from '../../actions/searchActions';

class SearchOptionToggleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleOption = this.handleToggleOption.bind(this);
  }

  handleToggleOption = (optionType) => () => {
    let toggleState = !this.props.options[optionType].actived;
    this.props.toggleOption(optionType, toggleState);
  }

  render() {
    let { style, options } = this.props;
    let containerStyle = StyleSheet.flatten([styles.container, style]);
    let icons = {
      hospital: options.hospital.actived ?
        require('../../../img/hospital_red.png') :
        require('../../../img/hospital_black.png'),
      restaurant: options.restaurant.actived ?
        require('../../../img/restaurant_red.png') :
        require('../../../img/restaurant_black.png'),
      salon: options.salon.actived ?
        require('../../../img/salon_red.png') :
        require('../../../img/salon_black.png'),
      necessities: options.necessities.actived ?
        require('../../../img/necessities_red.png') :
        require('../../../img/necessities_black.png'),
    };

    return (
      <View style={containerStyle}>
        <SearchOptionToggleButton
          style={styles.button}
          title="動物醫院"
          onPress={this.handleToggleOption('hospital')}
          icon={icons.hospital}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物餐廳"
          onPress={this.handleToggleOption('restaurant')}
          icon={icons.restaurant}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物美容"
          onPress={this.handleToggleOption('salon')}
          icon={icons.salon}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物用品店"
          onPress={this.handleToggleOption('necessities')}
          icon={icons.necessities}
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    options: state.getIn(['search', 'options']).toJS()
  }),
  { toggleOption }
)(SearchOptionToggleMenu);
