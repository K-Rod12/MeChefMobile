import {StyleSheet} from 'react-native';
import { colors } from 'react-native-elements';


const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: "bold"
    },
    titleIcon: {
        fontSize: 24,
        fontWeight: "bold"
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
        marginRight: 20,
    },
    recipeItemImage: {
        borderRadius: 20,
    },
    container: {
        flex: 1,
        //color: colors
    }
})


export default styles