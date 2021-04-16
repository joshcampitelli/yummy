import React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import invite from '../assets/happy.png';
import profile from '../assets/user_pin.png';
import settings from '../assets/settings_filled.png';

export default function Footer(props) {
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
            <TouchableOpacity style={styles.invite} onPress={() => props.navigation.navigate('Settings')}>
                <Image source={settings}/>
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
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