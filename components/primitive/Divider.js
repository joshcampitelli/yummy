import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = (props) => {
    return (
        <View style={{
            height: props.height,
            backgroundColor: '#fff',
            width: "100%",
            opacity: 0.6,
        }} />
    );
}

const styles = StyleSheet.create({
});

export default Divider;