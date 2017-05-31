import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, Picker, TextInput } from 'react-native';
import styles from './styles';
import { Hoshi } from 'react-native-textinput-effects';
import { reduxForm, Field } from 'redux-form';
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
      screen:'petsgo.SignUpScreen',
      title:'註冊',
      passProps: {},
      animated:true,
      animationType: 'slide-up'
    });
  }

  submit = values => {
    //console.log(this.props);
    console.log('submitting form', values)
  }

  renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.input} autoCapitalize={"none"} onChangeText={onChange} {...restInput} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:"#388057",fontSize:20,textAlign:'center'}}>PetsGo</Text>
        <Text style={{color:"rgb(232, 79, 30)",fontSize:14,textAlign:'center',marginTop:20}}></Text>
        <Field name="username" component={this.renderInput} />
        <Hoshi
          style={{marginTop:10}}
          label={'Username'}
          borderColor={'#b76c94'}
          onChangeText={(text) => this.props.updateUsername(text)}
          autoCapitalize={"none"}
        />
        <Hoshi
          style={{marginTop:10}}
          label={'Password'}
          borderColor={'#b76c94'}
          secureTextEntry={true}
          onChangeText={(text) => this.props.updatePassword(text)}
          autoCapitalize={"none"}
        />
        <Hoshi
          style={{marginTop:10,height:14,marginBottom:20}}
          label={'Email Address'}
          borderColor={'#b76c94'}
          secureTextEntry={true}
          onChangeText={(text) => this.props.updatePassword(text)}
          autoCapitalize={"none"}
        />
        <Button
          title="註冊"
          onPress={this.props.handleSubmit(this.submit)}
        />
      </View>
    );
  }
}

export default reduxForm({
  form: 'SignUp'
})(SignUp);
