import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantDetails(props) {
    return (
        <View style={styles.restaurantContent}>
            <Text style={styles.text}>{props.price}</Text>
            <Text style={styles.text}>{props.name}</Text>
            <Text style={styles.text}>{props.description}</Text>
            <Text style={styles.text}>{props.distance}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    restaurantContent: {
        flex: 4,
        backgroundColor: '#eeeeee90'
    },
    text: {
        fontSize: 24,
        marginLeft: 20
    }
});