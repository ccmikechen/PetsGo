import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import GridView from 'react-native-grid-view';
import AdoptionListItem from '../../components/AdoptionListItem';
import styles from './styles';
import { fetchAdoptionList } from '../../actions/adoptActions';

class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.onPressUpdateButton = this.onPressUpdateButton.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  componentWillMount() {
    this.props.fetchAdoptionList();
  }

  onPressUpdateButton() {
    this.props.fetchAdoptionList();
  }

  onPress(navigator) {
    return (animal) => () => {
      navigator.showModal({
        screen:'petsgo.AdoptionInfoScreen',
        title: '',
        passProps: {
          navigator,
          animal
        },
        animated: true,
        animationType: 'slide-up'
      });
    };
  }

  renderItem(navigator) {
    return (animal) => (
      <AdoptionListItem
        navigator={navigator}
        onPress={this.onPress(navigator)}
        animal={animal} />
    );
  }

  render() {
    let { navigator, animals } = this.props;

    return (
      <View style={styles.container}>
        <GridView
          items={animals}
          itemsPerRow={2}
          renderItem={this.renderItem(navigator)}
          style={{flex: 1}}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

export default connect((state) => ({
  animals: state.getIn(['adopt', 'animals']).toJS()
}), {
  fetchAdoptionList
})(Adopt);
