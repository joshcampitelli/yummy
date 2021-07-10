import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RestaurantDetails(props) {
  return (
    <View style={styles.restaurantContent}>
      <Text style={styles.name}>{props.name} - {props.price}</Text>
      <Text style={styles.text}>{props.description}</Text>
      <Text style={styles.text}>{props.distance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantContent: {
    flex: 4,
    backgroundColor: '#29292990',
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    color: '#eee',
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: '#eee',
  },
});
