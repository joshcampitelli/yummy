import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import FriendList from './FriendList';
import SessionCodeDisplay from './SessionCodeDisplay'

export default function GuestLobby() {

  const friends = [
    {
      id: '1',
      title: 'Ahmed',
    },
    {
      id: '2',
      title: 'Josh',
    },
    {
      id: '3',
      title: 'Michael',
    },   
    {
      id: '4',
      title: '44444',
    },
    {
      id: '5',
      title: '55555',
    },
    {
      id: '6',
      title: '66666',
    },
  ];

  return (
    <View style={styles.container}>

      <View style={[styles.rowContainer, styles.flexStartContainer]}>
        <Text style={styles.header}>This session</Text>
      </View>

      <SessionCodeDisplay code={'JS832A'}/>

      <View style={[styles.rowContainer, styles.flexStartContainer]}>
        <Text style={styles.headerHighlight}>{friends.length} </Text>
        <Text style={styles.header}>Joined</Text>
      </View>

      <View style={styles.horizontalRule}></View>

      <FriendList friends={friends}/>
  
      <Text style={styles.header} >Waiting for host to start</Text>
      <ActivityIndicator size='large' color='#70EFDE' style={styles.spinner} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    width: '100%'
  },
  rowContainer: {
    flexDirection: 'row',
  },
  flexStartContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 25
  },
  header: {
    color: '#ffffff',
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 5,
  },
  headerHighlight: {
    color: '#70EFDE',
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 10,
  },
  horizontalRule: {
    width: '95%',
    margin: 5,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1
  },
  spinner: {
    padding: 15
  },
});
