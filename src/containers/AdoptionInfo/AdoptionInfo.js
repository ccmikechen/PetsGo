import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  ActivityIndicator
} from 'react-native';
import AdoptionMap from '../../components/AdoptionMap';
import styles from './styles';
import {
  fetchShelterPositions
} from '../../actions/adoptActions';

class AdoptionInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { fullAddress } = this.props.animal;
    this.props.fetchShelterPositions(fullAddress);
  }

  renderTitle(title) {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  renderContent(content) {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{content}</Text>
      </View>
    );
  }

  renderRow(title, content) {
    return (
      <View style={styles.row} elevation={3}>
        <View style={styles.column}>
          {this.renderTitle(title)}
          {this.renderContent(content)}
        </View>
      </View>
    );
  }

  parseAnimal(animal) {
    const bodyTypes = {
      SMALL: '小型',
      MEDIUM: '中型',
      BIG: '大型'
    };

    const sexNames = {
      M: '公',
      F: '母'
    };

    const ages = {
      CHILD: '幼年',
      ADULT: '成年'
    };

    return {
      ...animal,
      bodyType: bodyTypes[animal.bodyType],
      sex: sexNames[animal.sex],
      age: ages[animal.age]
    };
  }

  render() {
    let animal = this.parseAnimal(this.props.animal);
    let { shelters } = this.props;
    let region = shelters && shelters.length > 0 ? {
      latitude: shelters[0].coordinate.lat,
      longitude: shelters[0].coordinate.lng,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    } : null;

    return (
      <ScrollView style={styles.container}>
      <View style={styles.imageRow} elevation={5}>
        <Image
          style={styles.image}
          source={{uri: animal.image}}
        />
      </View>
      {this.renderRow('編號', animal.key)}
      {this.renderRow('所屬單位', animal.shelterName)}
      {this.renderRow('所在地', animal.place)}
      {this.renderRow('區域縣市', animal.address)}
      {this.renderRow('類型', animal.kind)}
      {this.renderRow('性別', animal.sex)}
      {this.renderRow('體型', animal.bodyType)}
      {this.renderRow('毛色', animal.color)}
      {this.renderRow('年紀', animal.age)}
      {this.renderRow('尋獲地點', animal.foundPlace)}
      {this.renderRow('備註', animal.remark)}
      {this.renderRow('發布時間', animal.createTime)}
      {this.renderRow('更新時間', animal.updateTime)}
      {
        region ?
          <AdoptionMap
            style={styles.map}
            region={region}
            shelters={shelters}
          /> : null
      }
      </ScrollView>
    );
  }
}

export default connect((state) => ({
  shelter: state.getIn(['adopt', 'shelters']).toJS()
}), {
  fetchShelterPositions
})(AdoptionInfo);
