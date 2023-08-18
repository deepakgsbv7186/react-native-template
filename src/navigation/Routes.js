import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../screens';
import AuthScreen from './AuthStack';
import MainScreen from './MainStack';
import navigationstrings from './navigationstrings';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigationstrings.TAB_ROUTES}>
        {AuthScreen(Stack)}
        {MainScreen(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
