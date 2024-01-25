
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function FormCheckOut() {

    return (
        <View style={styles.container}>
      <Text style={styles.title}>Minh Nhan Shop</Text>
      <View style={styles.form}>
        <TextInput
          placeholder='Email'
          style={styles.input}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder='Password'
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          placeholder='Nhập lại Password'
          style={styles.input}
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
          <Text style={styles.btnText}>Đăng ký</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToLoginScreen}>
          <Text style={styles.linkText}>Trở về Login</Text>
        </TouchableOpacity>
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
        top: -70
    },
    register: {
        marginTop: -55,
        marginLeft: 160
    },
    Pass: {
        marginTop: -19,
        marginRight: 150
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
        color: 'white'
    },
    button:
    {
        bottom: -180,
        width: 100,
        marginTop: -150
    },

});
