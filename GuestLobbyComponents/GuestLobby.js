import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
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
    
  ];


  return (
    <View style={styles.container}>

      <View style={styles.rowContainer}>
        <Text style={styles.header}>This session</Text>
      </View>

      <SessionCodeDisplay code={'JS832A'}></SessionCodeDisplay>

      <View style={styles.rowContainer}>
        <Text style={styles.headerHighlight}>{friends.length} </Text>
        <Text style={styles.header}>Joined</Text>
      </View>

      <View style={styles.horizontalRule}></View>

      <FriendList friends={friends}></FriendList>

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
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 25
  },
  header: {
    color: '#ffffff',
    fontSize: 24,
    paddingTop: 30,
    paddingBottom: 10,
  },
  headerHighlight: {
    color: '#70EFDE',
    fontSize: 24,
    paddingTop: 30,
    paddingBottom: 10,
  },
  horizontalRule: {
    width: '95%',
    margin: 10,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1
  },
  spinner: {
    padding: 30
  }
});
