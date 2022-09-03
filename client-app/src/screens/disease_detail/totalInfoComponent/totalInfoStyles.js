import { Dimensions, StyleSheet } from 'react-native';

const sizeWidth = Dimensions.get('window').width


const style =  StyleSheet.create({

    title_container:{
        alignItems:'center',
    },
    card:{
        width:sizeWidth * 0.9,
        borderRadius:10,
        backgroundColor:'#DCFCF2'
    },
    cardItem:{
        flexDirection:'row-reverse',
        direction:'rtl',
        backgroundColor:'transparent'
    },
    cardTitle:{
        fontWeight:'bold',
        fontSize: sizeWidth < 400 ? 10 : 14,
        padding:2,
    },
    cardBody:{
        flexDirection:'row-reverse',
        justifyContent:'space-between',
    }
});

export default style;