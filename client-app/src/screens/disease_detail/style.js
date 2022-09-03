import { Dimensions, StyleSheet } from 'react-native';

const sizeWidth = Dimensions.get('window').width


const style =  StyleSheet.create({
    container:{
        flex:1,

    },
    totalInfoView:{
        height:120,
    },
    descriptionView:{
        padding: 10,
        paddingTop:0,

    }
    
});

export default style;