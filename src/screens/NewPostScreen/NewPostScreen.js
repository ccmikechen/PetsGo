import React from 'react';
import NewPost from '../../containers/NewPost';

class NewPostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  static navigatorButtons = {
    leftButtons: [
      {
        title:'取消',
        id: 'cancel'
      }
    ],
    rightButtons:[
      {
        title:'傳送',
        id: 'post'
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
      if(event.id == 'post') {
        
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
      <NewPost navigator={this.props.navigator} />
    );
  }
}

export default NewPostScreen;
