import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';


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
        />
        <Fumi
          style={{marginTop:10,height:60,marginBottom:20}}
          label={'Password'}
          iconClass={FontAwesomeIcon}
          iconName={'lock'}
          iconColor={'#f95a25'}
        />
        <Button title="登入"/>
      </View>
    );
  }
}

export default Login;
