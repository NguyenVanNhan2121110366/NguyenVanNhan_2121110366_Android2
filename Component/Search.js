import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CartContext } from './CartContent';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Search = () => {
    const navigation = useNavigation();
    const CartScreen = () => {
        navigation.navigate('CartScreen');
    };
    const { cartItemCount, updateCartItemCount } = useContext(CartContext);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const cartItemsData = await AsyncStorage.getItem('cartItems');
            if (cartItemsData) {
                const parsedCartItems = JSON.parse(cartItemsData);
                updateCartItemCount(parsedCartItems.length);
            }
        } catch (error) {
            console.error(error);
        }
    };


    const handleSearch = () => {
        console.log('Performing search for:', searchText);
    };

    return (
        <View style={styles.searchContainer}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <MaterialIcons name="search" size={24} color="gray" />
                </TouchableOpacity>
                <View style={styles.searchButton}>

                </View>

            </View>
            <View style={styles.cart}>
                <TouchableOpacity style={styles.cartContainer} onPress={()=>CartScreen()}>
                    <FontAwesome name="shopping-cart" size={30} color="black" />
                    <View style={styles.cartCountContainer}>
                        <Text style={styles.cartCountText}>{cartItemCount}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 50,
        width: 470,
        paddingRight: 30
    },
    searchButton:
    {

    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
        paddingHorizontal: 10,
        width: '70%', // Giảm bề ngang thành phần tìm kiếm
        elevation: 2,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    searchButton: {
        padding: 10,
    },
    cart: {
        marginLeft: 10,
        alignItems: 'center',
        paddingRight: 80
    },
    cartContainer: {
        alignItems: 'center',
    },
    cartCountContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'absolute',
        top: -10,
        right: -10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartCountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Search;