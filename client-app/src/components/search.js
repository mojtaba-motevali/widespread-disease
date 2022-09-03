
import React,{useEffect} from 'react';
import {  Header, Item, Input, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { BASE_URL, desiredColors } from '../constants';

const styles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        borderRadius:20
    },
    input:{
      backgroundColor: desiredColors.grayToWhite_1,
      textAlign:'right',
      borderRadius:25
    }
})
const getSigns = async (setIsLoading,setSigns,text) => {
    try {
      setIsLoading(true);
      const result = await fetch(`${BASE_URL}/signs?name=${text}`);
      const objects = await result.json();
      setIsLoading(false);
      setSigns(objects);
    }catch(e){
        setIsLoading(false);
    }
  }
  
export const Search = props => {
    const {setIsLoading,setSign,text,setText} = props;
    useEffect(() => {
      const timeoutId = setTimeout(async () =>{
        try {
          if(text.length > 0 ){
            await getSigns(setIsLoading,setSign,text)
          }else {
            setSign([]);
          }
        }catch(e){
          console.log(e);
        }
      
      } , 500);
      return () => clearTimeout(timeoutId);
    }, [text]);
    return (
        <Header style={styles.header} searchBar rounded>
          <Item>
            <Icon name="ios-people" />
            <Input on style={styles.input} keyboardType="default" onChangeText={ async value=>{
                if(!value || value.match(/^[آ-ی\s]+$/g)){
                    setText(value);
                    
                }

              }} placeholder="علائم خود را تایپ کنید" value={text}/>
             <Icon name="ios-search" />
        
          </Item>
        </Header>
        
    )
}
