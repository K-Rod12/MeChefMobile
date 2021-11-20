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




const Home = ({navigation}) => {

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
                }}>{item.title}</Text>
            </TouchableOpacity>
        )

    };

    return(

        <View style={styles.container}>

            {/*Header */}
            <ScrollView>

                <SafeAreaView>
                    <View>
                        <Text style={styles.titleText} onPress={() => navigation.navigate('Pantry')}> Your Pantry <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/> </Text>
                    </View>

                    <FlatList 
                    data={pantryData}
                    renderItem={renderPantry}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{
                        marginLeft: 10,
                        top: 15
                    }}> 
                    </FlatList>
                </SafeAreaView>
                

                <View> 
                    <Text style={styles.titleText} onPress={() => navigation.navigate('Recipes')}> Your Recipes <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/> </Text>
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




                <View> 
                    <Text style={styles.titleText} onPress={() => navigation.navigate('Explore')} > Explore <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/> </Text>
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