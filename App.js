import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';

const images = [
    {
        index: 0,
        image: require('./assets/pho-1.jpg')
    },
    {
        index: 1,
        image: require('./assets/pho-2.jpeg')
    },
    {
        index: 2,
        image: require('./assets/pho-3.jpeg')
    },
    {
        index: 3,
        image: require('./assets/pho-4.jpeg')
    },
    {
        index: 4,
        image: require('./assets/pho-5.jpg')
    }
];

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header />
            <Restaurant images={images}/>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
