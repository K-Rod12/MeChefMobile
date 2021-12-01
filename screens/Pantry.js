import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React, {useState} from 'react';
import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView, Dimensions, Modal, Pressable} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
import BlurOverlay from 'react-native-blur-overlay';
import pantryData from '../data/pantryData';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {SearchBar} from 'react-native-elements';
import LoginScreen from './LoginScreen';
import { NavigationEvents } from 'react-navigation';

const log = console.log;


const searchForIngURL = "http://mechef.zapto.org/api/searchForIngredient";
const addToPantryURL = "http://mechef.zapto.org/api/addToPantry";
const removePantryURL = "http://mechef.zapto.org/api/removeFromPantry";

const Pantry = ({navigation, props, route}) => {
    const [text, setText] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [ingredientToAdd, setIngredientToAdd] = useState('');
    const [ingredientToDelete, setIngredientToDelete] = useState('');
    var user = route.params;
    var [updatedUser, setUpdatedUser] = useState([]);
    // var searchResult = [];
    log('update\n')
    // log(updatedUser);
    // var count = Object.keys(user[0].Ingredient_List).length;

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    log(user)

    
    const addItem = () => {
        //POST json
        var dataToSend = {userId: user[0].Login, ingName: ingredientToAdd};
        //POST request
        fetch(addToPantryURL, {
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
                user[0] = responseJson;
                // alert('Successfully Added Ingredient to Pantry!');
                renderPantry();
            }else{
                // alert('Ingredient is already in Pantry');
            }

            })
            //If response is not in json then in error
            .catch((error) => {
                // alert(JSON.stringify(error));
                console.error(error);
                // navigation.navigate('LoginScreen');
            });
            
          //window.location.reload(false);
       
    };
    const removeItem = () => {
        //POST json
        var dataToSend = {userId: user[0].Login, ingName: ingredientToAdd};
        //POST request
        fetch(removePantryURL, {
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
                user[0] = responseJson;
                log('\n\nIng')
                log(dataToSend.ingName)
                // alert('Successfully Deleted This ingredient!');
                renderPantry();
            }else{
                // alert('Ingredient is already in Pantry');
            }

            })
            //If response is not in json then in error
            .catch((error) => {
                // alert(JSON.stringify(error));
                console.error(error);
                // navigation.navigate('LoginScreen');
            });
            
          //window.location.reload(false);
       
    };
    
    const renderPantry = ({item}) => {

        return(
            // <Text>{item.title}</Text>
            <TouchableOpacity style={{
                backgroundColor: colors.pink,
                width: 180,
                height: 40,
                borderRadius: 15,
                marginLeft: 5,
                marginRight: 5,
                marginVertical: 10,
                justifyContent: 'center'
            }}
            onLongPress={ () => {setIngredientToDelete(item.Name); removeItem()} }>
                <Text style={{
                    textAlign: 'center',
                    color: colors.white
                }}>{item.Name}</Text>
            </TouchableOpacity>
        )

    };

    // log(user[0])

    return(

        // <SafeAreaView>
        //     <View> </View>
        // </SafeAreaView>
        
        <View
        style={{
            backgroundColor: colors.white,
            height: '100%'
        }}>
            
                <View
                    style = {{
                        flexDirection: 'row',
                        marginTop:60,
                        backgroundColor: "white",
                    }}
                >
                    <MaterialIcons 
                    onPress={() => navigation.navigate('TabNavigator',{
                        screen: 'Home',
                        params: user
                    })}
                    style={{
                        marginTop: 5,
                        marginLeft: 15,
                        fontSize: 30,
                    }} name="arrow-back-ios"/>
                    <Text style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        left: 50,
                        alignSelf: 'center',
                        bottom: 0
                            }}
                    >Your Pantry</Text>
                </View>

                

                <View style = {{
                    alignContent: 'center',
                    flexDirection: 'row'
                }}
                >  
                    <View style = {styles.centeredView}>
                        <Modal
                            animationType = "slide"
                            transparent = {true}
                            visible={modalVisible}
                            onRequestClose={() =>{
                                setModalVisible(!modalVisible);
                            }}
                            >
                            <View style ={styles.centeredView}>
                                <View style ={styles.modalView}>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        
                                    <Text style = {{
                                        fontSize: 24, 
                                        fontWeight: 'bold', 
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        alignSelf: 'center',
                                        marginLeft: 60,
                                        // paddingBottom: 10
                                    }}>
                                            Enter Ingredient
                                    </Text>
                                    <TouchableOpacity
                                        style = {{
                                            // marginBottom: 20,
                                            // bottom: 20,
                                            marginLeft: 30,
                                            height: 46,
                                            justifyContent: 'center',
                                            alignContent:'center',
                                            //marginTop: 10,

                                        }}
                                        onPress = {() => setModalVisible(!modalVisible)}
                                    >
                                        <MaterialIcons style={{
                                            fontSize: 30,
                                            color: colors.pink
                                        }} name="cancel"/>
            
                                    </TouchableOpacity>
                                    </View>

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
                                        placeholder = "Enter Ingredient"
                                        placeholderTextColor = "grey"
                                        onChangeText = {ingredientToAdd => setIngredientToAdd(ingredientToAdd)}
                                        //value = {text}
                                    >
                                    </TextInput>
                                    <TouchableOpacity
                                        onPress = {addItem}
                                        // underlayColor = "#FFB9B9"
                                        style = {
                                            {
                                                width: 330,
                                                height: 46,
                                                backgroundColor: '#FFB9B9',
                                                borderRadius: 15,
                                                justifyContent: 'center',
                                                alignContent:'center',
                                                marginTop: 10,
                                                // alignSelf: 'center',
                                                // marginLeft: 110,
                                            }
                                        }
                                        >
                                        <Text style = {{
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            color: 'white',
                                        }}>
                                            Add Ingredient
                                        </Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress = {removeItem}
                                        // underlayColor = "#FFB9B9"
                                        style = {
                                            {
                                                width: 330,
                                                height: 46,
                                                backgroundColor: colors.pink,
                                                borderRadius: 15,
                                                justifyContent: 'center',
                                                alignContent:'center',
                                                marginTop: 10,
                                                // alignSelf: 'center',
                                                // marginLeft: 110,
                                            }
                                        }
                                        >
                                        <Text style = {{
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            color: 'white',
                                        }}>
                                            Remove Item
                                        </Text>
                                    
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity
                                        //onPress = {addItem}
                                        // underlayColor = "#FFB9B9"
                                        style = {
                                            {
                                                width: 365,
                                                height: 46,
                                                backgroundColor: '#FFB9B9',
                                                borderRadius: 15,
                                                justifyContent: 'center',
                                                alignContent:'center',
                                                // marginRight: 10,
                                                marginTop: 10,
                                                // alignSelf: 'center',
                                                // marginLeft: 110,
                                            }
                                        }
                                        onPress={() => setModalVisible(true)}
                                        >
                                        <Text style = {{
                                            textAlign: 'center',
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                            color: 'white',
                                            fontSize: 22,
                                        }}>
                                            Enter Ingredient
                                        </Text>
                                    
                                    </TouchableOpacity>
                
                    </View>
                    
                </View>
                
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
                >
                    <FlatList 
                        data={user[0].Ingredient_List}
                        renderItem={renderPantry}
                        //horizontal={false}
                        numColumns={2}
                        key={2}
                        //showsHorizontalScrollIndicator={false}
                        style={{
                            alignContent: 'center',
                            // marginBottom: 15,
                            //top: 15,
                            
                    }}> 
                    </FlatList>

                </View>


        </View>

    );

};

export default Pantry;