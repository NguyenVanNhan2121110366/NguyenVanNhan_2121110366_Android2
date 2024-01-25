import React, { useEffect, } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartContext } from './CartContent';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';

const CartScreen = () => {
    const navigation = useNavigation();


    const { updateCartItemCount } = useContext(CartContext);

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchCartItems();
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    const fetchCartItems = async () => {
        try {
            const cartItemsData = await AsyncStorage.getItem('cartItems');
            if (cartItemsData) {
                const parsedCartItems = JSON.parse(cartItemsData);
                setCartItems(parsedCartItems);
                updateCartItemCount(getCartItemCount(parsedCartItems));
            }
        } catch (error) {
            console.log('Error fetching cart items:', error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        console.log('Removing item with ID:', itemId);
        try {
            const updatedCartItems = cartItems.map(item => {
                if (item.id === itemId) {
                    item.quantity -= 1;
                    if (item.quantity === 0) {
                        return null;
                    }
                }
                return item;
            }).filter(Boolean);

            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            updateCartItemCount(getCartItemCount(updatedCartItems));

        } catch (error) {
            console.log('Error removing item from cart:', error);
        }
    };

    const handleAddItem = async (itemId) => {
        console.log('Adding item with ID:', itemId);
        try {
            const updatedCartItems = cartItems.map(item => {
                if (item.id === itemId) {
                    item.quantity += 1;
                }
                return item;
            });

            setCartItems(updatedCartItems);
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

            updateCartItemCount(getCartItemCount(updatedCartItems));
            calculateTotalPrice();
        } catch (error) {
            console.log('Error adding item to cart:', error);
        }
    };

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
    };

    const getCartItemCount = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            Alert.alert('Giỏ hàng trống');
        } else {
            await AsyncStorage.removeItem('cartItems');
            setCartItems([]);
            setTotalPrice(0);
            updateCartItemCount(0);

            Alert.alert('Thanh toán thành công', 'Tổng cộng là: $' + totalPrice.toFixed(2));
            console.log('Checkout');
        }
    };

    const handleFormCheckOut = () => {
        navigation.navigate('FormCheckOut');
    };

    const handleQuantityChange = (itemId, quantity) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                item.quantity = isNaN(quantity) ? 0 : quantity;
            }
            if (item.quantity === 0) {
                item.quantity = 1
            }

            return item;
        });

        setCartItems(updatedCartItems);
        calculateTotalPrice();
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giỏ hàng</Text>
            {cartItems.length > 0 ? (
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                            <View style={styles.cartItemInfo}>
                                <Text style={styles.cartItemTitle}>{item.title}</Text>
                                <Text style={styles.cartItemPrice}>Giá: ${item.price.toFixed(2)}</Text>
                            </View>
                            <View style={styles.Remove}>
                                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                                    <View style={styles.removeItemIcon}>
                                        <FontAwesome5 name="minus" size={30} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.Add}>
                                <TouchableOpacity onPress={() => handleAddItem(item.id)}>
                                    <View style={styles.addItemIcon}>
                                        <FontAwesome5 name="plus" size={30} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={styles.quantityInput}
                                value={item.quantity !== null ? item.quantity.toString() : ''}
                                onChangeText={(text) => handleQuantityChange(item.id, parseInt(text))}
                                keyboardType="numeric"
                            />
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.emptyText}>Giỏ hàng trống</Text>
            )}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Tổng cộng: ${totalPrice.toFixed(2)}</Text>
                <Button title="Thanh toán" onPress={handleCheckout} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    cartItemImage: {
        width: 80,
        height: 80,
        marginRight: 16,
    },
    cartItemInfo: {
        flex: 1,
    },
    cartItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cartItemPrice: {
        fontSize: 16,
    },
    Remove: {
        marginRight: 10,
    },
    Add: {
        marginLeft: 10,
    },
    removeItemIcon: {
        backgroundColor: 'red',
        borderRadius: 20,
        padding: 5,
    },
    addItemIcon: {
        backgroundColor: 'green',
        borderRadius: 20,
        padding: 5,
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: 50,
        textAlign: 'center',
    },
    emptyText: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    totalContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default CartScreen;