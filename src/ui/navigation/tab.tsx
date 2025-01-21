import React from 'react';
import { Page, TabParams } from './types';
import HomePage from '../pages/home/home.page';
import DetailsPage from '../pages/details/details.page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabParams>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === Page.Home) {
            iconName = focused ? 'home' : 'home-outline';
          } else {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={Page.Home} component={HomePage} />
      <Tab.Screen
        name={Page.Details}
        component={DetailsPage}
        initialParams={{ item: '' }}
      />
    </Tab.Navigator>
  );
}