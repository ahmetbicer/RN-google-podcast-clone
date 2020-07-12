import React, {useRef} from 'react';
import { View, Text, TouchableOpacity, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import faker from "faker";


export function Player() {
    const modalizeRef = useRef(null);

    const onOpen = () => {
      modalizeRef.current?.open();
    };

    return (
        <>
            <TouchableOpacity delayPressIn={0} onPress={onOpen} style={{height:55,position:"absolute",width:"100%", zIndex:20, bottom:0, backgroundColor:"#F8F9FB", borderTopWidth:0.3,borderBottomWidth:0.3, justifyContent:"center"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <View style={{width:35, height:35, borderRadius:5, backgroundColor:"black", marginLeft:20}} />
                    <Text numberOfLines={1} style={{fontSize:15,fontWeight:"bold",overflow:"scroll", marginLeft:10, maxWidth:Dimensions.get("window").width - 155}}>Wearing Iphone Charger? iPhone 12 Model New Super</Text>
                    <MaterialCommunityIcons name="play-outline" style={{marginLeft:35}} color={"#3C4043"} size={30} />
                </View>
            </TouchableOpacity>
            <Portal>
                <Modalize
                    modalHeight={Dimensions.get("window").height - 50}
                    handlePosition={"inside"}
                    withHandle={true}
                    handleStyle={{width:30}}
                    ref={modalizeRef}>
                        <View style={{flex:1,alignItems:"center"}}>
                            <View style={{marginTop:40, width:250,height:250, backgroundColor:"black", borderRadius:10}} />
                            <Text numberOfLines={1} style={{marginTop:25,fontSize:20,fontWeight:"800",maxWidth:Dimensions.get("window").width - 30,overflow:"scroll"}}>Wearing Iphone Charger? iPhone 12 Model New Super</Text>
                            <Text style={{marginTop:10,fontSize:16,fontWeight:"400"}}>Waveform: The MKBHD Podcast</Text>
                            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:25}}>
                                <MaterialCommunityIcons name="rewind-10" color={"#3C4043"} size={32} />
                                <MaterialCommunityIcons name="play-circle" style={{marginLeft:35}} color={"#3C4043"} size={64} />
                                <MaterialCommunityIcons name="fast-forward-30" style={{marginLeft:35}} color={"#3C4043"} size={32} />
                            </View>
                        </View>
                </Modalize>
            </Portal>
        </>
    );
  }