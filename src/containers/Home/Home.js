import React from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import PostsList from '../../components/PostsList';
import styles from './styles';
import {
  getPosts
} from '../../actions/postActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts();
  }

  filterPosts(posts, type) {
    return posts.filter(post => (
      post.type == type
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Swiper
            height="100%"
            showsButtons={true}>
            <View></View>
            <View></View>
            <View></View>
          </Swiper>
        </View>
        <ScrollableTabView
          style={styles.scrollableTabView}>
          <View style={styles.postsList} tabLabel="全部">
            <PostsList posts={this.props.posts} navigator={this.props.navigator} />
          </View>
          <View style={styles.postsList} tabLabel="協尋">
            <PostsList posts={this.filterPosts(this.props.posts, 'lost')} navigator={this.props.navigator} />
          </View>
          <View style={styles.postsList} tabLabel="活動">
            <PostsList posts={this.filterPosts(this.props.posts, 'event')} navigator={this.props.navigator} />
          </View>
          <View style={styles.postsList} tabLabel="送養">
            <PostsList posts={this.filterPosts(this.props.posts, 'adopt')} navigator={this.props.navigator} />
          </View>
          <View style={styles.postsList} tabLabel="看護">
            <PostsList posts={this.filterPosts(this.props.posts, 'care')} navigator={this.props.navigator} />
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default connect((state) => ({
  posts: state.getIn(['post', 'posts'])
}), {
  getPosts
})(Home);
