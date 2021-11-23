import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React, {useState} from 'react';
import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
import BlurOverlay from 'react-native-blur-overlay';
import PassMeter from 'react-native-passmeter';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

const RegisterScreen = ({navigation}) => {
    const [password, setPassword] = useState("");
    return(
        
        <View>
            <ScrollView> 
                <SafeAreaView > 
                    {/* <Text style={styles.titleText} onPress={() => navigation.navigate('TabNavigator')}> Register Screen </Text>       */}
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
                            Please create your MeChef account
                        </Text>
                    </View>

                </SafeAreaView>
                
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
                            placeholder = "First Name"
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
                                // top: 400,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginBottom: 10,
                                // position: 'absolute'
                            }}
                            placeholder = "Last Name"
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
                            minLength = {4}
                            maxLength = {15}
                            placeholder = "Password"
                            secureTextEntry={true}
                            onChangeText={password => setPassword(password)}
                            TouchableOpacity
                            //value = {text}
                        >
                        </TextInput>
                        <PassMeter
                                showLabels
                                password={password}
                                maxLength={MAX_LEN}
                                minLength={MIN_LEN}
                                labels={PASS_LABELS}
                                style = {{
                                    height: 10,
                                    width: 50,
                                    // padding: 10,
                                    // margin: 10,
                                    // marginRight: 10
                                }}
                        />
                        {/* <Text
                            style = {{
                                paddingLeft : 50,
                                paddingRight : 50,
                                paddingBottom: 5
                            }}
                        >Passwords must be between 4-12 characters long and contain at least 1 lowercase, uppercase, and number.</Text> */}
                        
                        <TouchableOpacity // Login
                            onPress = {() => navigation.navigate('LoginScreen')}
                            // underlayColor = "#FFB9B9"
                            style = {
                                {
                                    marginTop: 30,
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
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ScrollView>
        </View>

    );

};

export default RegisterScreen;

// import { NavigationContainer } from '@react-navigation/native';
// import Navigation from '../App';
// import React from 'react';
// import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView} from 'react-native';
// import colors from '../assets/colors/colors'
// import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import recipesData from '../data/recipeData';
// import styles from '../assets/styles';
// import BlurOverlay from 'react-native-blur-overlay';

// import Feather from 'react-native-vector-icons/Feather';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// const RegisterScreen = ({navigation}) => {

//     return(
        
//         <View>
//             <ScrollView> 
//                 <SafeAreaView > 
//                     {/* <Text style={styles.titleText} onPress={() => navigation.navigate('TabNavigator')}> Register Screen </Text>       */}
//                     <Image 
//                         style = {{
//                             marginTop: 50,
//                             alignSelf:'center',
//                             width: 150,
//                             height: 110,
//                             resizeMode: 'contain'
//                         }}
//                         source = {require('../images/MeChefLogo.png')}
//                     />
//                     <View>
//                         <Text style = {{
//                             // height: 100, 
//                             top: 30, 
//                             fontSize: 25, 
//                             textAlign: 'center',
//                             fontWeight: 'bold'
//                         }}>
//                             Please create your MeChef account
//                         </Text>
//                     </View>

//                 </SafeAreaView>
                
//                 <SafeAreaView>
//                     <KeyboardAvoidingView behavior="position" style = {{alignItems: 'center'}}>
//                         <TextInput
//                             style = {{
//                                 borderColor: "gray",
//                                 width: 320,
//                                 borderWidth: 0.5,
//                                 borderRadius: 8,
//                                 padding: 10,
//                                 // top: 400,
//                                 justifyContent: 'center',
//                                 alignSelf: 'center',
//                                 marginBottom: 10,
//                                 // position: 'absolute'
//                             }}
//                             placeholder = "First Name"
//                             //value = {text}
//                             >
//                         </TextInput>
//                         <TextInput
//                             style = {{
//                                 borderColor: "gray",
//                                 width: 320,
//                                 borderWidth: 0.5,
//                                 borderRadius: 8,
//                                 padding: 10,
//                                 // top: 400,
//                                 justifyContent: 'center',
//                                 alignSelf: 'center',
//                                 marginBottom: 10,
//                                 // position: 'absolute'
//                             }}
//                             placeholder = "Last Name"
//                             //value = {text}
//                             >
//                         </TextInput>
//                         <TextInput
//                             style = {{
//                                 borderColor: "gray",
//                                 width: 320,
//                                 borderWidth: 0.5,
//                                 borderRadius: 8,
//                                 padding: 10,
//                                 // top: 400,
//                                 justifyContent: 'center',
//                                 alignSelf: 'center',
//                                 marginBottom: 10,
//                                 // position: 'absolute'
//                             }}
//                             placeholder = "Email Address"
//                             //value = {text}
//                             >
//                         </TextInput>
//                         <TextInput
//                             style = {{
//                                 borderColor: "gray",
//                                 width: 320,
//                                 borderWidth: 0.5,
//                                 borderRadius: 8,
//                                 padding: 10,
//                                 // top: 400,
//                                 justifyContent: 'center',
//                                 alignSelf: 'center',
//                                 marginBottom: 10,
//                                 // position: 'absolute'
//                             }}
//                             placeholder = "Username"
//                             //value = {text}
//                             >
//                         </TextInput>
                        
//                         <TextInput
//                             style = {{
//                                 borderColor: "gray",
//                                 width: 320,
//                                 borderWidth: 0.5,
//                                 borderRadius: 8,
//                                 padding: 10,
//                                 // top: 25,
//                                 justifyContent: 'center',
//                                 alignSelf: 'center',
//                                 marginBottom: 10,
//                                 // position: 'absolute',
//                                 // width:    '100%',
//                                 // bottom:   this.state.keyboardOffset,
//                             }}
//                             placeholder = "Password"
//                             secureTextEntry={true}
//                             //value = {text}
//                         >
//                         </TextInput>
//                         {/* <Text
//                             style = {{
//                                 paddingLeft : 50,
//                                 paddingRight : 50,
//                                 paddingBottom: 5
//                             }}
//                         >Passwords must be between 4-12 characters long and contain at least 1 lowercase, uppercase, and number.</Text> */}
                        
//                         <TouchableOpacity // Login
//                             onPress = {() => navigation.navigate('TabNavigator')}
//                             // underlayColor = "#FFB9B9"
//                             style = {
//                                 {
//                                     width: 320,
//                                     height: 46,
//                                     backgroundColor: '#F65D5D',
//                                     borderRadius: 100,
//                                     // top: 450,
//                                     justifyContent: 'center',
//                                     alignSelf: 'center',
//                                     // shadowOffset:{  width: 1,  height: 2,  },
//                                     // shadowColor: 'black',
//                                     // shadowOpacity: 1.0,
//                                 }
//                             }
//                             >
//                             <Text style = {{
//                                 textAlign: 'center',
//                                 justifyContent: 'center',
//                                 alignSelf: 'center',
//                                 color: 'white'
//                             }}>
//                                 Create Account
//                             </Text>
//                         </TouchableOpacity>
//                     </KeyboardAvoidingView>
//                 </SafeAreaView>
//             </ScrollView>
//         </View>

//     );

// };

// export default RegisterScreen;