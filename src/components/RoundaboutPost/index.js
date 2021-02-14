import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

const RoundPostItem = (props) => {
  let post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPost = () => {
    navigation.navigate('Post', {idPost: post.id});
  };

  return (
    <Pressable
      onPress={goToPost}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image */}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        <View style={styles.rightColumn}>
          {/* Bed & Bedroom */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Desc */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/* Price tag  */}
          <Text style={styles.prices}>
            <Text style={styles.price}> ${post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RoundPostItem;
