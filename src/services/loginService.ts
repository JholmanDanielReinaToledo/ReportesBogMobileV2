import AsyncStorage from '@react-native-async-storage/async-storage';
import {User, UserLogin} from '../common/types';

const INFO_USER_KEY = 'infoUserKey';
const URL_BACK = 'http://52.87.242.42:5000';

export const setCurrenUser = async (user: User) => {
  try {
    await AsyncStorage.setItem(INFO_USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentUser = async () => {
  try {
    const userString = await AsyncStorage.getItem(INFO_USER_KEY);
    if (userString) {
      const user: User = JSON.parse(userString);
      return user;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};

export const login = async (usuariologin: UserLogin) => {
  const url = `${URL_BACK}/login`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuariologin),
  };

  const response = await fetch(url, requestOptions);
  console.log('Entra');
  if (response.ok) {
    const usuario: User = await response.json();
    setCurrenUser(usuario);
    return true;
  }
  return false;
};
