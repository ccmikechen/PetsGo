import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Button from 'apsl-react-native-button';
import SideMenuHeader from '../../components/SideMenuHeader';
import styles from './styles';
import {
  getCurrentAccount,
  logout
} from '../../actions/sessionActions';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    this.props.getCurrentAccount();
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <View style={styles.container}>
        <SideMenuHeader
          image={this.props.image}
          name={`${this.props.firstName}${this.props.lastName}`}
          username={this.props.username}
        />
        <View
          style={styles.menu}
        />
        <Button
          style={styles.logoutButton}
          textStyle={styles.logoutButtonText}
          onPress={this.handleLogout}
        >
          登出
        </Button>
      </View>
    );
  }
}

export default connect((state) => ({
  username: state.getIn(['session', 'user', 'username']),
  firstName: state.getIn(['session', 'user', 'firstName']),
  lastName: state.getIn(['session', 'user', 'lastName']),
  image: state.getIn(['session', 'user', 'image'])
}), {
  getCurrentAccount,
  logout
})(UserInfo);
