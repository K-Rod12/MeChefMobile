import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import exploreData from '../data/exploreData';
import styles from '../assets/styles';
import {SearchBar} from 'react-native-elements';

// import renderRecipes from '../data/renderRecipes';

const log = console.log

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Explore = ({navigation, routes}) => {
    var [chineseRecipes, setChineseRecipes] = useState([]);
    var [mexicanRecipes, setMexicanRecipes] = useState([]);
    var [breakfastRecipes, setBreakfastRecipes] = useState([]);
    var [cocktailRecipes, setCocktailRecipes] = useState([]);
    var [dessertRecipes, setDessertRecipes] = useState([]);
    var [results, setResults] = useState([]);
    var [shouldShow, setShouldShow] = useState(false);

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    // var testURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=Chinese&app_id=e40fa41b&app_key=1e6a2d424a6bef49adda3d42b33e7b8a&cuisineType=Chinese&time=1-50&imageSize=LARGE&random=false';
    var dessertURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=chinese&app_id=eb05896f&app_key=c02e576858dbc9ba2c814a2faaad2e38&dishType=Desserts&time=1-120&imageSize=LARGE&random=false';
    var chineseURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=chinese&app_id=eb05896f&app_key=c02e576858dbc9ba2c814a2faaad2e38&cuisineType=Chinese&time=1-120&imageSize=LARGE&random=false';
    var mexicanURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=eb05896f&app_key=c02e576858dbc9ba2c814a2faaad2e38&cuisineType=Mexican&time=1-120&imageSize=LARGE&random=false';
    var breakfastURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=eb05896f&app_key=c02e576858dbc9ba2c814a2faaad2e38&time=1-120&mealType=Breakfast&imageSize=LARGE&random=false';
    var cocktailsURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=a&app_id=52713711&app_key=c164dfdb658a4d78eb3e840e90b0bc9c&health=alcohol-cocktail&imageSize=LARGE&random=true';
    var resultsURL = 'https://api.edamam.com/api/recipes/v2?type=public&q='
    
    
    const key = '&app_id=52713711&app_key=c164dfdb658a4d78eb3e840e90b0bc9c&time=1-120&imageSize=LARGE&random=false';

    resultsURL += searchQuery;
    resultsURL+= key;

    log(resultsURL)
    
    useEffect(() => {
        fetch(dessertURL, {
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
                    chineseRecipes = setDessertRecipes(responseJson.hits);
                    log('\n\n Chinese\n\n')
                    log(dessertRecipes)
                }
            })
            //If response is not in json then in error
            .catch((error) => {
            //alert(JSON.stringify(error));
            console.error(error);
            // navigation.navigate('LoginScreen');
            });
        fetch(chineseURL, {
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
                    chineseRecipes = setChineseRecipes(responseJson.hits);
                    log('\n\n Chinese\n\n')
                    log(chineseRecipes)
                }
            })
            //If response is not in json then in error
            .catch((error) => {
            //alert(JSON.stringify(error));
            console.error(error);
            // navigation.navigate('LoginScreen');
            });
            fetch(mexicanURL, {
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
                        mexicanRecipes = setMexicanRecipes(responseJson.hits);
                    }
                })
                //If response is not in json then in error
                .catch((error) => {
                //alert(JSON.stringify(error));
                console.error(error);
                // navigation.navigate('LoginScreen');
                });

            fetch(breakfastURL, {
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
                        breakfastRecipes = setBreakfastRecipes(responseJson.hits);
                    }
                })
                //If response is not in json then in error
                .catch((error) => {
                //alert(JSON.stringify(error));
                console.error(error);
                // navigation.navigate('LoginScreen');
                });
            fetch(cocktailsURL, {
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
                        cocktailRecipes = setCocktailRecipes(responseJson.hits);

                    }
                })
                //If response is not in json then in error
                .catch((error) => {
                //alert(JSON.stringify(error));
                console.error(error);
                // navigation.navigate('LoginScreen');
                });
                // renderPantry()
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

    function resultFetch () {
        fetch(resultsURL, {
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
                    results = setResults(responseJson.hits);
                    log('\n\nRecipes\n\n')
                }
            })
            //If response is not in json then in error
            .catch((error) => {
            //alert(JSON.stringify(error));
            console.error(error);
            // navigation.navigate('LoginScreen');
            });
    }



    log(searchQuery)


    return(
    
        <View style={{
            backgroundColor: colors.white,
            flex: 3,
        }}>

            <View style={{marginTop:40, marginBottom:10}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 32}}> Explore</Text>
            </View>

            <View style={{
                flexDirection: 'row',
            }}>
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
                    placeholder="Search for Recipe..."
                    value={searchQuery}
                    onChangeText={onChangeSearch}
                    onClear={onChangeSearch}
                    // onPressIn={setShouldShow(true)}
                    // onPressOut={setShouldShow(true)}
                    />
            <TouchableOpacity
                    style = {
                        {
                            width: 90,
                            height: 46,
                            backgroundColor: '#FFB9B9',
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignContent:'center',
                            marginRight: 10,
                            marginTop: 10,
                            // alignSelf: 'center',
                            // marginLeft: 110,
                        }
                    }
                    onPress={() =>{ 
                        setShouldShow(true); 
                    // }}
                        resultFetch();}}
                    >
                    <Text style = {{
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        color: 'white'
                    }}>
                        Search
                    </Text>
                                    
            </TouchableOpacity>

            </View>

            <View style={{
                    flexDirection: 'row'
                }}>
                    
                </View>

            <ScrollView> 

            {
                    shouldShow ? (
                        <View>

                            <Text style={styles.titleText}> Results </Text>
                            <View styles={styles.recipesScreenWrapper}>
                            <FlatList 
                                horizontal
                                maxToRenderPerBatch={5}
                                initialNumToRender={10}
                                data={results}
                                renderItem={renderRecipes}
                                keyExtractor={(item) => item.id}
                                showsHorizontalScrollIndicator={false}
                            />

                            </View>
                        </View>


                    ) : null
                    }

                <View style={{

                    flexDirection: 'row'
                }}>
                    <Text style={styles.titleText}> Desserts </Text>
                </View>

                <View styles={styles.recipesScreenWrapper}>
                        <FlatList 
                            horizontal
                            maxToRenderPerBatch={5}
                            initialNumToRender={10}
                            data={dessertRecipes}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />

                </View>

                <View style={{

                    flexDirection: 'row'
                }}>
                    <Text style={styles.titleText}> Breakfast Recipes </Text>
                </View>

                <View styles={styles.recipesScreenWrapper}>
                        <FlatList 
                            horizontal
                            maxToRenderPerBatch={5}
                            initialNumToRender={10}
                            data={breakfastRecipes}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />

                </View>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={styles.titleText}> Chinese Recipes </Text>
                </View>

                <View styles={styles.recipesScreenWrapper}>
                        <FlatList 
                            horizontal
                            maxToRenderPerBatch={5}
                            initialNumToRender={10}
                            data={chineseRecipes}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />

                </View>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={styles.titleText}> Mexican Recipes </Text>
                </View>

                <View styles={styles.recipesScreenWrapper}>
                        <FlatList 
                            horizontal
                            maxToRenderPerBatch={5}
                            initialNumToRender={10}
                            data={mexicanRecipes}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />

                </View>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={styles.titleText}> Cocktail Recipes </Text>
                </View>

                <View styles={styles.recipesScreenWrapper}>
                        <FlatList 
                            horizontal
                            maxToRenderPerBatch={5}
                            initialNumToRender={10}
                            data={cocktailRecipes}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />

                </View>



            </ScrollView>
        </View>

    );
    

};

export default Explore;