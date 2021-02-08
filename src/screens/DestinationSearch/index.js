import React, { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'

import styles from '../../components/Post/styles'
import SearchResults from '../../../assets/data/search'

const DestinationSearchScreen = () => {

    const [inputText, setInputText] = useState('')
    return (
        <View>
            <TextInput
                style={styles.TextInput}
                placeholder="where are you going?"
                value={inputText}
                onChange={setInputText}
            />
            <FlatList 
                data={SearchResults}
                renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        
                    </View>
                        <Text>{item.description}</Text>
                </View>
                )}
            />
        </View>
    )
}

export default DestinationSearchScreen
