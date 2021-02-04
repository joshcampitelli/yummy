import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'


export default function SessionCodeDisplay(props) {

  const onCopyCode = () => {
    alert("copy")
  }

  return (

    <View style={styles.container}>
        <Text style={styles.codeText}>{props.code}</Text>
        
        <TouchableOpacity style = {styles.invisButton} onPress={onCopyCode}>
          <FontAwesomeIcon icon={ faCopy } style={styles.icon}/>
          <Text style={styles.subText}> Copy</Text>
        </TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderColor: '#70EFDE',
    borderWidth: 2,
    borderRadius: 20,
    width: '95%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeText: {
      fontSize: 48,
      color: '#70EFDE',
  },
  subText: {
    color: "#ffffff",
    fontSize: 24
  },
  invisButton: {
    flexDirection: 'row'
  },
  icon: {
    color: '#70EFDE',
    marginTop: 10
  }
});
