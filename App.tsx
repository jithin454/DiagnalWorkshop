/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './src/screens/aboutScreen/aboutScreen';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown: false,
          }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{
            headerShown: false,
          }} name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
