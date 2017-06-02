import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import Button from 'apsl-react-native-button';
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

  onSignUp() {
    this.props.navigator.showModal({
      screen:'petsgo.SignUpScreen',
      title:'註冊',
      passProps: {},
      navigatorStyle: {
        navBarBackgroundColor: '#AADDEE',
        navBarTextColor: '#FFFFFF'
      },
      animated:true,
      animationType: 'slide-up'
    });
  }

  renderCover() {
    return (
      <View style={styles.cover}>
        <ActivityIndicator
          animating={true}
          size='large'
          color='grey'
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:20,textAlign:'center'}}>PetsGo</Text>
        <Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}>{this.props.error}</Text>
        <Fumi
          style={styles.fumi}
          label={'Username'}
          iconClass={FontAwesomeIcon}
          iconName={'user'}
          iconColor={'#367286'}
          onChangeText={(text) => this.props.updateUsername(text)}
          autoCapitalize={"none"}
        />
        <Fumi
          style={styles.fumi}
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          iconColor={'#367286'}
          secureTextEntry={true}
          onChangeText={(text) => this.props.updatePassword(text)}
          autoCapitalize={"none"}
        />
        <Button
          style={styles.login}
          textStyle={{color:'white'}}
          onPress={() => this.props.login()}
        >
          登入
        </Button>
        <Button
          style={styles.signup}
          textStyle={{color:'white'}}
          navigator={this.props.navigator}
          onPress={() => this.onSignUp()}
        >
          註冊
        </Button>
        {this.props.isLoggingIn? this.renderCover() : null}
      </View>
    );
  }
}

export default connect((state) => ({
  username: state.getIn(['session', 'username']),
  password: state.getIn(['session', 'password']),
  isAuthenticated: state.getIn(['session', 'isAuthenticated']),
  isLoggingIn: state.getIn(['session', 'login', 'isLoggingIn'])
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
