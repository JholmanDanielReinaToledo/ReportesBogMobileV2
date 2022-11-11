import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import {getCurrentUser} from '../services/loginService';
import Reports from '../screens/Reports';
import Mapa from '../screens/Mapa';
import Settings from '../screens/Settings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  const [isLoged, setIsLoged] = useState<boolean>();

  const getUserFromStorage = async () => {
    const userR = await getCurrentUser();
    if (userR) {
      setIsLoged(true);
    } else {
      setIsLoged(false);
    }
  };

  useEffect(() => {
    getUserFromStorage();
  }, []);
  console.log(isLoged);

  return isLoged ? <NavLoged /> : <NavForLogin />;
};

const NavForLogin = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const NavLoged = () => {
  return (
    <Tab.Navigator initialRouteName="Reportes">
      <Tab.Screen name="Reportes" component={Reports} />
      <Tab.Screen
        name="Mapa"
        component={Mapa}
        options={{
          tabBarLabel: 'Mapa',
        }}
      />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
