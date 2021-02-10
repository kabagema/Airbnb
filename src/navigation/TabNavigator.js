import React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import SearchIcon from 'react-native-vector-icons/Fontisto';
import HeartIcon from 'react-native-vector-icons/FontAwesome';
import AirbnbIcon from 'react-native-vector-icons/FontAwesome5';

import MessageIcon from 'react-native-vector-icons/Feather';
import ProfileIcon from 'react-native-vector-icons/EvilIcons';


import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator tabBarOptions={{ activeTintColor: '#f15454' }} >
        <Tab.Screen 
            name={"Explore"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <SearchIcon name="search" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Saved"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <HeartIcon name="heart-o" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Airbnb"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <AirbnbIcon name="airbnb" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Messages"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <MessageIcon name="message-square" size={25} color={color} />
                )
            }}
        />
        <Tab.Screen 
            name={"Profile"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <ProfileIcon name="user" size={35} color={color} />
                )
            }}
        />

        
      </Tab.Navigator>
    );
};

export default TabNavigator
