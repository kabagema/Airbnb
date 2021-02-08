import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
        }}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & Description */}
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$43 </Text>
        <Text style={styles.price}> $36 </Text>/ night
      </Text>

      {/* Type & Description */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
