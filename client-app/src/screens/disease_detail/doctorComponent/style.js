import { Dimensions, StyleSheet } from 'react-native';

const sizeWidth = Dimensions.get('window').width


const style =  StyleSheet.create({

    title_container:{
        alignItems:'flex-end',
        paddingBottom:20,
        
    },
    title:{
        fontWeight:'bold',
        fontSize: sizeWidth < 400 ? 10 : 14,
        padding:2,
        flexWrap:'wrap'
    },
    each_row:{
        flexDirection:'row',marginRight:10
    }
});

export default style;