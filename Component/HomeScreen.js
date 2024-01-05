import React from 'react';
import { View, ScrollView } from 'react-native';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import Header from './Header';
export default function HomeScreen() {
    return (
        <>
            <Header></Header>
            <ScrollView >
                <ListCategory></ListCategory>
                <ListProduct></ListProduct>
            </ScrollView>
        </>

    );
}