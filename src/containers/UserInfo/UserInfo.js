import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styles from './styles';
import {
  getCurrentAccount
} from '../../actions/sessionActions';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getCurrentAccount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username: {this.props.username}</Text>
        <Text>Sex: {this.props.sex}</Text>
        <Text>Phone: {this.props.phoneNumber}</Text>
        <Text>Name: {this.props.firstName}{this.props.lastName}</Text>
        <Text>Email: {this.props.email}</Text>
      </View>
    );
  }
}

export default connect((state) => ({
  username: state.getIn(['session', 'user', 'username']),
  sex: state.getIn(['session', 'user', 'sex']),
  phoneNumber: state.getIn(['session', 'user', 'phoneNumber']),
  first_name: state.getIn(['session', 'user', 'firstName']),
  last_name: state.getIn(['session', 'user', 'lastName']),
  image: state.getIn(['session', 'user', 'image']),
  id: state.getIn(['session', 'user', 'id']),
  email: state.getIn(['session', 'user', 'email']),
  birthday: state.getIn(['session', 'user', 'birthday'])
}), {
  getCurrentAccount
})(UserInfo);
