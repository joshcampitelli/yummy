import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FriendList from './FriendList';
import SessionCodeDisplay from './SessionCodeDisplay';
import Button from './Button';

export default function HostLobby() {

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

  const onStart = () => {
    alert('Start');
  }

  const onCancel = () => {
    alert('Cancel');
  }

  return (
    <View style={styles.container}>

      <View style={[styles.rowContainer, styles.flexStartContainer]}>
        <Text style={styles.header}>This session</Text>
      </View>

      <SessionCodeDisplay code={'JS832A'} host={true}></SessionCodeDisplay>

      <View style={[styles.rowContainer, styles.flexStartContainer]}>
        <Text style={styles.headerHighlight}>{friends.length} </Text>
        <Text style={styles.header}>Joined</Text>
      </View>

      <View style={styles.horizontalRule}></View>

      <FriendList friends={friends}></FriendList>
  

      <View style={styles.rowContainer}>
        <Button text="Start" primary={true} onPress={onStart}></Button>
        <Button text="Cancel" onPress={onCancel}></Button>
      </View>

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
  }
});
