import React, {useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles';
import SearchResults from '../../../assets/data/search';

import LocationIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Search input */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChange={setInputText}
      />
      {/* list of destination  */}
      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
            <View style={styles.iconContainer}>
              <LocationIcon name={'location-pin'} size={28} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
