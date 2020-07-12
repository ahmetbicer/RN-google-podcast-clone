import React from 'react';
import { View, Text, ScrollView,RefreshControl } from 'react-native';
import { TopBar } from '../components/topbar'
import { Story } from '../components/story'
import { Podcast } from '../components/podcasts'
import { Player } from '../components/player'

export function Home() {
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }  

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

    return (
      <View style={{ flex: 1, backgroundColor:"white" }}>
        <TopBar/>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{flexDirection:"row", height:100, marginTop:10, marginLeft:10}}>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
          <Story/>
        </ScrollView>

        <ScrollView
        refreshControl={
          <RefreshControl colors={["#3a4eed","red"]} refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{ marginTop:5}}>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
          <Podcast/>
        </ScrollView>
        <Player />
      </View>
    );
  }