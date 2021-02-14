import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guest';
import SearchResultScreen from '../screens/SearchResults';
import {startClock} from 'react-native-reanimated';
import TabNavigator from './TabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestScreen}
          options={{
            title: 'How many people?',
          }}
        />

        <Stack.Screen
          name={'Result'}
          component={SearchResultScreen}
          options={{
            title: 'Search your destination',
          }}
        />
        <Stack.Screen
          name={'Post'}
          component={PostScreen}
          options={{
            title: 'Your accomodation',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
