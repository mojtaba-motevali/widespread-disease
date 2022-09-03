import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import Store from './src/store/index';
import SignsScreen from './src/screens/signs/index';
import DiseaseScreen from './src/screens/disease/index';
import AppLoading from 'expo-app-loading';
import { desiredColors } from './src/constants';
import HomeScreen from './src/screens/home/index';
import DiseaseDetail from './src/screens/disease_detail/index';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor:"#2B4276" ,
  },
  headerTitleStyle:{
    color: '#EBEDF0',
    direction:'rtl',
  },

  
})


export default function App() {
  const[loaded,setIsLoaded] = useState(false);
  const loadFonts = async()=>{
    setIsLoaded(false);
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    setIsLoaded(true);
  }
  useEffect(()=> {
    loadFonts()
  },[])
  if(!loaded){
    return (
      <AppLoading/>
    )
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          ...styles,  
          headerTintColor:"#EBEDF0",
          cardStyle:{
            backgroundColor:'white',
          },

        }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title:'خانه'}}
          />
          <Stack.Screen
            name="Signs"
            component={SignsScreen}
            options={{title:'انتخاب علائم'}}
          />
            <Stack.Screen
            name="Disease"
            component={DiseaseScreen}
            options={{title:'بیماری ها'}}
          />
           <Stack.Screen
            name="DiseaseDetail"
            component={DiseaseDetail}
            options={{title:'جزئیات بیشتر'}}
          />
      </Stack.Navigator>

    </NavigationContainer>

    </Provider>
  );
}
