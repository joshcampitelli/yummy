import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  Slider  from '@react-native-community/slider';

export default function LabeledSlider(props) {

  const [sliderValue, setSliderValue] = useState(parseInt((props.min + props.max)/2));

  return (

    <View style={styles.container}>
      <Text style={styles.subText1}>Restaurant search radius</Text>
      <Text style={styles.valueText}>{sliderValue} {props.unit}</Text>
      
      <Slider
        style={styles.slider}
        minimumValue={props.min}
        maximumValue={props.max}
        step={1}
        value={sliderValue}
        onValueChange={val => setSliderValue(val)}
        minimumTrackTintColor="#70EFDE"
        maximumTrackTintColor="#FFFFFF"
        thumbTintColor="#FFFFFF"
      />

      <View style={styles.rowContainer}>
        <Text style={styles.subText2}>{props.min} {props.unit}</Text>
        <Text style={styles.subText2}>{props.max} {props.unit}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  subText1: {
    color: "#ffffff",
    fontSize: 12
  },
  subText2: {
    color: "#808080",
    fontSize: 14
  },   
  valueText: {
    color: "#ffffff",
    fontSize: 14,
    backgroundColor: "#454463",
    borderRadius: 5,
    paddingHorizontal: 5,
    margin: 5
  },
  slider: {
    width: 250,
    height: 20
  }
});
