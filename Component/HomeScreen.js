import React from 'react';
import { ScrollView } from 'react-native';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';
import Header from './Header';
import Search from './Search';
import Images from './BackGround';
import Footer from './Footer';
export default function HomeScreen() {
    return (
        <>
            <Header></Header>
            <ScrollView >
                <Images></Images>
                <Search></Search>
                <ListCategory></ListCategory>
                <ListProduct></ListProduct>
                
            </ScrollView>
            <Footer></Footer>
        </>

    );
}