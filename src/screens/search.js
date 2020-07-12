
import React from 'react';
import { View, Text } from 'react-native';
import {Player} from '../components/player'

export function Search() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Search!</Text>
        <Player />
      </View>
    );
  }