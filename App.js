import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home } from './src/screens/home'
import { Activity } from './src/screens/activity'
import { Search } from './src/screens/search';
import { Host } from 'react-native-portalize';

const Tab = createMaterialBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Host>
          <Tab.Navigator
            initialRouteName="Home"
            labeled={false}
            activeColor={"#3a4eed"}
            inactiveColor={"black"}
            barStyle={{backgroundColor:"white"}}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home-variant-outline" color={color} size={28} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="magnify" color={color} size={28} />
                ),
              }}
            />
            <Tab.Screen
              name="Activity"
              component={Activity}
              options={{
                tabBarLabel: 'Activity',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="playlist-play" color={color} size={28} />
                ),
              }}
            />
          </Tab.Navigator>
        </Host>
    </NavigationContainer>
  );
};