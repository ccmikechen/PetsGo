import React from 'react';
import { View, Text } from 'react-native';
import NewPostHeader from '../../components/NewPostHeader';
import NewPostInput from '../../components/NewPostInput';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <NewPostHeader style={{flex:1}}/>
        <NewPostInput style={{flex:3}}/>
      </View>
    );
  }
}

export default NewPost;
