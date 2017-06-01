import React from 'react';
import SignUp from '../../containers/SignUp';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorButtons = {
    leftButtons: [
      {
        title:'取消',
        id: 'cancel'
      }
    ]
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        this.props.navigator.dismissModal({
          screen:'petsgo.LoginScreen',
          title:'登入',
          passProps: {},
          animated:true,
          animationType: 'slide-down'
        });
      }
    }
  }

  render() {
    return (
      <SignUp navigator={this.props.navigator} />
    );
  }
}

export default SignUpScreen;
