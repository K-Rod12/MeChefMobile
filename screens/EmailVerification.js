import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
import BlurOverlay from 'react-native-blur-overlay';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const EmailVerification = ({navigation}) => {
    
    return (
        <View style ={styles.container}>
            <SafeAreaView styles = {{
                top: 60,
                alignsItems: 'center',
            }}>
                <Image 
                        style = {{
                            marginTop: 50,
                            alignSelf:'center',
                            width: 150,
                            height: 110,
                            resizeMode: 'contain'
                        }}
                        source = {require('../images/MeChefLogo.png')}
                />
                <View>
                    <Text style = {{
                            // height: 100, 
                            top: 30, 
                            fontSize: 25, 
                            textAlign: 'center',
                            fontWeight: 'bold'
                    }}>
                        Enter your account's email address for a verification request
                    </Text>
                </View>
                
            </SafeAreaView>
            <SafeAreaView>
                <TextInput
                        style = {{
                            borderColor: "gray",
                            width: 320,
                            borderWidth: 0.5,
                            borderRadius: 8,
                            padding: 10,
                            // top: 400,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginBottom: 10,
                            // position: 'absolute'
                        }}
                        placeholder = "Email Address"
                        //value = {text}
                >
                </TextInput>
                <TouchableOpacity
                        onPress = {() => navigation.navigate('ResetPassword')}
                        // underlayColor = "#FFB9B9"
                        style = {
                            {
                                width: 320,
                                height: 46,
                                backgroundColor: '#F65D5D',
                                borderRadius: 100,
                                // top: 450,
                                justifyContent: 'center',
                                alignSelf: 'center',
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
                            color: 'white'
                        }}>
                            Send Verification Request
                        </Text>
                    </TouchableOpacity> 
            </SafeAreaView>
        </View>
    );
}

export default EmailVerification;