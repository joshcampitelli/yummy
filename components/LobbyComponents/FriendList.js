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
      <FlatList
          data={props.friends}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{width: Dimensions.get('window').width - 40, height: 400}}
      />
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 4,
    marginVertical: 4,
    width: '100%',
    alignSelf: 'center'
  },
  title: {
      fontSize: 12,
      color: '#ffffff',
      margin: 6
  },
  icon: {
    color: '#70EFDE',
    width: 30, 
    height: 30,
    marginRight: 8
  }
});
