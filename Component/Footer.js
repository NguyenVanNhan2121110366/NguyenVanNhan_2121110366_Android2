import React, { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Footer() {
    const Register = () => {
        Alert.alert('Đang đăng nhập');
        navigation.replace('Register');
    };
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        if (route.name !== 'HomeScreen') {
            navigation.navigate('HomeScreen');
        }
    }, []);

    const handleHomePress = () => {
        navigation.navigate('HomeScreen');
    };

    const CartScreen = () => {
        navigation.navigate('CartScreen');
    };
    

    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={handleHomePress} style={[styles.footerButton, route.name === 'HomeScreen' && styles.activeButton]}>
                {/* <FontAwesome5 name="home" size={24} color={route.name === 'HomeScreen' ? 'red' : 'black'} /> */}
                <FontAwesome5 name="home" size={24} color="black" />
                <Text>Trang chủ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={CartScreen} style={[styles.footerButton, route.name === 'ProfileScreen' && styles.activeButton]}>
                <FontAwesome5 name="shopping-cart" size={24} color='black' />
                <Text>Giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Home icon clicked')} style={styles.footerButton}>
                <FontAwesome name="bell" size={24} color="black" />
                <Text>Thông báo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Home icon clicked')} style={styles.footerButton}>
                <FontAwesome name="user" size={24} color="black" />
                <Text>Thông tin</Text>
            </TouchableOpacity>
            {/* Add other buttons here */}
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeButton: {
        fontWeight: 'bold',
    },
});