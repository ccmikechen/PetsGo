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
    let icon = options.hospital.actived ?
      require('../../../img/user.png') :
      require('../../../img/home.png');

    return (
      <View style={containerStyle}>
        <SearchOptionToggleButton
          style={styles.button}
          title="動物醫院"
          onPress={this.handleToggleOption('hospital')}
          icon={icon}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物餐廳"
          onPress={this.handleToggleOption('restaurant')}
          icon={require('../../../img/user.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物美容"
          onPress={this.handleToggleOption('salon')}
          icon={require('../../../img/user.png')}
        />
        <SearchOptionToggleButton
          style={styles.button}
          title="寵物用品店"
          onPress={this.handleToggleOption('necessities')}
          icon={require('../../../img/user.png')}
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
