import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors/colors'

const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: "bold"
    },
    titleIcon: {
        marginTop: 8,
        fontSize: 24,
        fontWeight: "bold"
    },
    timeIcon: {
        marginTop: 8,
        fontSize: 15,
        fontWeight: "bold"
    },
    appleIcon: {
        marginTop: 8,
        fontSize: 17,
        fontWeight: "bold"
    },
    recipeTitleBlur:{
        position: 'absolute',
        opacity: 0.5,
        // blurRadius: 0.1,
        height: 50,
        width:170,
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }, 
    recipeTitleUnderlay:{
        position: 'absolute',
        opacity: 0.7,
        //blurRadius: 0.1,
        height: 50,
        width:170,
        bottom: 0,
        backgroundColor: colors.pink, 
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }, 
    recipeItemTitle:{
        top: 5,
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.white,
    },
    recipeItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 6,
        marginBottom: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
      },
    modalView: {
        width: Dimensions.get('window').width - 50,
        height: 230,//Dimensions.get('window').height - 200,
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        // padding: 35,
        justifyContent: 'center',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#FFB9B9",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    recipesWrapper:{
        backgroundColor: colors.pink,
        marginTop: 10 
    },
    recipesScreenWrapper:{
        backgroundColor: colors.pink,
        marginBottom: 0
    },
    recipePageImage:{
        width: "100%",
        height: 310,
    },  
    recipeItemImage: {
        borderRadius: 20,
    },
    navigationTab:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    meChefLogo: {
        // position: 'absolute',
        // top: 125,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    container: {
        flex: 3,
        //color: colors
    }
})


export default styles