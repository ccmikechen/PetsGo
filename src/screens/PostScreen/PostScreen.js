import React from 'react';
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
    ]
  };

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
    }
  }

  render() {
    return (
      <Post id={ this.props.postId } navigator={ this.props.navigator }/>
    );
  }

}

export default PostScreen;
