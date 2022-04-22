import React from 'react'
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import tw from 'twrnc';


const Home = () => {
    return (
        <SafeAreaView style={[tw`bg-white h-full`,styles.androidSafeArea]}>
            <Text style={[tw`text-lg text-green-800 `]}>Home</Text>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})