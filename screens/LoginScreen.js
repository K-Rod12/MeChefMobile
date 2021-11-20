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

const LoginScreen = ({navigation}) => {

    state = {
        keyboardOffset: 0,
    };
    

    return (
        <View style={styles.container}>

            <SafeAreaView styles={{
                top: 60,
                alignItems: 'center',
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
                    <View style={{
                    top: 50,
                }}>
                    <Text style = {{
                        // height: 100, 
                        // top: 30, 
                        fontSize: 25, 
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>
                        Please log into your MeChef account
                    </Text>
                    <Text
                        style = {{ 
                            // position: 'relative',
                            // top: 30,  
                            textAlign: 'center',
                            paddingLeft: 50,
                            paddingRight: 50,
                            fontSize: 18,
                        }}>
                    </Text>
                </View>
                

            <SafeAreaView>
                <KeyboardAvoidingView behavior="position" style = {{alignItems: 'center'}}>
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
                        placeholder = "Username"
                        //value = {text}
                        >
                    </TextInput>
                    
                    <TextInput
                        style = {{
                            borderColor: "gray",
                            width: 320,
                            borderWidth: 0.5,
                            borderRadius: 8,
                            padding: 10,
                            // top: 25,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginBottom: 10,
                            // position: 'absolute',
                            // width:    '100%',
                            // bottom:   this.state.keyboardOffset,
                        }}
                        placeholder = "Password"
                        secureTextEntry={true}
                        //value = {text}
                        >
                    </TextInput>
                    
                    <TouchableOpacity // Login
                        onPress = {() => navigation.navigate('TabNavigator')}
                        // underlayColor = "#FFB9B9"
                        style = {
                            {
                                width: 320,
                                height: 46,
                                backgroundColor: '#FFB9B9',
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
                            Login
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
            </SafeAreaView>
        </View>
    );
}

export default LoginScreen;

// import { NavigationContainer } from '@react-navigation/native';
// import Navigation from '../App';
// import React from 'react';
// import {View, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
// import colors from '../assets/colors/colors'
// import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import recipesData from '../data/recipeData';
// import styles from '../assets/styles';

// import Feather from 'react-native-vector-icons/Feather';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// const LoginScreen = ({navigation}) => {

//     return(
        
//         <View>
//             <ScrollView> 
//                 <SafeAreaView > 
//                     <Text style={styles.titleText} onPress={() => navigation.navigate('TabNavigator')}> Login Screen </Text>      
//                 </SafeAreaView>
//             </ScrollView>
//         </View>

//     );

// };

// export default LoginScreen;