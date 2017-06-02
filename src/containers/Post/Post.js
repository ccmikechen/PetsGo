import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { getPost } from '../../actions/postActions';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPost(this.props.id);
  }

  parseTypeToName = (type) => {
    const typeNames = {
      lost: '協尋',
      event: '活動',
      adoption: '送養',
      care: '看護'
    };

    return typeNames[type];
  };

  formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  }

  renderCover() {
    return (
      <View style={styles.cover}>
        <ActivityIndicator
          animating={true}
          size='large'
          color='grey'
        />
      </View>
    );
  }

  render() {
    if (this.props.isFetchingPost) {
      return this.renderCover();
    }

    let { title, content, type, updated_at } = this.props.post;
    let { image, username, first_name, last_name } = this.props.post.user;
    let typeName = this.parseTypeToName(type);
    let date = this.formatDate(new Date(updated_at));

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.userimage}
            source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
          />
          <Text style={styles.username}>{`${first_name}${last_name}`}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.typedatetime}>{`${typeName}版 ${date}`}</Text>
        <Text style={styles.content}>{this.props.post.content}</Text>
      </ScrollView>
    );
  }
}

export default connect((state) => ({
  post: state.getIn(['post', 'post']).toJS(),
  isFetchingPost: state.getIn(['post', 'isFetchingPost'])
}), {
  getPost
})(Post);
