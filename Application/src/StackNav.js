import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import Registration from './screens/Registration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNav from './DrawerNav';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

function StackNav() {
  const [isloggedin, setLogged] = useState(null)

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }
  useEffect(() => {
    detectLogin()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Start" component={StartScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Main" component={DrawerNav} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Registration" component={Registration} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;