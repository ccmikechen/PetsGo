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

  onSignUp() {
    this.props.navigator.showModal({
      screen:'petsgo.SignUpScreen',
      title:'註冊',
      passProps: {},
      animated:true,
      animationType: 'slide-up'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:20,textAlign:'center'}}>PetsGo</Text>
        <Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}>帳號密碼錯誤</Text>
        <Fumi
          style={{marginTop:10,height:60}}
          label={'Username'}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={'#367286'}
          onChangeText={(text) => this.props.updateUsername(text)}
          autoCapitalize={"none"}
        />
        <Fumi
          style={{marginTop:10,height:60,marginBottom:20}}
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
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
