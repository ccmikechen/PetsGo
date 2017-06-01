import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Button } from 'react-native';
import NewPostHeader from '../../components/NewPostHeader';
import NewPostInput from '../../components/NewPostInput';
import NewPostFooter from '../../components/NewPostFooter';
import { createAccount } from '../../actions/sessionActions';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import styles from './styles';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <NewPostHeader />
          <NewPostInput style={{flex: 3}}/>
        </ScrollView>
        <NewPostFooter style={{justifyContent: 'flex-end'}}/>
      </View>
    );
  }
}

export default connect(
  null,
  { createAccount }
)(NewPost);
