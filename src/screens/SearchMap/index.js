import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import MapView, {PROVIDER_DEFAULT} from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

import styles from './styles';
import CustomMarker from '../../components/Marker';

import RoundPostItem from '../../components/RoundaboutPost';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchMapScreen = (props) => {
  const [PlaceId, setPlaceId] = useState(null);
  const [posts, setPosts] = useState([]);

  const width = useWindowDimensions().width;
  const flatList = useRef();
  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!PlaceId || !flatList) {
      return;
    }
    const index = posts.findIndex((place) => place.id === PlaceId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = posts[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    map.current.animateToRegion(region);
  }, [PlaceId]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));

        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  return (
    <View style={styles.MapView}>
      <MapView
        ref={map}
        style={styles.MapView}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 47.66998,
          longitude: -122.51247,
          latitudeDelta: 0.3,
          longitudeDelta: 0.3,
        }}>
        {posts.map((place) => (
          <CustomMarker
            key={place.id}
            coordinate={{latitude: place.latitude, longitude: place.longitude}}
            price={place.newPrice}
            isSelected={place.id === PlaceId}
            onPress={() => setPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={posts}
          renderItem={({item}) => <RoundPostItem post={item} />}
          horizontal
          // keyExtractor={posts.id}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 70}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};
export default SearchMapScreen;

//https://youtu.be/ch2oOdnLkqw?t=5066