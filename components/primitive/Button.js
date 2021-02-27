import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const YButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button(props.disabled)}
            onPress={props.onPress}
            disabled={props.disabled} >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    button: (disabled) => StyleSheet.flatten({
        backgroundColor: '#70EFDE',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: disabled ? 0.3: 1,
    }),
    ...StyleSheet.create({
        text: {
            paddingVertical: 18,
            fontSize: 24,
            width: 'auto',
        },
    })
};

export default YButton;