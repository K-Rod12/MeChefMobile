import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Divider} from 'react-native-elements';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
import BlurOverlay from 'react-native-blur-overlay';
import pantryData from '../data/pantryData';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Profile = ({navigation}) => {

    return(

        // <SafeAreaView>
        //     <View> </View>
        // </SafeAreaView>
        
        <View>
            <SafeAreaView style = {{backgroundColor: 'white'}}>
                <Text style={{marginTop: 10,fontSize: 24, fontWeight: "bold", textAlign: 'center'}}> Settings </Text>
            </SafeAreaView>
            
            <Divider orientation="horizontal"/>

            <View style={{width: Dimensions.get('window').width, height: 50, backgroundColor:'white'}} on>
                <TouchableOpacity style={{height: 50}} onPress = {() => navigation.navigate('PersonalInformation')}>
                    <Text style ={{fontWeight: 'bold', fontSize: 24, marginLeft:20, marginTop: 10}}>
                        Personal Information
                    </Text>
                </TouchableOpacity>
                
            </View>
            <Divider orientation="horizontal"/>
            <View style={{width: Dimensions.get('window').width, height: 50, backgroundColor:'white'}}>
                <TouchableOpacity style={{height: 50}} onPress = {() => navigation.navigate('ResetPassword')}>
                    <Text style ={{fontWeight: 'bold', fontSize: 24, marginLeft:20, marginTop: 10}}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
                
            </View>
            <Divider orientation="horizontal"/>
            <View style={{width: Dimensions.get('window').width, height: 50, backgroundColor:'white'}}>
                <TouchableOpacity style={{height: 50}} onPress = {() => navigation.navigate('AddRecipe')}>
                    <Text style ={{fontWeight: 'bold', fontSize: 24, marginLeft:20, marginTop: 10}}>
                        Add Recipe
                    </Text>
                </TouchableOpacity>
                
            </View>
            <Divider orientation="horizontal"/>
            <View style={{width: Dimensions.get('window').width, height: 50, backgroundColor:'white'}}>
                <TouchableOpacity style={{height: 50}} onPress = {() => navigation.navigate('LoginScreen')}>
                    <Text style ={{fontWeight: 'bold', fontSize: 24, marginLeft:20, marginTop: 10}}>
                        Logout
                    </Text>
                </TouchableOpacity>
                
            </View>
            <Divider orientation="horizontal"/>
        </View>

    );

};

export default Profile;