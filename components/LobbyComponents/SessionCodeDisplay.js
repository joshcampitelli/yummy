import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import LabeledSlider from './LabeledSlider';

export default function SessionCodeDisplay(props) {

  const onCopyCode = () => {
    alert("copy")
  }

  const searchRadiusSlider = props.host ? <LabeledSlider min={1} max={50} unit="km"></LabeledSlider> : null;

  return (

    <View style={styles.container}>
        <Text style={styles.codeText}>{props.code}</Text>
        
        <TouchableOpacity style = {styles.invisButton} onPress={onCopyCode}>
          <FontAwesomeIcon icon={ faCopy } style={styles.icon}/>
          <Text style={styles.subText1}>Copy</Text>
        </TouchableOpacity>

        {searchRadiusSlider}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderColor: '#70EFDE',
    borderWidth: 4,
    borderRadius: 20,
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeText: {
      fontSize: 48,
      color: '#70EFDE',
      marginTop: 40
  },
  subText1: {
    color: "#ffffff",
    fontSize: 18
  },
  invisButton: {
    flexDirection: 'row'
  },
  icon: {
    color: '#70EFDE',
    padding: 5,
    margin: 5
  },
});
