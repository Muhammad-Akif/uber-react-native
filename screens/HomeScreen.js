import React from 'react'
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Image } from 'react-native'
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const Home = () => {
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
            <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})