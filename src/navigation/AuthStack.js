import React from 'react';
import navigationstrings from './navigationstrings';
import {Login, Signup} from '../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationstrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationstrings.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
    </>
  );
}
