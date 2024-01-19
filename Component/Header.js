import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Search from './Search';
import { FontAwesome5 } from '@expo/vector-icons';
import Logins from './Login';

export default function Header() {
    const navigation = useNavigation();
    const Logins = () => {
        navigation.navigate('Logins');
    };
    return (

        <View style={styles.header}>
            <View style={styles.text}>
                <Text style={styles.title}>Welcome to Minh Nhan Shop</Text>
                <TouchableOpacity style={styles.doorContainer} onPress={() => Logins()}>
                    <View style={styles.doorIcon}>
                        <FontAwesome5 name="door-open" size={30} color="black" />
                    </View>
                </TouchableOpacity>

            </View>
            <StatusBar style="auto" />
            {/* <View style={styles.logOut}>
                <View style={styles.doorIcon}>
                    <FontAwesome5 name="door-open" size={30} color="black" />
                </View>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 30,

    },
    text: {
        marginBottom: 10,
        marginTop: -30

    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 40
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: 160,
        width: 370,
    },
    logOut: {

        marginBottom: 20
    },
    doorIcon:
    {
        marginLeft: 320,
        marginTop: -30
    }

});