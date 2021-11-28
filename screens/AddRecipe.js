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
import LoginScreen from './LoginScreen';

const AddRecipe = ({navigation, props, route}) => {
    const user = route.params;
    const renderRecipes = ({item}) => {

        return(
    
            <TouchableOpacity onPress={() => navigation.navigate('Recipe', item) } > 
                <ImageBackground
                source ={item.image}
                style={styles.recipeItem}
                imageStyle={styles.recipeItemImage}
                >
                
                    <View style={styles.recipeTitleUnderlay}></View>
                    
                    <View>
                        <Text style={styles.recipeItemTitle}>{item.title}</Text>
                    </View>
    
    
    
                </ImageBackground>
            </TouchableOpacity>
        )
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
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: colors.white
                }}>{item.Name}</Text>
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
                    >Your Recipes</Text>
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
                            Add Recipe
                        </Text>
                    
                    </TouchableOpacity>

                    
                </View>
                
                <View styles={styles.recipesWrapper}>
                    <FlatList
                        data={recipesData}
                        renderItem={renderRecipes}
                        keyExtractor={(item, navigation) => (item.id, navigation.navigate)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
            </ScrollView>
        </View>

    );

};

export default AddRecipe;