import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Textfield = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="#ccc"
            style={styles.input}
            onChangeText={props.onChange} />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 12,
        borderColor: '#70EFDE',
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: 28
    }
});

export default Textfield;