import React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import styles from './styles';
import { fetchAdoptionList } from '../../actions/adoptActions';

class Adopt extends React.Component {
  constructor(props) {
    super(props);
    this.onPressUpdateButton = this.onPressUpdateButton.bind(this);
  }

  onPressUpdateButton = () => {
    this.props.fetchAdoptionList();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="UPDATE"
          onPress={this.onPressUpdateButton}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { fetchAdoptionList }
)(Adopt);
