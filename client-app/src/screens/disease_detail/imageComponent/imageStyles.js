import { Dimensions, StyleSheet, View } from 'react-native';

const sizeWidth = Dimensions.get('window').width


const style =  StyleSheet.create({
    image:{
        resizeMode: "cover",
        height:300,
        justifyContent: "flex-end"
    },
    view:{
        backgroundColor:'transparent'
    },
    footer:{
        backgroundColor:'transparent'
    },
    tab:{
        opacity:0.7,
        backgroundColor:'lightgray'
    },
    active_tab:{
        backgroundColor:'#2B8391',
        opacity:0.90,
    },
    active_text:{
        color:'white',
        opacity:1,
        fontSize: sizeWidth < 400 ? 10 : 14,
        fontWeight:'bold'

    },
    footer_text:{
        color:'black',
        fontSize: sizeWidth < 400 ? 10 : 14,
        fontWeight:'bold',
    }
});

export default style;