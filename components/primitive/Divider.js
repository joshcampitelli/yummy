import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = (props) => (
  <View style={styles(props).divider} />
);

const styles = (props) => StyleSheet.create({
  divider: {
    height: props.height,
    backgroundColor: props.color ?? '#fff',
    width: '100%',
    opacity: 0.6,
  },
});

export default Divider;
