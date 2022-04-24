import React from 'react'
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'

const HomeScreen = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`, styles.androidSafeArea]}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
                <GooglePlacesAutocomplete
                placeholder="Where From?"
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: "en"
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                />
            <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})