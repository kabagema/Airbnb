import React, { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'

import styles from '../DestinationSearch/styles';
import SearchResults from '../../../assets/data/search'

import LocationIcon from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="where are you going?"
                value={inputText}
                onChange={setInputText}
            />
            <FlatList 
                data={SearchResults}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <LocationIcon name={"location-pin"} size={33} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen
