import React from 'react';
import { View, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import AppData from './pages/AppData';

const App = () => {
  const Stack = createNativeStackNavigator();
  const isdark = useColorScheme() === "dark"
  return (
    <NavigationContainer theme={isdark ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Add Details' component={AppData} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App