import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Restaurant from '../components/Restaurant';

import Swiper from 'react-native-deck-swiper'
import * as data from '../data/api-test-data.json';

export default function SwipePage({ navigation }) {
    function renderCard(card, index) {
        // Convert meters to kilometers and round to 1 decimal place
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
            <View style={styles.swiper}>
                <Swiper
                    cards={[...data['businesses'].keys()]}
                    renderCard={renderCard}
                    backgroundColor={'#292929'}
                    cardVerticalMargin={0}
                    verticalSwipe={false}
                    cardStyle={styles.card}
                    marginBottom={10}
                    stackSize={2}/>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center'
    },
    swiper: {
        flex: 1,
        width: '100%'
    },
    card: {
        height: '100%'
    }
});
