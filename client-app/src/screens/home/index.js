
import React,{useState,useEffect} from 'react';
import {  Button, Spinner, Text } from 'native-base';

import { View } from 'react-native';
import { BASE_URL } from '../../constants';
import styles from './style';
import   * as Location  from 'expo-location';
import { useDispatch } from 'react-redux';
import { SET_LOCATION } from '../../store/actions/location';

const getLocationAsync = async (dispatch,setIsLoading) => {
    setIsLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
        try {
            console.log('location via gps')
            const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High,});
            console.log(location);
            dispatch( SET_LOCATION({hasPermission:true,location:{...location}}));

        }catch(e){
            const response = await fetch('https://ipapi.co/json/');
            const location = await response.json();
            console.log('location via ip');
            console.log(location);
            dispatch(SET_LOCATION({hasPermission:true,location:{
                coords:{
                    ...location
                }
            }}))
        }
    }
    setIsLoading(false);
  };


const getData = async({setState,setIsLoading}) => {
    try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/`);
        setIsLoading(false);
        if (response.status === 200) {
            const data = await response.json();
            setState({
                ...data,
            })
        }
    }catch(e){
        console.log(e);
        setIsLoading(false);
    }
}


const HomeScreen = ({navigation}) => {
    const [state,setState] = useState({
        totalSigns:0,
        totalDiseases:0,
        totalDoctors:0,
        totalSpecialists:0
    })
    const [isLoading,setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getLocationAsync(dispatch,setIsLoading);
        getData({setState,setIsLoading})
    },[]); 

    return (
        <View style={styles.container}>
            {isLoading && <Spinner/>}
            <Text style={styles.informationTitle}>  اطلاعات نرم افزار </Text>

            <View style={styles.information}>

                <View style={styles.diseaseInfo}>
                        <Text style={{...styles.informationText,color:'white'}}>  تعداد بیماری: </Text>
                        <Text style={{...styles.informationText,color:'white',fontWeight:'bold'}}>  {state.totalDiseases} </Text>
                </View>
                <View style={styles.signInfo}>
                    <Text style={{...styles.informationText,color:'white'}}> تعداد علائم:  </Text>
                    <Text style={{...styles.informationText,color:'white',fontWeight:'bold'}}> {state.totalSigns} </Text>
                </View>
            </View>
            <View style={styles.information}>

                <View style={{...styles.diseaseInfo,backgroundColor:'#FFE45E'}}>
                        <Text style={{...styles.informationText,color:'white'}}>  تعداد پزشک: </Text>
                        <Text style={{...styles.informationText,color:'white',fontWeight:'bold'}}>  {state.totalDoctors} </Text>
                </View>
                <View style={{...styles.signInfo,backgroundColor:'#7FC8F8'}}>
                    <Text style={{...styles.informationText,color:'white'}}> تعداد تخصص:  </Text>
                    <Text style={{...styles.informationText,color:'white',fontWeight:'bold'}}> {state.totalSpecialists} </Text>
                </View>
            </View>
            <Text style={{...styles.informationTitle,marginBottom:15}}> درباره نرم افزار </Text>
            <View style={{paddingRight:15,paddingLeft:15}}>
                <Text style={styles.informationText}>
                    هدف این نرم افزار ایجاد یک رابط کاربری به منظور اطلاع رسانی و کمک به شناخت بیماری شما می باشد.
                </Text>
                <Text style={styles.informationText}>
                    به منظور استفاده از این نرم افزار کافیست در بخش انتخاب علائم ، علائم خود را انتخاب کرده و سپس به بخش بیماری های یافت شده واقغ در پایین بخش انتخاب علائم مراجعه کنید.
                </Text>
            </View>
                    <Button onPress= {e=> {
                            navigation.navigate('Signs');
                    }} style={styles.button} >
                        <Text> مراجعه به انتخاب علائم </Text>
                    </Button>        
            
            </View>
    )
  }
  
 

  export default HomeScreen;