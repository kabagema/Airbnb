import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, Text} from 'react-native';

import styles from './styles';

const days = 7;

const Post = (props) => {

  let post = props.post;
  const navigation = useNavigation();

  const goToPost = () => {
    navigation.navigate('Post', {idPost: post.id});
  };

  return (
    <Pressable onPress={goToPost} style={styles.container}>
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
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;
