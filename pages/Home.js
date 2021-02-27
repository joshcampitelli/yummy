import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/primitive/Button';
import Divider from '../components/primitive/Divider';
import Textfield from '../components/primitive/Textfield';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header style={styles.header} />
            <View style={styles.body}>
                <Text style={styles.header}>Discover your next meal</Text>
                <View style={{ width: "80%", padding: 0 }}>
                    <Button title='Create room'/>
                </View>

                <View style={{ width: "100%", marginVertical: 64 }}>
                    <Divider height={1} />
                </View>

                <Text style={styles.header2}>👭 Friends waiting?</Text>
                <Textfield placeholder='J9SBA2'/>
                <View style={{ marginVertical: 16, width: "80%" }}>
                    <Button title='Join' onPress={() => navigation.navigate('Swiping')} />
                </View>
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 0,
        padding: 0,
        width: '80%',
    },
    header: {
        color: '#fff',
        fontSize: 48,
        padding: 0,
        margin: 0,
        textAlign: 'center',
        marginBottom: 24
    },
    header2: {
        color: '#fff',
        fontSize: 36,
        padding: 0,
        margin: 0,
        textAlign: 'center',
        marginBottom: 24
    },
});

export default Home;