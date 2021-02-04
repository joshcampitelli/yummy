import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList, Dimensions, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function FriendList(props) {

  const Item = ({ title }) => (
    <View style={styles.listItem}>
      <FontAwesomeIcon icon={ faUserCircle } style={styles.icon}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
  return (
    <View>
      <FlatList
          data={props.friends}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 8,
    marginVertical: 4,
    borderColor: '#70EFDE38',
    borderWidth: 2,
    borderRadius: 8,
    width: Dimensions.get('window').width - 20
  },
  title: {
      fontSize: 24,
      color: '#ffffff'
  },
  icon: {
    color: '#70EFDE',
    width: 30, 
    height: 30,
    marginRight: 8
  }
});
