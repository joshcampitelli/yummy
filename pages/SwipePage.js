import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Restaurant from '../components/Restaurant';
import Swiper from 'react-native-deck-swiper'

const url = 'http://localhost:3000/restaurant_data';

export default function SwipePage() {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            let results = await fetch(url, {
                method: 'GET'
            });

            setBusinesses(await results.json());
        } catch (error) {
            console.log(error);
        }
    }

    function renderCard(card, index) {
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

    // Hide Swiper content until the GET request returns data
    const Hide = (props) => businesses.length > 0 ? <>{props.children}</> : <></>

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header style={styles.header} />
            <View style={styles.swiper}>
                <Hide>
                    <Swiper
                        cards={businesses}
                        renderCard={renderCard}
                        backgroundColor={'#292929'}
                        cardVerticalMargin={0}
                        verticalSwipe={false}
                        cardStyle={styles.card}
                        marginBottom={10}
                        stackSize={2} />
                </Hide>
            </View>
            <Footer />
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
