import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
      <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Messages" component={MessageScreen} 
        options={{
            tabBarLabel: 'Messages',
            tabBarIcon: ({ color, size }) => (
              <Icon name="message-circle" color={color} size={size} />
            ),
          }}/>
      </Tab.Navigator>
    );
  }

export default function Screens() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}