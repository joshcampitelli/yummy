import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';

import Swiper from 'react-native-deck-swiper'
import * as data from './api/test.json';

export default function App() {
    function renderCard(card, index) {
        let distanceKm = Math.round((data['businesses'][index].distance / 1000) * 10) / 10;

        return (
            <Restaurant 
                images={data['businesses'][index].photos} 
                name={data['businesses'][index].name} 
                distance={distanceKm + ' Kilometers away'}
                price={data['businesses'][index].price} 
                description={data['businesses'][index].categories[0].title}/>
        )
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header style={styles.header} />
            <Swiper
                cards={[...data['businesses']]}
                renderCard={renderCard}
                style={styles.test}
                backgroundColor={'#292929'}
                cardVerticalMargin={80}
                verticalSwipe={false}
                stackSize= {2}
                />
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
