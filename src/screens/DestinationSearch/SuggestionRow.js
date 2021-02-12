import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import LocationIcon from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <LocationIcon name={'location-pin'} size={28} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);

export default SuggestionRow;
