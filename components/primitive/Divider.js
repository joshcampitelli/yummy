import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = (props) => {
    return (
        <View style={styles.divider} />
    );
}

const styles = StyleSheet.create({
    divider: {
        height: props.height,
        backgroundColor: '#fff',
        width: "100%",
        opacity: 0.6,
    }
});

export default Divider;