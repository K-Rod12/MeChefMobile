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
import Pantry from './Pantry';

const log = console.log;

const Home = ({navigation, route}) => {
    var [user, setUser] = useState([]);
    // user = setUser(route.params);
    user = route.params;
    var count = Object.keys(user[0].Ingredient_List).length;
    const key = '&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&imageSize=LARGE&time=1-50&random=false'
    var [recipes, setRecipes] = useState([]);
    var [appleRecipes, setAppleRecipes] = useState([]);
    var [exploreRecipes, setExploreRecipes] = useState([]);
    var [isRecipes, setIsRecipe] = useState(false);

    log('\n\ntest2\n\n')
    log(user);
    
    const url = 'http://mechef.zapto.org/api/login';
    var testURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=apple&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&&time=1-50&imageSize=LARGE&random=false';
    var exploreURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=a&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&time=1-50&ingr=10&imageSize=LARGE&random=true';
    var recipeURL = 'https://api.edamam.com/api/recipes/v2?type=public&q='; //Bananas%20Apple&app_id=b3ff7aac&app_key=5ae74af09f6c48e7e1f444dcd524091a&health=alcohol-cocktail&imageSize=REGULAR&random=false';

    let c = [];

    // log(isRecipes);

    // if(count != 0)
    for(var i = 0; i < count; i++ ){
        if(i < count - 1 ){
            recipeURL += user[0].Ingredient_List[i].Name.replace(/ /g, '%20') + '%20';
        }else{
            recipeURL += user[0].Ingredient_List[i].Name.replace(/ /g, '%20');
        }
    }
    recipeURL += key;
    // log(recipeURL)
    

    useEffect(() => {

        fetch(recipeURL, {
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
                    recipes = setRecipes(responseJson.hits);
                }
            })
            //If response is not in json then in error
            .catch((error) => {
            //alert(JSON.stringify(error));
            console.error(error);
            // navigation.navigate('LoginScreen');
            });
            // fetch(testURL, {
            //     method: 'GET', //Request Type
            //     // body: JSON.stringify(dataToSend), //post body
            //     headers: {
            //     //Header Defination
            //     'Accept': 
            //         'application/json',
            //     },
            // })
            //     .then((response) => response.json())
            //     //If response is in json then in success
            //     .then((responseJson) => {
            //         if (!responseJson.error)
            //         {
            //             // recipes = setRecipes(responseJson);
            //             appleRecipes = setAppleRecipes(responseJson.hits);
            //             log('\n\nRecipes\n\n')
    
    
            //         }
            //     })
            //     //If response is not in json then in error
            //     .catch((error) => {
            //     //alert(JSON.stringify(error));
            //     console.error(error);
            //     // navigation.navigate('LoginScreen');
            //     });
            fetch(exploreURL, {
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
                        exploreRecipes = setExploreRecipes(responseJson.hits);
                    }
                })
                //If response is not in json then in error
                .catch((error) => {
                //alert(JSON.stringify(error));
                console.error(error);
                // navigation.navigate('LoginScreen');
                });
                var dataToSend = {login: 'Ken', password: 'Pooped#12'};
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
                            user = setUser(responseJson);
                            log('Login Test');
                              // navigation.navigate('TabNavigator', user);
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

            }, [])
                
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

    const renderExplore = ({item}) => {
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

// for(var i = 0; i < 3; i++){
//     c.push(appleRecipes[i]);
//     c.push(recipes[i]);
// }
// log('\n\nUser\n\n')
// log(user);

    if(count == 0){
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
                            
                            <View style={{
                                width: 370,
                                height: 60,
                                backgroundColor: colors.pink,
                                borderRadius: 15,
                                alignSelf: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                                textAlign: 'center'
                            }}>
                                <Text style={{
                                    marginTop: 5,
                                    width: 360,
                                    height: 60,
                                    fontSize: 20,
                                    color: "white",
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    
                                }}
                                onPress={() => navigation.navigate("Pantry", user)}
                                >
                                    Click Here to Add Your Ingredients to your Pantry!
                                </Text>

                            </View>
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
                                    data={exploreRecipes}
                                    renderItem={renderRecipes}
                                    keyExtractor={(item, navigation) => (item, navigation.navigate)}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
        
                        </View>
        
        
                    </ScrollView>
                </View>
        
            );
    }else{
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
                        data={user[0].Ingredient_List}
                        renderItem={renderPantry}
                        horizontal
                        // initialScrollIndex={count - 1}
                        // inverted={(count > 3) ? true : false}
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
                            <Text style={styles.titleText} onPress={() => navigation.navigate('Recipes', recipes )}> Your Recipes </Text>
                            <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/>
                    </View>
                    
                    <View styles={styles.recipesWrapper}>
                        <FlatList
                            data={recipes} 
                            renderItem={renderRecipes}
                            keyExtractor={(item, navigation) => (item.Ingredient_List, navigation.navigate)}
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
                                data={exploreRecipes}
                                renderItem={renderRecipes}
                                keyExtractor={(item, navigation) => (item, navigation.navigate)}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
    
                    </View>
    
    
                </ScrollView>
            </View>
    
        );
    }

    

};

export default Home;