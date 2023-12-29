import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>Login</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                    source={require('../Image/images.png')}>
                </Image>
                {/* <Text style={styles.title}>Login</Text> */}
                <StatusBar style="auto"/>
            </View>
            <View style={styles.InforContainer}>
                <TextInput style={styles.input}
                    placeholder="Name"
                    placeholderTextColor='rgba(255,255,255,9.8)'
                />
                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor='rgba(255,255,255,9.8)'
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Login"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:
    {
        width: 100,
        height: 100,
        top:-70
    },
    title: {
        textAlign: 'center',
    },
    InforContainer:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 250,
        padding: 1,
        alignItems: 'center',
        // backgroundColor: 'black',

    },

    text:
    {
        bottom: 20,
    },

    input: {
        top: -70,
        height: 30,
        width: 200,
        backgroundColor: '#808080',
        alignItems: 'center',
        marginTop: 10,
        position: 'relative',
    },
    button:
    {
        bottom:-180,
        width:100,
    }

});
