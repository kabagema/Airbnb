import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const Post = (props) => {
  let post = props.post;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom{' '}
      </Text>

      {/* Desc */}
      <Text style={styles.description} numberOfLines={2}>
        {post.description}
      </Text>

      {/* Price tag  */}
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
