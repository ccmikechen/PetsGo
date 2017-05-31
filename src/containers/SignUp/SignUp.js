import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Picker, TextInput } from 'react-native';
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
    console.log('submitting form', values.get('username'));
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
        style={{marginTop:2}}
        label={label}
        borderColor={'#b76c94'}
        autoCapitalize={"none"}
        secureTextEntry={isPassword}
        onChangeText={onChange}
        {...restInput}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:20,textAlign:'center'}}>PetsGo</Text>
        <Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}></Text>
        <Field name="username" component={this.renderInput('Username')} />
        <Field name="password" component={this.renderInput('Password', true)} />
        <Field name="email" component={this.renderInput('Email')} />
        <Field name="firstname" component={this.renderInput('Firstname')} />
        <Field name="lastname" component={this.renderInput('Lastname')} />
        <Field name="sex" component={this.renderInput('sex')} />
        <Button
          title="註冊"
          onPress={this.props.handleSubmit(this.onSubmit.bind(this))}
        />
      </View>
    );
  }
}

const SignUpForm = reduxForm({
  form: 'SignUp'
})(SignUp);

export default connect(null, { createAccount })(SignUpForm);
