import { Dimensions, StyleSheet, View } from 'react-native';

const sizeWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
    },
    title:{
      color:'black',
      fontSize: sizeWidth < 400 ? 12 : 18,
      fontWeight:'bold',left:15
    },
    text:{
      color:'black',
      fontSize:sizeWidth < 400 ? 10 : 14
    },
    list:{
      flexBasis:'82%',
      flex:1,
    },
    listItem:{
      flex:1,
    },
    viewInCard:{
      alignItems:'flex-start',
      height:100,
      borderRadius:20,
      justifyContent:'flex-start',
      flexDirection:'row-reverse',
    },
    card:{
      width:'100%',
      borderRadius:20,
      flexDirection:'column',
    },
    bottomCard:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    bottomCardItem:{
      justifyContent:'center',
      flex:1,
    },
    bottomCardText:{
      color:'white',
      fontSize: sizeWidth < 400 ? 10 : 16,
    },
    cardItem:{
      flex:1,
      alignSelf:'center',
      justifyContent:'center'
    },
    listIcon:{
      top:10,
      fontSize: sizeWidth < 400 ? 45:45
      ,color:"#197282"
    },
    modal:{
      width:150,
      height:400
    }
})
export default styles;