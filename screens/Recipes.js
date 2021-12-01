import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';
// import renderRecipes from '../data/renderRecipes';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const log = console.log;

const Recipes = ({navigation, route}) => {

    const recipes = route.params;
    log('your recipes')
    log(recipes);

    const renderRecipes = ({item}) => {

        return(
    
            <TouchableOpacity onPress={() => navigation.navigate('Recipe', item) } > 
                <ImageBackground
                source ={{uri: item.recipe.image}}
                style={styles.recipeItem}
                imageStyle={styles.recipeItemImage}
                >
            
                    <View style={styles.recipeTitleUnderlay}></View>
                    
                    <View>
                        <Text style={styles.recipeItemTitle} numberOfLines={2} >{item.recipe.label}</Text>
                    </View>
    
                </ImageBackground>
            </TouchableOpacity>
        )
    };

    return(
        
        <View>

            <View style={{marginTop:40, marginBottom:10}}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 32
                    }}> 
                        Your Recipes
                    </Text>
            </View>

            <ScrollView style={{
                alignContent: 'center',
                alignSelf: 'center',
                alignSelf: 'center',
            }}> 


                <View styles={styles.recipesScreenWrapper}>
                        <FlatList 
                            numColumns='2'
                            data={recipes}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />

                </View>

            </ScrollView>
        </View>

    );

};

export default Recipes;