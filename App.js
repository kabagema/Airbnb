/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Post from './src/components/Post';

import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guest';
import HomeScreen from './src/screens/Home';
import SearchResultScreen from './src/screens/SearchResults';
import Router from './src/navigation/Router';
import SearchMapScreen from './src/screens/SearchMap';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Router />
      {/* <Router /> */}
      {/* <SearchMapScreen /> */}
    </>
  );
};

export default App;
