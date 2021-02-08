import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const Post = (props) => {

  console.log(props);
  let post = props.post;

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
      <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom </Text>

      
      <Text style={styles.description} numberOfLines={2}>
        {post.description}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice} </Text>/ night
      </Text>

      {/* Type & Description */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
