import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from './AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Mật khẩu nhập lại không trùng');
    } else if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Vui lòng điền đầy đủ thông tin');
    } else {
      register(email, password);
      Alert.alert('Đăng ký thành công');
      navigation.replace('Logins');
    }
  };

  const goToLoginScreen = () => {
    navigation.navigate('Logins');
  };

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 50,
    marginLeft:70
  },
  form: {
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    height:50,
    width:170,
    marginLeft:90,
    marginTop:20
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default Register;