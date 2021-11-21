import { NavigationContainer } from '@react-navigation/native';
import Navigation from '../App';
import React from 'react';
import {Image, View, Text, Button, StyleSheet, ImageBackground, ImageBackgroundBase} from 'react-native';
import colors from '../assets/colors/colors'
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import recipesData from '../data/recipeData';
import styles from '../assets/styles';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { NavigationActions } from 'react-navigation';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
const Recipe = ({route}) => {

    return(
        
        <View>
            <BackgroundImage
            source={route.params.image}
            style={styles.recipePageImage}
            >
            </BackgroundImage>

            <View style={{
                // marginTop:20,
                borderRadius:10,
                backgroundColor: color.white,
                height: '100%'
            }}> 


                <View
                style={{
                    bottom: 10,
                    height: '100%',
                    borderRadius: 10,
                    backgroundColor: colors.white,
                }}>
                    <Text style={styles.titleText}
                    > {route.params.title} </Text>
                </View>


            </View>
        </View>

    );

};

export default Recipe;