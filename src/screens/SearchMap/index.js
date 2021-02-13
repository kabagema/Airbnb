import React, {useState} from 'react';
import styles from './styles';

import {View} from 'react-native';
import MapView, {PROVIDER_DEFAULT} from 'react-native-maps';
import CustomMarker from '../../components/Marker';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import places from '../../../assets/data/feed';

const SearchMapScreen = (props) => {
  const [PlaceId, setPlaceId] = useState(null);

  return (
    <View style={styles.MapView}>
      <MapView
        style={styles.MapView}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 47.66998,
          longitude: -122.51247,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        {places.map((place) => (
          <CustomMarker
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === PlaceId}
            onPress={() => setPlaceId(place.id)}
          />
        ))}
      </MapView>
    </View>
  );
};

export default SearchMapScreen;
