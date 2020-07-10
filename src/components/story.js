import React from 'react';
import { View, Text,Dimensions,ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Story() {
    return (
      <View style={{width:70, height:70, marginLeft:5, backgroundColor:"lightgray", borderRadius:10}}>
        <View style={{position:"absolute", width:14,height:14,borderRadius:99,borderWidth:3,borderColor:"white",backgroundColor:"red",right:0,marginTop:-3,marginRight:-3}}></View>
      </View>
    );
  }