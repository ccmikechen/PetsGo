import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator
} from 'react-native';
import Button from 'apsl-react-native-button';
import styles from './styles';
import { Hoshi } from 'react-native-textinput-effects';
import { reduxForm, Field } from 'redux-form/immutable';
import {
  updateUsername,
  updatePassword,
  createAccount
} from '../../actions/sessionActions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  onSignUp() {
    this.props.navigator.showModal({
      screen: 'petsgo.SignUpScreen',
      title: '註冊',
      passProps: {},
      animated: true,
      animationType: 'slide-up'
    });
  }

  onSubmit(values) {
    //console.log(this.props);
    console.log('submitting form', values);
    this.props.createAccount({
      username: values.get('username'),
      password: values.get('password'),
      email: values.get('email'),
      first_name: values.get('firstname'),
      last_name: values.get('lastname'),
      sex: values.get('sex')
    });
  }

  renderInput(label, isPassword) {
    return ({ input: { onChange, ...restInput }}) => (
      <Hoshi
        style={{marginTop:0,flex:1}}
        label={label}
        borderColor={'#b76c94'}
        autoCapitalize={"none"}
        secureTextEntry={isPassword}
        onChangeText={onChange}
        {...restInput}
      />
    );
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
        <ScrollView style={styles.container}>
          <Text style={{color:"#388057",fontSize:16,textAlign:'center'}}>PetsGo</Text>
          {/*<Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}></Text>*/}
          <Field name="username" component={this.renderInput('Username')} />
          <Field name="password" component={this.renderInput('Password', true)} />
          <Field name="email" component={this.renderInput('Email')} />
          <Field name="firstname" component={this.renderInput('Firstname')} />
          <Field name="lastname" component={this.renderInput('Lastname')} />

          <Button
            style={styles.signup}
            textStyle={{color:'white'}}
            onPress={this.props.handleSubmit(this.onSubmit.bind(this))}
          >
            註冊
          </Button>
        </ScrollView>
        {this.props.isSigningUp? this.renderCover() : null}
      </View>
    );
  }
}

const SignUpForm = reduxForm({
  form: 'SignUp'
})(SignUp);

export default connect((state) => ({
  isSigningUp: state.getIn(['session', 'signUp', 'isSigningUp'])
}), { createAccount })(SignUpForm);
