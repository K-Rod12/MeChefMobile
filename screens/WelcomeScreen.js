import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
import BlurOverlay from 'react-native-blur-overlay';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const WelcomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>

            <SafeAreaView style={{
                // justifyContent: 'center',
                top: 60,
                alignItems: 'center',    
            }}>
                <Image 
                    style = {styles.meChefLogo}
                    source = {require('../images/MeChefLogo.png')}
                    // onPress = {() => navigation.navigate('TabNavigator')}
                />

                <View style={{
                    top: 50,
                }}>
                    <Text style = {{
                        height: 50, 
                        // top: 30, 
                        fontSize: 30, 
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                        Welcome to MeChef!
                    </Text>
                    <Text
                        style = {{ 
                            // position: 'relative',
                            // top: 30,  
                            textAlign: 'center',
                            paddingLeft: 50,
                            paddingRight: 50,
                            fontSize: 18,
                        }}
                        >A community built to make finding recipes matching the ingredients that you already have in your pantry!
                    </Text>
                </View>


                {/* Login */}
                <SafeAreaView style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: 80,
                }}> 
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginScreen')}
                        style = {
                            {
                                width: 320,
                                height: 46,
                                backgroundColor: '#FFB9B9',
                                borderRadius: 100,
                                justifyContent: 'center',
                                //top: 40,
                                // shadowOffset:{  width: 1,  height: 2,  },
                                // shadowColor: 'black',
                                // shadowOpacity: 1.0,
                            }
                        }
                        // onPress = {navigation.navigate('LoginScreen')}
                        >
                        <Text style = {{
                            textAlign: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: 20,
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>


                    <View>
                        <Text></Text>
                    </View>

                    <TouchableOpacity // Create Account
                        onPress = {() => navigation.navigate('TabNavigator')}
                        underlayColor = "#FFB9B9"
                        style = {
                            {
                                width: 320,
                                height: 46,
                                backgroundColor: '#F65D5D',
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                //top: 50
                                // shadowOffset:{  width: 1,  height: 2,  },
                                // shadowColor: 'black',
                                // shadowOpacity: 1.0,
                            }
                        }
                        >
                        <Text style = {{
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            color: 'white',
                            fontSize: 20
                        }}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
            </SafeAreaView>
            
            </SafeAreaView>
        </View>
        

        
    ); 
};

export default WelcomeScreen;