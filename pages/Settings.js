import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Divider from '../components/primitive/Divider';
import Textfield from '../components/primitive/Textfield';
import Button from '../components/primitive/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Settings = ({ navigation }) => {

    return (
        <View style={styles.containers.root}>
            <StatusBar style='light' />
            <Header />

            <View style={styles.containers.body}>
                <Text style={styles.components.text}>Personal Settings</Text>
                <View style={styles.components.divider}>
                    <Divider height={1} color='#70EFDE' />
                </View>
                <View>
                    <Textfield placeholder="Display Name" />
                </View>
            </View>
            <View style={{ marginBottom: 48, width: "80%"}}>
                <Button title="Save" onPress={() => navigation.navigate('Home')}/>
            </View>
        </View>
    );
}

const styles = {
    components: StyleSheet.create({
        text: {
            color: '#fff',
            fontSize: 18,
        },
        divider: {
            marginTop: 8,
            marginBottom: 32
        }
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
            width: '100%',
            margin: 0,
            padding: 0,
            width: '80%',
            paddingVertical: 32
        },
        winner: {
            flexDirection: 'row',
            justifyContent: "center"
        },
        image: {
            flex: 1,
            flexDirection: "column",
            maxHeight: "60%"
        },
        footer: {
            marginTop: 32,
        },
        actions: {
            marginTop: 32,
            flexDirection: 'row',
            width: '100%'
        }
    }),
}
export default Settings;