import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import {
  updateUsername,
  updatePassword,
  login
} from '../../actions/sessionActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:20,textAlign:'center'}}>PetsGo</Text>
        <Fumi
          style={{marginTop:10,height:60}}
          label={'Username'}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={'#f95a25'}
          onChangeText={(text) => this.props.updateUsername(text)}
        />
        <Fumi
          style={{marginTop:10,height:60,marginBottom:20}}
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          iconColor={'#f95a25'}
          onChangeText={(text) => this.props.updatePassword(text)}
        />
        <Button
          title="登入"
          onPress={() => this.props.login()}
        />
      </View>
    );
  }
}

export default connect((state) => ({
  username: state.getIn(['session', 'username']),
  password: state.getIn(['session', 'password']),
  isAuthenticated: state.getIn(['session', 'isAuthenticated'])
}), {
  updateUsername, updatePassword, login
}, (stateToProps, dispatchToProps, ownProps) => {
  let { username, password } = stateToProps;
  let { login } = dispatchToProps;
  return {
    ...stateToProps,
    ...dispatchToProps,
    ...ownProps,
    login: login({username, password})
  };
})(Login);
