import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchResultScreen from '../screens/SearchResults';
import SearchMapScreen from '../screens/SearchMap';
import {useRoute} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const ResultTabNavigator = (props) => {
  const route = useRoute();
  const {guests, viewport} = route.params;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'List'}>
        {() => <SearchResultScreen guests={guests} viewport={viewport} />}
      </Tab.Screen>
      <Tab.Screen name={'map'}>
        {() => <SearchMapScreen guests={guests} viewport={viewport} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ResultTabNavigator;
