import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React, {useState, useEffect, Component} from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import exploreData from '../data/exploreData';
import styles from '../assets/styles';
import FastImageView from 'react-native-fast-image';
import pantryData from '../data/pantryData';
import BlurOverlay,{closeOverlay,openOverlay} from 'react-native-blur-overlay'
// import renderRecipes from '../data/renderRecipes';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const log = console.log;

const Home = ({navigation, route}) => {
    const user = route.params;
    var count = Object.keys(user[0].Pantry.Ingredient_List).length;
    const key = '&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&imageSize=LARGE&time=1-50&random=false'
    var [recipes, setRecipes] = useState([]);

    
    // const testURL = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=5e11b97982854510823bc74ed70c95ba';
    // var testURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=chickens&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&health=alcohol-cocktail&imageSize=REGULAR&random=false';
    var URL = 'https://api.edamam.com/api/recipes/v2?type=public&q='; //Bananas%20Apple&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&health=alcohol-cocktail&imageSize=REGULAR&random=false';
    
    for(var i = 0; i < count; i++ ){
        if(i < count - 1 ){
            URL += user[0].Pantry.Ingredient_List[i].Name + '%20';
        }else{
            URL += user[0].Pantry.Ingredient_List[i].Name;
        }
    }
    
    URL += key;
    
    log(URL);

    useEffect(() => {
        fetch(URL, {
            method: 'GET', //Request Type
            // body: JSON.stringify(dataToSend), //post body
            headers: {
            //Header Defination
            'Accept': 
                'application/json',
            },
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                if (!responseJson.error)
                {
                    // recipes = setRecipes(responseJson);
                    recipes = setRecipes(responseJson);
                    log('\n\nRecipes\n\n')
                    // log(recipes)
                    // log(recipes.hits[0].recipe.label);


                    //   navigation.navigate('TabNavigator', {
                    //       screen: 'Home',
                    //       params: user
                    //   });
                }
            })
            //If response is not in json then in error
            .catch((error) => {
            //alert(JSON.stringify(error));
            console.error(error);
            // navigation.navigate('LoginScreen');
            });
    }, [])

    // getRecipe();

    const renderRecipes = ({item}) => {

        //log(item)

        return(
    
            <TouchableOpacity onPress={() => navigation.navigate('Recipe', item) } > 
                <ImageBackground
                source ={{uri: item.recipe.image}}
                style={styles.recipeItem}
                imageStyle={styles.recipeItemImage}
                >

                <BlurOverlay
                    style={styles.recipeTitleBlur}
                    customStyles={{alignItems: 'center', justifyContent: 'center'}}
                    blurStyle="dark"
                />                
                    <View style={styles.recipeTitleUnderlay}></View>
                    
                    <View>
                        <Text style={styles.recipeItemTitle} numberOfLines={2} >{item.recipe.label}</Text>
                    </View>
    
                </ImageBackground>
            </TouchableOpacity>
        )
    };

    const renderExplore = ({item}) => {

        //log(item)

        return(
    
            <TouchableOpacity onPress={() => navigation.navigate('Recipe', item) } > 
                <ImageBackground
                source ={item.image}
                style={styles.recipeItem}
                imageStyle={styles.recipeItemImage}
                >

                <BlurOverlay
                    style={styles.recipeTitleBlur}
                    customStyles={{alignItems: 'center', justifyContent: 'center'}}
                    blurStyle="dark"
                />                
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

    // for(var i = 0; i < 10; i++){
    //     log(recipes.hits[i].recipe.label);
    // }

    // log(recipes);

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


                {/* <View styles={styles.recipesWrapper}>
                    <FlatList
                        data={recipes[0]}
                        renderItem={renderExplore}
                        keyExtractor={(item, navigation) => (item.id, navigation.navigate)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                </View> */}
                <View styles={styles.recipesWrapper}>
                    <FlatList
                        data={recipes.hits}
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
                            renderItem={renderExplore}
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