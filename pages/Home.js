import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/primitive/Button';
import Divider from '../components/primitive/Divider';
import Textfield from '../components/primitive/Textfield';

const Home = ({ navigation }) => {
  const [join, setJoinText] = React.useState('');

  return (
    <View style={styles.containers.root}>
      <StatusBar style='light' />
      <Header />
      <View style={styles.containers.body}>
        <Text style={styles.header(48)}>Discover your next meal</Text>
        <View style={styles.containers.createRoom}>
          <Button title='Create room' onPress={() => navigation.navigate('HostLobby')}/>
        </View>

        <View style={styles.containers.divider}>
          <Divider height={1} />
        </View>

        <Text style={styles.header(36)}>👭 Friends waiting?</Text>
        <View style={{ width: '80%' }}>
          <Textfield placeholder='J9SBA2' onChange={(text) => setJoinText(text)}/>
        </View>
        <View style={styles.containers.joinRoom}>
          <Button title='Join' disabled={join === ''} onPress={() => navigation.navigate('GuestLobby')} />
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = {
  header: (size) => StyleSheet.flatten({
    color: '#fff',
    fontSize: size,
    padding: 0,
    margin: 0,
    textAlign: 'center',
    marginBottom: 24,
  }),
  containers: StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#292929',
      alignItems: 'center',
    },
    body: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      padding: 0,
      width: '80%',
    },
    createRoom: {
      width: '80%',
      padding: 0,
    },
    joinRoom: {
      width: '80%',
      marginVertical: 16,
    },
    divider: {
      width: '100%',
      marginVertical: 64,
    },
  }),
};
export default Home;
