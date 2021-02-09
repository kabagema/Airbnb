/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Post from './src/components/Post';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/Home';

import SearchResultScreen from './src/screens/SearchResults';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <Post />
        <Post /> */}
        {/* <SearchResultScreen /> */}
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};
// https://youtu.be/ZxkmTsEYfg8?t=7780
export default App;
