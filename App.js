import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import DecodingScreen from './screens/DecodingScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} options={{ title: 'Головний' }} />
        <Tab.Screen name="Decoding" component={DecodingScreen} options={{ title: 'Декодування' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профіль' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}