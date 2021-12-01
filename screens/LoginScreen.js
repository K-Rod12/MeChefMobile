import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React, {useState, useEffect} from 'react';
import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
import BlurOverlay from 'react-native-blur-overlay';
// import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const url = 'http://mechef.zapto.org/api/login';

const log = console.log;

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    var [user, setUser] = useState([]);
    const [ingredients, setIngredients] = useState();
    // state = {
    //     keyboardOffset: 0,
    //     username: '',
    //     password: '',
    //     isLogginIn: false,
    //     message: ''
    // }

    state = {
        username: '',
        password: '',
        ingredients: [],
    }
    
    const doLogin = () => {
        //POST json
        var dataToSend = {login: username, password: password};
        //POST request
        fetch(url, {
          method: 'POST', //Request Type
          body: JSON.stringify(dataToSend), //post body
          headers: {
            //Header Defination
            'Content-Type': 
              'application/json',
          },
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
              if (!responseJson.error)
              {
                user = responseJson;
                    // navigation.navigate('Home')
                    navigation.navigate('TabNavigator', {
                        screen: 'Home',
                        params: user
                    }
                    );
              }
              //alert(JSON.stringify(responseJson));
              //console.log(responseJson);
              //console.log(user[0].Pantry.Ingredient_List[0]); // this line works sometimes
              //console.log(user.Pantry[0].Ingredient_List[0]);
              // navigation.navigate('TabNavigator');
          })
          //If response is not in json then in error
          .catch((error) => {
            //alert(JSON.stringify(error));
            console.error(error);
           // navigation.navigate('LoginScreen');
          });
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
                        onChangeText = {username => setUsername(username)}
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
                        onChangeText={password => setPassword(password)}
                        secureTextEntry={true}
                        //value = {text}
                        >
                    </TextInput>
                    {/* <MsgBox type={messageType}>{message}</MsgBox> */}
                    <TouchableOpacity // Login
                        onPress = {doLogin}
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
                    {/* Reset Password */}
                    <TouchableOpacity
                        onPress = {() => navigation.navigate('EmailVerification')}
                        style = {
                            {
                                color: '#FFB9B9',
                                //borderRadius: 100,
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
                            marginTop: 10,
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            color: 'blue'
                        }}>
                            Forgot your password?
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