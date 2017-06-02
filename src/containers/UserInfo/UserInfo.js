import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
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

  renderTitle(title) {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  renderContent(content) {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  }

  render() {
    let { username, firstName, lastName, email, phoneNumber } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageUsernameRow} elevation={3}>
          <Image
            style={styles.image}
            source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
          />
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>@{this.props.username}</Text>
          </View>
        </View>
        <View style={styles.row} elevation={3}>
          <View style={styles.column}>
            {this.renderTitle('姓')}
            {this.renderContent(firstName)}
          </View>
          <View style={styles.column}>
            {this.renderTitle('名')}
            {this.renderContent(lastName)}
          </View>
        </View>
        <View style={styles.row} elevation={3}>
          <View style={styles.column}>
            {this.renderTitle('信箱')}
            {this.renderContent(email)}
          </View>
        </View>
        <View style={styles.row} elevation={3}>
          <View style={styles.column}>
            {this.renderTitle('電話')}
            {this.renderContent(phoneNumber)}
          </View>
        </View>
      </View>
    );
  }
}

export default connect((state) => ({
  username: state.getIn(['session', 'user', 'username']),
  sex: state.getIn(['session', 'user', 'sex']),
  phoneNumber: state.getIn(['session', 'user', 'phoneNumber']),
  firstName: state.getIn(['session', 'user', 'firstName']),
  lastName: state.getIn(['session', 'user', 'lastName']),
  image: state.getIn(['session', 'user', 'image']),
  id: state.getIn(['session', 'user', 'id']),
  email: state.getIn(['session', 'user', 'email']),
  birthday: state.getIn(['session', 'user', 'birthday'])
}), {
  getCurrentAccount
})(UserInfo);
