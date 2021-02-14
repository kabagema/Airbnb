import React, {useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import MapView, {PROVIDER_DEFAULT} from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

import styles from './styles';
import CustomMarker from '../../components/Marker';
import places from '../../../assets/data/feed';

import RoundPostItem from '../../components/RoundaboutPost';

const SearchMapScreen = (props) => {
  const [PlaceId, setPlaceId] = useState(null);
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
    const index = places.findIndex((place) => place.id === PlaceId);
    flatList.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    map.current.animateToRegion(region);
  }, [PlaceId, onViewChanged]);

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
        {places.map((place) => (
          <CustomMarker
            id={place.id}
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === PlaceId}
            onPress={() => setPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatList}
          data={places}
          renderItem={({item}) => <RoundPostItem post={item} />}
          horizontal
          keyExtractor={places.id}
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
