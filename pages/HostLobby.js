import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FriendList from '../components/LobbyComponents/FriendList';
import SessionCodeDisplay from '../components/LobbyComponents/SessionCodeDisplay';
import LobbyButton from '../components/LobbyComponents/LobbyButton';

export default function HostLobby({ navigation }) {
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

  const minSearchRadius = 1;
  const maxSearchRadius = 50;

  const [searchRadius, setSearchRadius] = useState(
    parseInt((minSearchRadius + maxSearchRadius) / 2, 10),
  );

  const onStart = () => {
    navigation.navigate('Swiping');
  };

  const onCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={[styles.rowContainer, styles.flexStartContainer]}>
        <Text style={styles.header}>This session</Text>
      </View>

      <SessionCodeDisplay
        code={'JS832A'}
        host={true}
        handleRadiusChange={setSearchRadius}
        minRadius={minSearchRadius}
        maxRadius={maxSearchRadius}
      />

      <View style={[styles.rowContainer, styles.flexStartContainer]}>
        <Text style={[styles.header, { color: '#70EFDE' }]}>{friends.length} </Text>
        <Text style={styles.header}>Joined</Text>
      </View>

      <View style={styles.horizontalRule} />

      <FriendList friends={friends} />

      <View style={styles.rowContainer}>
        <LobbyButton text="Start" primary={true} onPress={onStart} />
        <LobbyButton text="Cancel" onPress={onCancel} />
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  flexStartContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 25,
  },
  header: {
    color: '#ffffff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 5,
  },
  horizontalRule: {
    width: '95%',
    margin: 5,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  spinner: {
    padding: 15,
  },
});
