import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Home from './screens/Home';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import Pantry from './screens/Pantry';
import Recipe from './screens/Recipe';
import Recipes from './screens/Recipes';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false, //Set Header Title
        }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false, //Set Header Title
        }}
        />
    </Stack.Navigator>
  );
};

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
        name="Explore"
        component={Explore}
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
        initialRouteName="WelcomeScreen"
        tabBarOptions={{
          backgroundColor: colors.yellow,
        }}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="WelcomeScreen"
          component={Auth}
          options={{headerShown: false}}
          />
        {/* <Stack.Screen
          name="LoginScreen"
          component={Auth}
          options={{headerShown: false}}
          /> */}
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
          name="Explore"
          component={Explore}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
        <Stack.Screen
          name="Pantry"
          component={Pantry}
        />
        <Stack.Screen
          name="Recipe"
          component={Recipe}
        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const LoginNav = createStackNavigator();

// const Login = () => {

//   <LoginNav.Navigator>
//     <LoginNav.Screen
//       name="Login"
//       component={Login}
//       options={{
//         headerShown: false,
//       }}
//     >
//     </LoginNav.Screen>
//   </LoginNav.Navigator>

// };

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default App;
