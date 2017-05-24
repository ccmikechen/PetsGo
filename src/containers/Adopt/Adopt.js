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
  }

  componentWillMount() {
    this.props.fetchAdoptionList();
  }

  onPressUpdateButton = () => {
    this.props.fetchAdoptionList();
  }

  render() {
    return (
      <View style={styles.container}>
        <GridView
          items={this.props.animals}
          itemsPerRow={2}
          renderItem={AdoptionListItem}
          style={{flex: 1}}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

export default connect(
  (state) => ({
    animals: state.getIn(['adopt', 'animals'])
  }),
  { fetchAdoptionList }
)(Adopt);
