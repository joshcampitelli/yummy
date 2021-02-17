import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import GuestLobby from './GuestLobbyComponents/GuestLobby';
import HostLobby from './GuestLobbyComponents/HostLobby';

export default function App() {


  return (
    //<GuestLobby></GuestLobby>
    <HostLobby></HostLobby>
  );
}
