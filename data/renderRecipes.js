import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const renderRecipes = ({item, navigation}) => {

    return(

        <TouchableOpacity onPress={() => navigation.navigate('Recipe', item) } > 
            <ImageBackground
            source ={item.image}
            style={styles.recipeItem}
            imageStyle={styles.recipeItemImage}
            >
            
                <View style={styles.recipeTitleUnderlay}>
                </View>

                <Text style={styles.recipeItemTitle}>{item.title}</Text>


            </ImageBackground>
        </TouchableOpacity>
    )
}

export default renderRecipes;