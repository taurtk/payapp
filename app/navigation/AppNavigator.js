// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import HomeScreen from '../screens/HomeScreen';
// Import other navigators or screens as needed

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthNavigator} />
        {/* Add other stacks/screens if needed */}
        <HomeScreen></HomeScreen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
