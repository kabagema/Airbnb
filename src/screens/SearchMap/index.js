import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';

import {FlatList, View} from 'react-native';
import MapView, {PROVIDER_DEFAULT} from 'react-native-maps';
import CustomMarker from '../../components/Marker';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import places from '../../../assets/data/feed';
import RoundPostItem from '../../components/RoundaboutPost';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchMapScreen = (props) => {
  const [PlaceId, setPlaceId] = useState(null);
  const width = useWindowDimensions().width;
  const flatList = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChange = useRef(({viewableItems}) => {
    if (viewableItems.length >= 0) {
      const placeSelected = viewableItems[0].item;
      setPlaceId(placeSelected.id)
    }
  })

  useEffect(() => {
    if (!PlaceId || !flatList) {
      return;
    }
    const index = places.findIndex((place) => place.id === PlaceId);
    flatList.current.scrollToIndex({index});
  }, [PlaceId]);

  return (
    <View style={styles.MapView}>
      <MapView
        style={styles.MapView}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 47.66998,
          longitude: -122.51247,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
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
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChange.current}
        />
      </View>
    </View>
  );
};

export default SearchMapScreen;
