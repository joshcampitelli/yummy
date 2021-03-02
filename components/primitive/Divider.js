import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = (props) => {
    return (
        <View style={styles(props).divider} />
    );
}

const styles = (props) => StyleSheet.create({
    divider: {
        height: props.height,
        backgroundColor: '#fff',
        width: '100%',
        opacity: 0.6,
    }
});

export default Divider;