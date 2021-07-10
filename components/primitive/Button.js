import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    style={styles.button(props)}
    onPress={props.onPress}
    disabled={props.disabled} >
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = {
  button: (props) => StyleSheet.flatten({
    backgroundColor: props.background ?? '#70EFDE',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: props.disabled ? 0.3 : 1,
    width: '100%',
  }),
  ...StyleSheet.create({
    text: {
      paddingVertical: 18,
      fontSize: 18,
      width: 'auto',
    },
  }),
};

export default Button;
