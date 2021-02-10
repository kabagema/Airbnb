import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResultScreen from '../screens/SearchResults';

const Tab = createMaterialTopTabNavigator();

const ResultTabNavigator = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'} component={SearchResultScreen} />
      <Tab.Screen name={'map'} component={SearchResultScreen} />
    </Tab.Navigator>
  );
};

export default ResultTabNavigator;
