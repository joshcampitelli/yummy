import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Header() {
    return (
        <Text style={styles.text}>Yummy</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#70EFDE',
        marginTop: 30,
        fontSize: 36,
        fontFamily: 'Noteworthy-Bold',
        position: 'absolute',
        top: 0,
        zIndex: 1
    }
});