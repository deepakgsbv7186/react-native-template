import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform} from 'react-native';
import {
  COLORS,
  VectorIcon,
  moderateScale,
  moderateScaleVertical,
  textScale,
  verticalScale,
} from '../theme';
import navigationstrings from './navigationstrings';
import {Explore, Home, Notification, Profile} from '../screens';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default TabRoutes = () => {
  const pointsTo = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName={navigationstrings.DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? verticalScale(90) : verticalScale(60),
        },
        tabBarItemStyle: {paddingVertical: moderateScaleVertical(8)},
        tabBarLabelStyle: {
          color: COLORS.primary,
          textTransform: 'capitalize',
          fontSize: textScale(10),
        },

        // tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={navigationstrings.DASHBOARD}
        component={HomeDashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name={focused ? 'home' : 'home-outline'}
              type={'Ionicons'}
              size={moderateScale(20)}
              color={COLORS.primary}
              onPress={() => pointsTo.navigate(navigationstrings.HOME)}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationstrings.EXPLORE}
        component={Explore}
        options={{
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name={focused ? 'world' : 'world-o'}
              type={'Fontisto'}
              size={moderateScale(20)}
              color={COLORS.primary}
              onPress={() => pointsTo.navigate(navigationstrings.EXPLORE)}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationstrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name={focused ? 'person' : 'person-outline'}
              type={'Ionicons'}
              size={moderateScale(20)}
              color={COLORS.primary}
              onPress={() => pointsTo.navigate(navigationstrings.PROFILE)}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const HomeDashboard = () => {
  return (
    <Stack.Navigator
      initialRouteName={navigationstrings.HOME}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationstrings.HOME} component={Home} />
      <Stack.Screen
        name={navigationstrings.NOTIFICATION}
        component={Notification}
      />
    </Stack.Navigator>
  );
};
