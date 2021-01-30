import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

const invite = require('../assets/happy.png');
const profile = require('../assets/user_pin.png');
const settings = require('../assets/settings_filled.png');

export default function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.invite}>
                <Image source={invite}/>
                <Text style={styles.text}>Invite</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.invite}>
                <Image source={profile}/>
                <Text style={styles.text}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.invite}>
                <Image source={settings}/>
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 75,
        backgroundColor: '#1D1D1D',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 10,
        color: '#70EFDE'
    },
    invite: {
        alignSelf: 'center',
        alignItems: 'center'
    }
});