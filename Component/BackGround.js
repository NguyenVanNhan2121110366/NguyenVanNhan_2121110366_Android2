import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Images() {

    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={require('../Image/back.jpg')}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: 160,
        width: 370,
        marginLeft: 10
    },
});