import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Restaurant from '../components/swiper/Restaurant';
import Swiper from 'react-native-deck-swiper'

const url = 'http://localhost:3000/restaurant_data';

export default function SwipePage({ navigation }) {
    const [businesses, setBusinesses] = useState([]);
    const LOADER = <ActivityIndicator size="large" color="#70EFDE" style={styles.loader}/>;

    useEffect(() => {
        getData();
    }, []);

    async function getData(offset = 0) {
        let data = {
            latitude: 45.421532,
            longitude: -75.697189,
            radius: 20000,
            price: '1, 2, 3, 4',
            offset
        }

        try {
            let results = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-type': 'application/json' }
            });

            let content = await results.json();
            setBusinesses(businesses.concat(content));
        } catch (error) {
            console.log(error);
        }
    }

    function renderCard(card, index) {
        if (!businesses[index]) {
            return LOADER;
        }

        // Convert meters to kilometers and round to 1 decimal place
        let distanceKm = Math.round((businesses[index].distance / 1000) * 10) / 10;

        return (
            <Restaurant
                images={businesses[index].photos}
                name={businesses[index].name}
                distance={distanceKm + ' Kilometers away'}
                price={businesses[index].price}
                description={businesses[index].categories[0].title} />
        )
    };

    function swiped(index) {
        // temporary move to results page after 15 swipes so
        // we could access the results page.
        if (index == 15) {
          navigation.navigate('Results');
        }

        if ((index - 2) % 5 === 0) {
            getData(index + 3);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header style={styles.header} />
            <View style={styles.swiper}>
                <Swiper
                    cards={{}}
                    renderCard={renderCard}
                    onSwiped={swiped}
                    backgroundColor={'#292929'}
                    cardVerticalMargin={0}
                    verticalSwipe={false}
                    cardStyle={styles.card}
                    marginBottom={10}
                    stackSize={2} />
            </View>
            <Footer navigation={navigation} />
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
    },
    loader: {
        flex: 1
    }
});
