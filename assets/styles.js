import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: "bold"
    },
    titleIcon: {
        fontSize: 24,
        fontWeight: "bold"
    },
    recipeItem: {
        width: 170,
        height: 250,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 15,
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