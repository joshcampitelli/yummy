import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Indicator({active}) {
    return (
        <View style={[styles.indicator, active ? styles.indicatorActive : styles.indicatorInactive]} />
    );
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        height: 7,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        borderRadius: 20,
    },
    indicatorActive: {
        backgroundColor: '#70EFDE', // this is for testing purposes
    }, 
    indicatorInactive: {
        backgroundColor: '#eee', // this is for testing purposes
    }
});