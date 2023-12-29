import React from 'react';
import { View, ScrollView } from 'react-native';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
export default function HomeScreen() {
    return (
        <ScrollView >


            <ListCategory></ListCategory>
            <ListProduct></ListProduct>
        </ScrollView>
    );
}