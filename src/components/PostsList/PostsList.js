import React from 'react';
import { View, ListView, Text, Image } from 'react-native';
import styles from './styles';

const parseTypeToName = (type) => {
  const typeNames = {
    lost: '協尋',
    event: '活動',
    adoption: '送養',
    care: '看護'
  };

  return typeNames[type];
};

const PostsListItem = ({ post }) => {
  if (post && post.user) {
    return (
      <View style={styles.listItem} key={post.id}>
        <View style={styles.typeRow}>
          <View style={styles.typeContainer}>
            <Text style={styles.type}>
              {parseTypeToName(post.type)}
            </Text>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Image
            style={styles.image}
            source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
          />
          <View style={styles.textColumn}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
            <Text style={styles.username}>{post.user.first_name}{post.user.last_name}</Text>
          </View>
          <View style={styles.arrowColumn}>
            <Text style={styles.arrow}>{'>'}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

class PostsList extends React.Component {
  _genDataSource(posts) {
    if (this.dataSource == undefined) {
      this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    this.dataSource = this.dataSource.cloneWithRows(posts);
    return this.dataSource;
  }

  _renderRow(post) {
    return (
      <PostsListItem post={post} />
    );
  }

  render() {
    console.log('posts', this.props.posts);
    return (
      <ListView
        dataSource={this._genDataSource(this.props.posts)}
        renderRow={this._renderRow}
      />
    );
  }
}

export default PostsList;
