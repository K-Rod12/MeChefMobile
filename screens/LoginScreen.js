import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const LoginScreen = ({navigation}) => {

    return(
        
        <View>
            <ScrollView> 
                <SafeAreaView > 
                    <Text style={styles.titleText} onPress={() => navigation.navigate('TabNavigator')}> Login Screen </Text>      
                </SafeAreaView>
            </ScrollView>
        </View>

    );

};

export default LoginScreen;