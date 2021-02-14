import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import Search from 'react-native-vector-icons/Fontisto';

import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.SearchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Search name="search" size={25} color={'red'} />
        <Text style={styles.SearchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Result')}>
          <Text style={styles.buttonText}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
