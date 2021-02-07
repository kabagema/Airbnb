
import React from 'react'
import { ImageBackground, Pressable, Text, View } from 'react-native'
import styles from "./styles";
import Search from "react-native-vector-icons/Fontisto";

const HomeScreen = () => {
    return (
        <View>
                <Pressable
                    style={styles.SearchButton}
                    onPress={() => console.warn('Search Btn clicked')}
                >
                    <Search name="search" size={25} color={"red"} />
                    <Text style={styles.SearchButtonText}>Where are you going?</Text>
                </Pressable>

            <ImageBackground 
                source={require('../../../assets/images/wallpaper.jpg')} 
                style={styles.image } 
            >
            
                <Text style={styles.title}>Go Near</Text>

                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Explore Btn clicked')}
                >
                    <Text style={styles.buttonText}>Explore Nearby stays</Text>

                </Pressable>
            </ImageBackground>
        </View>

)}

export default HomeScreen
