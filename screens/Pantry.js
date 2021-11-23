import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {Keyboard, View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase, Alert, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
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

const Pantry = ({navigation}) => {

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
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: colors.white
                }}>{item.title}</Text>
            </TouchableOpacity>
        )

    };

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
                        marginTop:60,
                        backgroundColor: "white",
                    }}
                >
                    <Text style={{
                            fontSize: 32,
                            fontWeight: "bold",
                            //left: 90,
                            alignSelf: 'center',
                            bottom: 0
                            }}
                    >Your Pantry</Text>
                </View>

                <ScrollView style={{
            //   marginTop: 30,  
            }}>

                <View style = {{
                    alignContent: 'center',
                    flexDirection: 'row'
                }}
                >  
                    <SearchBar 
                    inputContainerStyle={{
                        backgroundColor: '#E3E3E3',
                    }}
                    containerStyle={{
                        backgroundColor: 'white',
                        width: '75%',
                        borderTopColor: 'white',
                        borderBottomColor: 'white'
                    }}
                    lightTheme={true}
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}
                    placeholder="Search for item..."
                    // value={search}
                    ></SearchBar>

                    <TouchableOpacity
                        onPress = {() => navigation.navigate('Pantry')}
                        // underlayColor = "#FFB9B9"
                        style = {
                            {
                                width: 90,
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
                            color: 'white'
                        }}>
                            Add Item
                        </Text>
                    
                    </TouchableOpacity>

                    
                </View>
                
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
                >

                    <FlatList 
                        data={pantryData}
                        renderItem={renderPantry}
                        //horizontal={false}
                        numColumns={2}
                        key={2}
                        //showsHorizontalScrollIndicator={false}
                        style={{
                            alignContent: 'center'
                            //marginLeft: 10,
                            //top: 15,
                            
                    }}> 
                    </FlatList>

                </View>
            </ScrollView>

            {/* <TouchableOpacity style = {{backgroundColor:colors.white, width: Dimensions.get('window').width}}>
                <Text style={{
                            fontSize: 32,
                            fontWeight: "bold",
                            //textDecorationLine: 'underline',
                            //left: 90,
                            alignSelf: 'center',
                            bottom: 20
                            }}
                >
                    Add or Remove Items
                </Text>
                <TextInput
                        style = {{
                            backgroundColor: 'white',
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
                        placeholder = "Search Item"
                        //value = {text}
                    >
                </TextInput>
                <TouchableOpacity
                        onPress = {() => navigation.navigate('Pantry')}
                        // underlayColor = "#FFB9B9"
                        style = {
                            {
                                width: 320,
                                height: 46,
                                backgroundColor: '#FFB9B9',
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }
                        }
                        >
                        <Text style = {{
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            color: 'white'
                        }}>
                            Add Item
                        </Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress = {() => navigation.navigate('Pantry')}
                        // underlayColor = "#FFB9B9"
                        style = {
                            {
                                marginTop:10,
                                width: 320,
                                height: 46,
                                backgroundColor: '#FFB9B9',
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }
                        }
                        >
                        <Text style = {{
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            color: 'white'
                        }}>
                            Remove Item
                        </Text>
                </TouchableOpacity>
            </TouchableOpacity>
             */}
        </View>

    );

};

export default Pantry;