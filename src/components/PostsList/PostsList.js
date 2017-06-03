import React from 'react';
import { View, ListView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const parseTypeToName = (type) => {
  const typeNames = {
    lost: '協尋',
    event: '活動',
    adopt: '送養',
    care: '看護'
  };

  return typeNames[type];
};

const ellipsizeTitle = (title) => {
  if (title.length > 10) {
    return title.substring(0, 10) + '...';
  }
  return title;
}

const ellipsizeContent = (content) => {
  if (content.length > 16) {
    return content.substring(0, 16) + '...';
  }
  return content;
}

const PostsListItem = ({ post }) => {
  let typeStyle  = post.type == 'lost' ? styles.lostType :
  post.type == 'event' ? styles.eventType :
  post.type == 'adopt' ? styles.adoptType :
  post.type == 'care' ? styles.careType : null;
  if (post && post.user) {
    return (
        <View style={styles.listItem} key={post.id}>
          <View style={styles.typeRow}>
            <View style={typeStyle}>
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
              <Text
                numberOfLines={1}
                style={styles.title}
              >
                {ellipsizeTitle(post.title)}
              </Text>
              <Text
                style={styles.content}
                numberOfLines={1}
              >
                {ellipsizeContent(post.content)}
              </Text>
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
  constructor(props) {
    super(props);
  }

  _genDataSource(posts) {
    if (this.dataSource == undefined) {
      this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    this.dataSource = this.dataSource.cloneWithRows(posts);
    return this.dataSource;
  }

  onPressPost(navigator, postId) {
    navigator.showModal({
      screen:'petsgo.PostScreen',
      title: '',
      passProps: { postId },
      animated:true,
      animationType: 'slide-up'
    });
  }

  _renderRow(onPress, navigator) {
    return (post) => (
      <TouchableOpacity onPress={() => onPress(navigator, post.id)}>
        <PostsListItem post={post} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this._genDataSource(this.props.posts)}
        renderRow={this._renderRow(this.onPressPost, this.props.navigator)}
      />
    );
  }
}

export default PostsList;
