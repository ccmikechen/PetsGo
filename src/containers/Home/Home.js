import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <Swiper
            height="100%"
            showsButtons={true}>
            <View></View>
            <View></View>
            <View></View>
          </Swiper>
        </View>
        <ScrollableTabView
          style={{flex:2}}>
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
