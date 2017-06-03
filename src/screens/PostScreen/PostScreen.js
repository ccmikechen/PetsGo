import React from 'react';
import { Share } from 'react-native';
import Post from '../../containers/Post';

class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }


  static navigatorButtons = {
    leftButtons: [
      {
        id: 'cancel',
        title: 'X'
      }
    ],
    rightButtons: [
      {
        id: 'share',
        icon: require('../../../img/share.png'),
      }
    ]
  };

  _shareMessage() {
    Share.share({
      message: 'this.props.postContent',
      title: 'this.props.postTitle'
    })
    .then(this._showResult)
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  }

  _showResult(result) {
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        this.setState({result: 'shared with an activityType: ' + result.activityType});
      } else {
        this.setState({result: 'shared'});
      }
    } else if (result.action === Share.dismissedAction) {
      this.setState({result: 'dismissed'});
    }
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
        this.props.navigator.dismissModal({
          screen:'petsgo.HomeScreen',
          title:'首頁',
          passProps: {},
          animated:true,
          animationType: 'slide-down'
        });
      }
      if(event.id == 'share') {
        this._shareMessage();
      }
    }
  }

  render() {
    return (
      <Post id={ this.props.postId } navigator={ this.props.navigator }/>
    );
  }

}

export default PostScreen;
