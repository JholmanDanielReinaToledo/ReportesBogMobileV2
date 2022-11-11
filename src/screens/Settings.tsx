import React from 'react';
import {Pressable, Text} from 'react-native';
import RNRestart from 'react-native-restart';
import {loguot} from '../services/loginService';

const Settings = () => {
  const loguotLocal = async () => {
    console.log('Salir');
    await loguot();

    RNRestart.Restart();
  };

  return (
    <Pressable onPress={loguotLocal}>
      <Text>Login</Text>
    </Pressable>
  );
};

export default Settings;
