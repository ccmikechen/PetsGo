import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import styles from './styles';
import { logout } from '../../actions/sessionActions';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='LOGOUT' onPress={this.handleLogout} />
      </View>
    );
  }
}

export default connect(
  null, {
    logout
  }
)(AppDrawer);
