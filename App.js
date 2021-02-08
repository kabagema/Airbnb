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
import HomeScreen from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post />
        <Post />
        <Post />
      </SafeAreaView>
    </>
  );
};
// https://youtu.be/ZxkmTsEYfg8?t=5497
export default App;
