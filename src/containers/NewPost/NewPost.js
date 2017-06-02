import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Button, Platform } from 'react-native';
import NewPostHeader from '../../components/NewPostHeader';
import NewPostTitle from '../../components/NewPostTitle';
import NewPostContent from '../../components/NewPostContent';
import NewPostFooter from '../../components/NewPostFooter';
import { createPost } from '../../actions/sessionActions';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { reduxForm, Field } from 'redux-form/immutable';
import styles from './styles';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(values) {
    //console.log(this.props);
    console.log('submitting form', values);
    this.props.createPost({
      title: values.get('title'),
      content: values.get('content'),
      type: 'event'
    });
  }

  renderTitle() {
    return ({ input: { onChange, ...restInput }}) => (
      <NewPostTitle
        style={{flex: 1}}
        onChangeText={onChange}
        {...restInput}
      />
    );
  }

  renderContent() {
    return ({ input: { onChange, ...restInput }}) => (
      <NewPostContent
        style={{flex: 3}}
        onChangeText={onChange}
        {...restInput}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <NewPostHeader />
          <Field name="title" component={this.renderTitle()} />
          <Field name="content" component={this.renderContent()} />
        </ScrollView>
        <Button
          title='submit'
          onPress={this.props.handleSubmit(this.onSubmit.bind(this))}
        />
        <NewPostFooter style={{justifyContent: 'flex-end'}}/>
        {Platform.OS == 'ios' ? <KeyboardSpacer /> : null}
      </View>
    );
  }
}

const NewoPostForm = reduxForm({
  form: 'NewoPostForm'
})(NewPost);

export default connect(
  null,
  { createPost }
)(NewoPostForm);
