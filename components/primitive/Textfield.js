import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Textfield = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="#ccc"
            style={styles.input}
            onChange={(event) => props.onChange(event.target.value)} />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 12,
        borderColor: '#70EFDE',
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
        textAlign: 'center',
        color: 'white',
        fontSize: 36
    }
});

export default Textfield;