import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import NewPostHeader from '../../components/NewPostHeader';
import NewPostInput from '../../components/NewPostInput';
import NewPostFooter from '../../components/NewPostFooter';
import { createAccount } from '../../actions/sessionActions';
import KeyboardSpacer from 'react-native-keyboard-spacer';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <NewPostHeader style={{flex:1}}/>
        <NewPostInput style={{flex:3}}/>
        <NewPostFooter style={{justifyContent: 'flex-end'}}/>
        <KeyboardSpacer/>
        </View>
        );
  }
}

export default connect(
  null,
  { createAccount }
)(NewPost);
