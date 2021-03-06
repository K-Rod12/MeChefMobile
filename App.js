import React from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';

import Home from './screens/Home';
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import Pantry from './screens/Pantry';
import Recipe from './screens/Recipe';
import Recipes from './screens/Recipes';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PersonalInformation from './screens/PersonalInformation';
import EmailVerification from './screens/EmailVerification';
import ResetPassword from './screens/ResetPassword';
import AddRecipe from './screens/AddRecipe';

import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import {NavigationContainer, validatePathConfig} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import { TransitionSpecs } from '@react-navigation/stack';
import { disable } from 'debug';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();
LogBox.ignoreAllLogs();
console.reportErrorsAsExceptions = false;


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
        name="EmailVerification"
        component={EmailVerification}
        options={{
          headerShown: false, //Set Header Title
        }}
      />
      <Stack.Screen
        name="AddRecipe"
        component={AddRecipe}
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

const TabNavigator = ({route}) => {
  const user = route.params;
  return (
    <Tab.Navigator
      tabBarOptions={{
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

const config = {
  animation: 'timing',
  config: {
    duration: 500,
    // easing: 50,
  },
};

const cardConfig = {
  animation: 'timing',
  config: {
    duration: 500,
  },
};

const closeCardConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 1.,
    restSpeedThreshold: 1.,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    // easing: 50,
  },
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
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
            options={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal-inverted",
              transitionSpec:{
                open: config,
                close: closeConfig
              }
            }}
            // screenOptions={{
            //   gestureEnabled: true,
            //   gestureDirection: "vertical",
            //   transitionSpec:{
            //     open: config,
            //     close: config
            //   }
            // }}
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
          options={{
            headerShown: false,
            gestureEnabled: true,
            // gestureDirection: "horizontal",
            cardStyle: true,
            presentation: 'modal',
            gestureDirection: "vertical",
            transitionSpec:{
              // open: TransitionSpecs.RevealFromBottomAndroidSpec,
              // close: TransitionSpecs.RevealFromBottomAndroidSpec
              open: cardConfig,
              close: closeCardConfig
            }
          }}

        />
        <Stack.Screen
          name="Recipes"
          component={Recipes}
        />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
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
