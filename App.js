import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Login from './Component/Login';
import ListCategory from './Component/ListCategory';
import ListProduct from './Component/ListProduct';
import { ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SingleProductScreen from './Component/SingleProductScreen';
import HomeScreen from './Component/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}
      <StatusBar style="auto" />
      <Header>

      </Header>
      <NavigationContainer>
        {/* <ListCategory></ListCategory>
        <ListProduct></ListProduct> */}

        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerTitle: 'Trang chủ',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#808080', // Mã màu hex cho xám
                textShadowColor: 'black', // Mã màu CSS cho đen
                textShadowOffset: { width: -2, height: 2 }, // Độ dịch chuyển của đổ bóng
                textShadowRadius:1, // Bán kính của đổ bóng
                marginLeft: 130,
                marginTop: -20,
                //marginBottom:
              },
            }}
          />
          <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
        </Stack.Navigator>


      </NavigationContainer>



      {/* <Login></Login> */}
      {/* <Footer></Footer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
