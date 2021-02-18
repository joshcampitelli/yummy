import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LobbyButton(props) {

  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.primary ? '#70EFDE' : '#DADADA'}]} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>       
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,	
		borderRadius: 50,
		width: 150,
		height: 60
	},
	text: {
		color: '#000000',
		fontSize: 24,
	}
});
