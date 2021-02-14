import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import places from '../../../assets/data/feed';
import DetailedPost from '../../components/DetailedPost';

const PostScreen = (props) => {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.idPost);

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
