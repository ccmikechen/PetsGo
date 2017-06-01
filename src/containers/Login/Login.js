import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
<<<<<<< HEAD
import {
  updateUsername,
  updatePassword,
  login
} from '../../actions/sessionActions';
=======

>>>>>>> add login screen

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

<<<<<<< HEAD
  onSignUp() {
    this.props.navigator.showModal({
      screen:'petsgo.SignUpScreen',
      title:'註冊',
      passProps: {},
      animated:true,
      animationType: 'slide-up'
    });
  }
=======
>>>>>>> add login screen

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:20,textAlign:'center'}}>PetsGo</Text>
<<<<<<< HEAD
        <Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}>帳號密碼錯誤</Text>
=======
>>>>>>> add login screen
        <Fumi
          style={{marginTop:10,height:60}}
          label={'Username'}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
<<<<<<< HEAD
          iconColor={'#367286'}
          onChangeText={(text) => this.props.updateUsername(text)}
          autoCapitalize={"none"}
=======
          iconColor={'#f95a25'}
>>>>>>> add login screen
        />
        <Fumi
          style={{marginTop:10,height:60,marginBottom:20}}
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
<<<<<<< HEAD
          iconColor={'#367286'}
          secureTextEntry={true}
          onChangeText={(text) => this.props.updatePassword(text)}
          autoCapitalize={"none"}
        />
        <Button
          title="登入"
          onPress={() => this.props.login()}
        />
        <Button
          navigator={this.props.navigator}
          title="註冊"
          onPress={() => this.onSignUp()}
        />
=======
          iconColor={'#f95a25'}
        />
        <Button title="登入"/>
>>>>>>> add login screen
      </View>
    );
  }
}

<<<<<<< HEAD
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
=======
export default Login;
>>>>>>> add login screen
