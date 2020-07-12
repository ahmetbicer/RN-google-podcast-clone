import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Podcast() {
    return (
      <View style={{padding:10, borderTopColor:"black",borderTopWidth:0.2}}>
        <TouchableOpacity delayPressIn={0} onPress={() => console.log("hey")}>
          <View style={{flexDirection:"row", marginTop:10,marginLeft:10}}>
            <View style={{width:35, height:35, borderRadius:5, backgroundColor:"black"}} />
            <View style={{flexDirection:"column", marginTop:-2, marginLeft:6}}> 
              <Text>Conan O'Brien Needs A Friend</Text>  
              <Text>4 gün önce</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", marginTop:12,marginLeft:10}}>
            <View style={{flexDirection:"column", marginTop:-2}}>
              <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>Tom Hanks</Text>
                <MaterialCommunityIcons name="alpha-e-box-outline" style={{marginLeft:3,marginTop:2}} color={"#f1771c"} size={18} />  
              </View>
              <Text style={{fontSize:15}}>Actor Tom Hanks feels grand about being Conan O'Brien's friend...</Text>
            </View>
          </View>
          <View style={{flexDirection:"row", marginTop:12,marginBottom:5, marginLeft:10, alignItems:"center"}}>
            <TouchableOpacity delayPressIn={0} style={{borderRadius:99,borderWidth:0.3, padding:5, flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
              <MaterialCommunityIcons name="play-circle-outline" color={"#3a4eed"} size={24} />
              <Text style={{marginHorizontal:5}}>1 sa. 36 dk.</Text>
            </TouchableOpacity>
            <TouchableOpacity delayPressIn={0} onPress={() => console.log("hey")}>
              <MaterialCommunityIcons name="playlist-plus" style={{marginLeft:15}} color={"#3a4eed"} size={28} />
            </TouchableOpacity>
            <TouchableOpacity delayPressIn={0} onPress={() => console.log("hey")}>
              <MaterialCommunityIcons name="arrow-down-circle-outline" style={{marginLeft:15}} color={"#3a4eed"} size={24} />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
      </View>
    );
  }