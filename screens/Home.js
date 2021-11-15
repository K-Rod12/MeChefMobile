import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {View, Text, Button, StyleSheet, Image, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'




const Home = ({navigation}) => {
    
    const renderRecipes = ({item}) => {
        
        return(

            <TouchableOpacity> 
            
                <ImageBackground
                source ={item.image}
                style={styles.recipeItem}
                imageStyle={styles.recipeItemImage}
                >
                {/* <Image source={require('../images/chicken.jpg')}/> */}
                <Text style={styles.recipeItemTitle}>{item.title}</Text>

                </ImageBackground>

            </TouchableOpacity>
        )
            
    }
    
    return(

        <View style={styles.container}>

            {/*Header */}
            <ScrollView>

                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                    </View>
                </SafeAreaView>
                
                <View>
                    <Text style={styles.titleText}>Your Pantry <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/> </Text>
                </View>

                {/* Recipes */}
                <SafeAreaView>
                    <View> 
                        <Text style={styles.titleText} onPress={() =>navigation.navigate('Pantry')} >Your Recipes <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/> </Text>
                    </View>

                    <View styles={styles.recipesWrapper}>
                        <FlatList
                            data={recipesData}
                            renderItem={renderRecipes}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    
                </SafeAreaView>



                <SafeAreaView>
                    <View> 
                        <Text style={styles.titleText} onPress={() =>navigation.navigate('Discover')} >Explore <MaterialIcons style={styles.titleIcon} name="arrow-forward-ios"/> </Text>
                    </View>
                    
                </SafeAreaView>



    
            </ScrollView>
        </View>

    );

};

// const styles = StyleSheet.create({
//     titleText: {
//         fontSize: 32,
//         fontWeight: "bold"
//     },
//     titleIcon: {
//         fontSize: 24,
//         fontWeight: "bold"
//     },
//     container: {
//         flex: 1,
//         color: colors
//     }
// })

export default Home;