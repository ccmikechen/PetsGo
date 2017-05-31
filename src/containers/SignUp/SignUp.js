import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Picker, TextInput } from 'react-native';
import styles from './styles';
import { Hoshi } from 'react-native-textinput-effects';
import { reduxForm, Field } from 'redux-form/immutable';
import {
  updateUsername,
  updatePassword,
  login
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
    console.log('submitting form', values)
  }

  renderInput(label, isPassword) {
    return ({ input: { onChange, ...restInput }}) => (
      <Hoshi
        style={{marginTop:10}}
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
        <Button
          title="註冊"
          onPress={this.props.handleSubmit(this.onSubmit.bind(this))}
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'SignUp'
})(SignUp);
