import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { DetailsScreen } from './components/DetailsScreen';
import { HeaderInput } from './components/HeaderInput';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false
        }}
      >
        <Stack.Screen name='HomeScreen' component={HomeScreen}
          options={{ title: 'Home Screen', headerRight: () => <HeaderInput /> }}
        />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}
          options={{
            title: 'Detail Screen',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
