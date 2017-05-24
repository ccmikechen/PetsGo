import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import NewPostHeader from '../../components/NewPostHeader';
import NewPostInput from '../../components/NewPostInput';
import { createAccount } from '../../actions/sessionActions';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <NewPostHeader style={{flex:1}}/>
        <NewPostInput style={{flex:3}}/>
        <Button title="api" onPress={(e) => this.props.createAccount()} />
      </View>
    );
  }
}

export default connect(
  null,
  { createAccount }
)(NewPost);
