import { Dimensions, StyleSheet } from 'react-native';

const sizeWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
    },
    informationTitle:{
        fontWeight:'bold',
        alignSelf:'flex-end',
        marginTop:30,
        marginRight:10,
        marginBottom:30,
        fontSize:18,
    },
    information:{
        flexDirection:'row-reverse',
        width:'100%',
        paddingTop:10,
        justifyContent:'space-evenly',
        // marginTop:100
    },
    diseaseInfo:{
        width:150,
        height:50,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:'#F25F5F',
        flexDirection:'row-reverse',
        justifyContent:'center',
    },
    signInfo:{
        width:150,
        height:50,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:'#34EBAE',
        flexDirection:'row-reverse',
        justifyContent:'center',
    },
    informationText:{
        color:'blue',
        fontSize: sizeWidth < 400 ? 12 : 18,
        paddingTop:10,
        paddingBottom:10,
    },
    button:{
        marginTop:25,
        backgroundColor:'#2B8391',
        alignSelf:'center',
        borderRadius:20,
    }
})
export default styles;