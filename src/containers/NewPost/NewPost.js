import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Button, Platform, Alert } from 'react-native';
import NewPostHeader from '../../components/NewPostHeader';
import NewPostTitle from '../../components/NewPostTitle';
import NewPostContent from '../../components/NewPostContent';
import NewPostFooter from '../../components/NewPostFooter';
import { getPosts } from '../../actions/postActions';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { reduxForm, Field } from 'redux-form/immutable';
import styles from './styles';
import petsgo from '../../api/petsgo';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    props.submitHandler.handleSubmit = () => (
      new Promise((resolve, reject) => {
        props.handleSubmit(this.onSubmit(resolve, reject))();
      }
    ));
  }

  formartTypeIndex(index) {
    const typeNames = {
      0:'event',
      1:'lost',
      2:'adopt',
      3:'care'
    };
    return typeNames[index];
  }

  onSubmit(resolve, reject) {
    return (values) => {
      if(typeof values.get('type') == 'undefined' || values.get('type')== '-1') {
         return Alert.alert('petsgo','請選擇分類')
      }
      petsgo.createPost({
        title: values.get('title'),
        content: values.get('content'),
        type: this.formartTypeIndex(values.get('type')).toString(),
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });

    }
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

  renderType() {
    return ({ input: { onChange, ...restInput }}) => (
      <NewPostHeader
        onSelect={onChange}
        {...restInput}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <Field name="type" component={this.renderType()} />
          <Field name="title" component={this.renderTitle()} />
          <Field name="content" component={this.renderContent()} />
        </ScrollView>
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
  { getPosts }
)(NewoPostForm);
