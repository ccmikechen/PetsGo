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

const Item = Picker.Item;
class SignUp extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
  }
  state = {
    sex:0,
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



  renderPicker() {
    return ({ input, label, meta: {touched, error}, children, ...custom })  => (
       <Picker
         {...input}
         selectedValue={input.value}
         onChange={input.onChange}
         children={children} {...custom} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:16,textAlign:'center'}}>PetsGo</Text>
        {/*<Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}></Text>*/}
        <Field name="username" component={this.renderInput('Username')} />
        <Field name="password" component={this.renderInput('Password', true)} />
        <Field name="email" component={this.renderInput('Email')} />
        <Field name="firstname" component={this.renderInput('Firstname')} />
        <Field name="lastname" component={this.renderInput('Lastname')} />
        <Field name="sex" mode="dropdown" component={this.renderPicker()} >
          <Item label="男" value="0" />
          <Item label="女" value="1" />
          <Item label="其他" value="2" />
        </Field>
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
