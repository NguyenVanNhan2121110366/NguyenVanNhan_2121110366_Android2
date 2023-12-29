import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function ListCategory() {
    return (
        <>
        
            <View style={styles.catetitle}>
                <Text style={{ fontSize: 20, color: "red", fontWeight: "600" }}>Danh mục</Text>
                <Text style={{ fontSize: 15, color: "blue", fontWeight: "600" }}>Xem thêm</Text>
            </View>
            <SafeAreaView style={styles.contain}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../Image/laptop.jpg')} /></View>
                    <Text>Laptop</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../Image/iphone.png')} /></View>
                    <Text>Điện thoại</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../Image/keyboard.jpg')} /></View>
                    <Text>Bàn phím</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <View style={styles.item}><Image style={styles.catepic} source={require('../Image/mouse.png')} /></View>
                    <Text>Chuột</Text>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    catepic: {

        width: 60,
        height: 60,
    },
    contain: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15
    },
    item: {
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
    },
    catetitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15
    },
});