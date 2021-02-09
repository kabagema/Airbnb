import React, {useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import styles from './styles';
import SearchResults from '../../../assets/data/search';

import LocationIcon from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

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
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <LocationIcon name={'location-pin'} size={28} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
