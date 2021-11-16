import {StyleSheet} from 'react-native';
import colors from './colors/colors'

const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: "bold"
    },
    titleIcon: {
        fontSize: 24,
        fontWeight: "bold"
    },
    recipeTitleUnderlay:{
        position: 'absolute',
        opacity: 0.5,
        //blurRadius: 0.1,
        height: 50,
        width:170,
        bottom: 0,
        backgroundColor: colors.pink, 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }, 
    recipeItemTitle:{
        fontSize: 20,
        color: colors.white,
    },
    recipeItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    recipeItemImage: {
        borderRadius: 20,
    },
    navigationTab:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    container: {
        flex: 1,
        //color: colors
    }
})


export default styles