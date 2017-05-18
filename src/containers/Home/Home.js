import React from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
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
          <View tabLabel="全部" />
          <View tabLabel="協尋"/>
          <View tabLabel="活動"/>
          <View tabLabel="送養"/>
          <View tabLabel="看護"/>
        </ScrollableTabView>
      </View>
    );
  }
}

export default Home;
