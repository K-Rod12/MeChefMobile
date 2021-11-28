import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import exploreData from '../data/exploreData';
import styles from '../assets/styles';
import FastImageView from 'react-native-fast-image';
import pantryData from '../data/pantryData';

// import renderRecipes from '../data/renderRecipes';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';




const Home = ({navigation, route}) => {
    const user = route.params;
    //console.log(user.user[0].Pantry);
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
                width: 150,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
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

        <View style={styles.container}>

            {/*Header */}
            <ScrollView>

                <View style={{
                    marginTop: 40
                }}
                >
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={styles.titleText} onPress={() => navigation.navigate('Pantry', user)}> Your Pantry </Text>
                        <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/>
                    </View>

                    <FlatList 
                    data={user[0].Pantry.Ingredient_List}
                    renderItem={renderPantry}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginLeft: 5,
                        marginTop: 10,
                        marginBottom: 10
                    }}> 
                    </FlatList>
                </View>
                

                <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={styles.titleText} onPress={() => navigation.navigate('Recipes')}> Your Recipes </Text>
                        <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/>
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




                <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={styles.titleText} onPress={() => navigation.navigate('Explore')}> Explore </Text>
                        <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/>
                </View>


                <View styles={styles.recipesWrapper}>
                        <FlatList
                            styles={{marginTop: 10}}
                            data={exploreData}
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

export default Home;