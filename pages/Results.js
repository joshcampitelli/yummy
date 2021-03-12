import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';

import Button from '../components/primitive/Button';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Results = ({ navigation }) => {

    return (
        <View style={styles.containers.root}>
            <StatusBar style='light' />
            <Header />

            <View style={styles.containers.body}>
                <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                    <Text style={styles.components.winner}>WINNER</Text>
                </View>
                <View style={styles.containers.image}>
                    <ImageBackground
                        source={{ uri: "https://s3-media2.fl.yelpcdn.com/bphoto/87R0vjDZiadbps8sMfGixg/o.jpg" }}
                        style={styles.components.image}/>
                </View>
                <View style={styles.containers.footer}>
                    <Text style={styles.components.restaurant}>Riviera</Text>
                    <View style={styles.containers.actions}>
                        <View style={styles.components.action}>
                            <Button title="Directions"/>
                        </View>
                        <View style={styles.components.action}>
                            <Button title="New Session" background="#DADADA" />
                        </View>
                    </View>
                </View>

            </View>
            <Footer />
        </View>
    );
}

const styles = {
    components: StyleSheet.create({
        image: {
            borderStyle: "solid",
            borderWidth: 4,
            borderColor: '#70EFDE',
            borderRadius: 6,
            width: "100%",
            height: "100%"
        },
        restaurant: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 72
        },
        winner: {
            color: '#000',
            textAlign: 'center',
            backgroundColor: '#70EFDE',
            width: "50%",
            fontSize: 24
        },
        action: {
            flexShrink: 1,
            paddingHorizontal: 8
        }
    }),
    containers: StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: '#292929',
            alignItems: 'center'
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
export default Results;