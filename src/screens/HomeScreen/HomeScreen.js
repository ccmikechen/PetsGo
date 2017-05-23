import React from 'react';
import Home from '../../containers/Home';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
static navigatorButtons = {
  rightButtons: [
        {
          id: 'Post',
          disabled: true,
          disableIconTint: true,
          showAsAction: 'ifRoom',
        },
        {
          icon: require('../../../img/newPost.png'),
          id: 'Post'
        }
      ]
    };

  onNavigatorEvent(event) {
      if (event.type == 'NavBarButtonPress') {
        if (event.id == 'Post') {
          this.props.navigator.push({
            screen:'petsgo.NewPostScreen',
            title:'撰寫貼文',
            passProps: {},
            animated:true,
          });
        }

      }
    }
  render() {
    return (
      <Home navigator={this.props.navigator} />
    );
  }
}

export default HomeScreen;
