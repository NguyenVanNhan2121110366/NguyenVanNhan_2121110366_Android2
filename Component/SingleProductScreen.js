import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const SingleProductScreen = () => {
    const route = useRoute();
    const { product } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>Rating: </Text>
                {Array.from({ length: Math.floor(product.rating.rate) }).map((_, index) => (
                    <Text key={index} style={styles.starIcon}>⭐</Text>
                ))}
                <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
                <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        marginBottom: 12,
        textAlign: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginRight: 4,
    },
    starIcon: {
        fontSize: 16,
    },
    ratingValue: {
        fontWeight: 'bold',
        marginRight: 2,
    },
    ratingCount: {
        marginLeft: 4,
    },
});

export default SingleProductScreen;