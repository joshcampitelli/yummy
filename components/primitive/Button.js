import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const YButton = (props) => {
    return (
        <TouchableOpacity title="Hello" style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#70EFDE',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        paddingVertical: 18,
        fontSize: 24,
        width: 'auto',
    }
});

export default YButton;