import React from 'react';
import SignUp from '../../containers/SignUp';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SignUp navigator={this.props.navigator} />
    );
  }
}

export default SignUpScreen;
