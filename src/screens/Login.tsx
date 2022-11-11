import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {login} from '../services/loginService';

const Login = () => {
  const [identificacion, setIdentificacion] = useState('');
  const [password, setPassword] = useState('');

  const loginLocal = async () => {
    const respuesta = await login({identificacion, password});
    if (respuesta) {
    } else {
      Alert.alert('Ocurrio un error');
    }
  };

  return (
    <SafeAreaView>
      <Text style={[styles.appTitle]}>ReportesBog</Text>
      <Text style={styles.loginTitle}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setIdentificacion}
        placeholder="Número de Identificación"
        placeholderTextColor={'black'}
        value={identificacion}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="Contraseña"
        placeholderTextColor={'black'}
        value={password}
        secureTextEntry={true}
      />
      <Pressable style={styles.LoginButton} onPress={loginLocal}>
        <Text>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.5,
    padding: 10,
    borderBottomColor: 'black',
    color: 'black',
  },
  LoginButton: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: '25%',
    marginRight: '25%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3498DB',
  },
  loginArea: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: '10%',
    paddingTop: '20%',
  },
  loginTitle: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
  },
  appTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 60,
    color: 'black',
  },
  container: {
    maxWidth: 250,
    marginTop: 70,
    marginBottom: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
  loginRegisterText: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
  loginRegisterButton: {
    padding: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Login;
