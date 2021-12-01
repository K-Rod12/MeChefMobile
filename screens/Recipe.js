import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {Image, LogBox, View, Linking, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';


import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { NavigationActions } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import { gray, grey } from 'chalk';

const log = console.log;

LogBox.ignoreAllLogs();
console.reportErrorsAsExceptions = false;

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const Recipe = ({route}) => {
    const recipe = route.params;

    log('Recipe\n\n') 
    log(recipe.recipe);

    const renderRecipe = ({ item }) => (
        <Text style={{
            marginTop: 10,
            marginBottom: 5,
            color: '#7A7979',
            fontWeight: 'bold'
        }}> {item}</Text>
    );

    const loadInBrowser = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    return(
        
        <View style={{
            backgroundColor: "white",
            flex:3
            }}>
            <BackgroundImage
            source={{uri: recipe.recipe.images.LARGE.url}}
            style={styles.recipePageImage}
            >
                {/* <Text style={{
                    color: "white",
                }}>hello</Text> */}
            </BackgroundImage>
                <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    bottom: 10,
                    // height: 500,
                    borderRadius: 15,
                    backgroundColor: colors.white,
                }}>
                    <View>

                        <Text style={{
                            fontSize: 32,
                            fontWeight: "bold",
                            left: 10,
                        }}
                        >{recipe.recipe.label} </Text>
                    </View>

                    <View style={{
                        marginTop: 15,
                        left: 10,
                        flexDirection: 'row',
                    }}>

                        <Text style={{
                            fontSize: 30,
                        }}
                        >  Ingredients       </Text>

                        <Text style={{
                             marginTop: 13,                            
                             fontSize: 15,
                        }}><Fontisto style={styles.timeIcon} name="clock"/> {recipe.recipe.totalTime} Mins </Text>
                        <Text style={{
                             marginTop: 13,                            
                             fontSize: 15,
                        }}><MaterialCommunityIcons style={styles.appleIcon} name="food-apple-outline"/> {recipe.recipe.calories.toFixed(0)} cal </Text>
                    </View>



                    <View style={{
                        marginTop:10,
                        alignSelf: 'center',
                        alignContent: "center",
                        width: 350,
                        backgroundColor: "#EBE9E9",
                        borderRadius: 15,
                        
                    }}>

                        <FlatList
                            style={{
                                alignContent: 'center',
                                alignSelf: 'center'
                            }}
                            data={recipe.recipe.ingredientLines}
                            renderItem={renderRecipe}
                            // keyExtractor={(item, navigation) => (item.id, navigation.navigate)}
                            showsHorizontalScrollIndicator={false}
                            />

                    </View>
                </ScrollView>



                <TouchableOpacity style={{
                    // top: ,
                    alignContent: 'center',
                    alignItems: 'center',
                    height: 100,
                    width: '100%',
                    borderRadius: 10,
                    backgroundColor: colors.pink,
                }}
                onPress={ ()=>loadInBrowser(recipe.recipe.url)}
                >
                    <Text style={{
                        marginTop: 15,
                        fontSize: 36,
                        fontWeight: 'bold',
                        color: "white",
                    }}
                    >
                        Start Cooking!
                    </Text>
                </TouchableOpacity>


            </View>

    );

};

export default Recipe;