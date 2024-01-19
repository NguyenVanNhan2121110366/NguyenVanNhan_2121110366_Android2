import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SingleProductScreen from './Component/SingleProductScreen';
import HomeScreen from './Component/HomeScreen';
import CartScreen from './Component/CartScreen';
import { CartProvider } from './Component/CartContent';
import Logins from './Component/Login';
import Register from './Component/Register';
import AuthContext from './Component/AuthContext';
import { SearchProvider } from './Component/SearchContext';
import Footer from './Component/Footer';


const Stack = createStackNavigator();

export default function App() {
  const [registeredUser, setRegisteredUser] = useState(null);

  const register = (email, password) => {
    setRegisteredUser({ email, password });
  };

  const login = (email, password) => {
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      return true;
    }
    return false;
  };
  return (
    <AuthContext.Provider value={{ register, login }}>
      <CartProvider>
        <SearchProvider>
          <View style={styles.container}>
            {/* <Text>Hello</Text> */}
            <StatusBar style="auto" />

            <NavigationContainer>
              {/* <ListCategory></ListCategory>
        <ListProduct></ListProduct> */}
              <Stack.Navigator initialRouteName="Logins">
                <Stack.Screen
                  name="Logins"
                  component={Logins}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='Register'
                  component={Register}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerTitle: 'Trang chủ',
                    headerLeft: null,
                    headerTitleStyle: {
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: '#808080',
                      textShadowColor: 'black',
                      textShadowOffset: { width: -2, height: 2 },
                      textShadowRadius: 1,
                      marginLeft: 110,
                      marginTop: -20,
                    },
                  }}
                />
                <Stack.Screen name="SingleProduct" component={SingleProductScreen} />
                <Stack.Screen
                  name="CartScreen"
                  component={CartScreen}
                  options={{ headerTitle: 'Giỏ hàng' }}
                />
              </Stack.Navigator>
              {/* <Footer></Footer> */}
            </NavigationContainer>

            {/* <Login></Login> */}
            
            
          </View>
        </SearchProvider>

      </CartProvider>
      
    </AuthContext.Provider>
    


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
