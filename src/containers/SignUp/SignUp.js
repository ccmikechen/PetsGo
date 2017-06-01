import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import Button from 'apsl-react-native-button';
import styles from './styles';
import { Hoshi } from 'react-native-textinput-effects';
import ModalPicker from 'react-native-modal-picker';
import { reduxForm, Field } from 'redux-form/immutable';
import {
  updateUsername,
  updatePassword,
  createAccount
} from '../../actions/sessionActions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            textInputValue: ''
        }
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
    let index = 0;
        const data = [
            { key: index++, section: true, label: '男' },
            { key: index++, label: '女' },
            { key: index++, label: '其他' }
        ];
    return ({ input: { onChange, ...restInput }})  => (
      <ModalPicker
        data={data}
        initValue="Sex"
        onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
        <TextInput
          style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
          editable={false}
          placeholder="Sex"
          value={this.state.textInputValue}
          {...restInput}
        />

      </ModalPicker>
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
        <Field name="sex" component={this.renderInput('Sex')} />
        <Button
          style={styles.signup}
          textStyle={{color:'white'}}
          onPress={this.props.handleSubmit(this.onSubmit.bind(this))}
        >
          註冊
        </Button>
      </View>
    );
  }
}

const SignUpForm = reduxForm({
  form: 'SignUp'
})(SignUp);

export default connect(null, { createAccount })(SignUpForm);
