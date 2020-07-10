import React from 'react';
import { View, Text,Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function TopBar() {
    return (
      <View style={{ top:0, height:65, backgroundColor:"white", alignItems: 'center', justifyContent:"space-between", flexDirection:"row" }}>
        <Text style={{fontWeight:"bold", marginLeft: Dimensions.get("window").width/4 + 35, fontSize:18}} >Google Podcast</Text>        
        <View style={{width:34, height:34, marginRight:20, borderRadius:99, justifyContent:"center",alignItems:"center", backgroundColor:"lightgray"}}>

        </View>
      </View>
    );
  }