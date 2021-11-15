import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './screens/Home';
import Discover from './screens/Discover';
import Profile from './screens/Profile';
import Pantry from './screens/Pantry';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        activeTintColor: colors.pink,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Feather name="search" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        tabBarOptions={{
          backgroundColor: colors.yellow,
        }}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Pantry"
          component={Pantry}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
