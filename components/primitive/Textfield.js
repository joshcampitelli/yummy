import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Textfield = (props) => {
    return (
        <TextInput placeholder={props.placeholder}  placeholderTextColor="#ccc" style={{
            padding: 12,
            borderColor: '#70EFDE',
            borderWidth: 2,
            borderRadius: 10,
            width: "80%",
            textAlign: 'center',
            color: 'white',
            fontSize: 36
        }} />
    );
}

const styles = StyleSheet.create({
});

export default Textfield;