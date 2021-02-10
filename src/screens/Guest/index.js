import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setchildren] = useState(0);
  const [infants, setinfants] = useState(0);

  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.adultText}>Adults</Text>
            <Text style={styles.ageText}>Ages 13 or above</Text>
          </View>

          <View style={styles.values}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.signs}>-</Text>
            </Pressable>

            <Text style={styles.number}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.signs}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* Row 1 : children */}
        <View style={styles.row}>
          <View>
            <Text style={styles.adultText}>children</Text>
            <Text style={styles.ageText}>Ages 2-12</Text>
          </View>

          <View style={styles.values}>
            <Pressable
              onPress={() => setchildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.signs}>-</Text>
            </Pressable>

            <Text style={styles.number}>{children}</Text>

            <Pressable
              onPress={() => setchildren(children + 1)}
              style={styles.button}>
              <Text style={styles.signs}>+</Text>
            </Pressable>
          </View>
        </View>
        {/* infants */}
        <View style={styles.row}>
          <View>
            <Text style={styles.adultText}>Infants</Text>
            <Text style={styles.ageText}>Under 2</Text>
          </View>

          <View style={styles.values}>
            <Pressable
              onPress={() => setinfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.signs}>-</Text>
            </Pressable>

            <Text style={styles.number}>{infants}</Text>

            <Pressable
              onPress={() => setinfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.signs}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {/* nested navigation */}
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
              },
            })
          }
          style={styles.submitButton}>
          <Text style={styles.submitText}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
