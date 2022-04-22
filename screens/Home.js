import React from 'react'
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar } from 'react-native'

const Home = () => {
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Text style={styles.text}>Home</Text>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})