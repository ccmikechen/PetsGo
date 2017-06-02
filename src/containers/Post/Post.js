import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Button, Image } from 'react-native';
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

  render() {
    let user = this.props.post.user;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.userimage}
            source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
          />
          <Text style={styles.username}>{`${user.first_name}${user.last_name}`}</Text>
        </View>

        <Text style={styles.title}>{this.props.post.title}</Text>
        <Text style={styles.typedatetime}>{`${this.parseTypeToName(this.props.post.type)}版 ${new Date(this.props.post.updated_at).getFullYear()}/${new Date(this.props.post.updated_at).getMonth()+1}/${new Date(this.props.post.updated_at).getDate()} ${new Date(this.props.post.updated_at).getHours()}:${new Date(this.props.post.updated_at).getMinutes()} `}</Text>
        <Text style={styles.content}>{this.props.post.content}</Text>
      </ScrollView>
    );
  }
}

export default connect((state) => ({
  post: state.getIn(['post', 'post'])
}), {
  getPost
})(Post);
