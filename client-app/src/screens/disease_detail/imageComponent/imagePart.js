
import {  Footer,FooterTab,Button, Text } from 'native-base';
import React from 'react';
import { View,ImageBackground } from 'react-native';
import { BASE_URL } from '../../../constants';
import style from './imageStyles';

const image = { uri: `${BASE_URL}/health-care.jpg` };

const ImagePart = ({setTab,state,tab,hasLocationPerm}) => {

    const items = [
        { key:'doctorInfo', text:'دکتر', },
        { key:'sideeffect', text:'عوارض' },
        { key:'medicrecom',text:'توصیه', },
        { key:'causedBy', text:'علت',  },
        { key:'description', text:'توضیح', },

    ].filter( jsonOb => {
        if(jsonOb.key === 'doctorInfo'){
            return hasLocationPerm;
        }else if (state[jsonOb.key].length > 0 ){
            return true;
        }else {
            return false;
        }
    });
    return (
        <ImageBackground source={image} style={style.image} >
                <View style={style.view}>
                        <Footer  style={style.view} >
                            <FooterTab style={style.footer}>
                            {
                                items.map( ({key,text},index) => {
                                    return (
                                        <Button onPress={e=>{
                                            setTab(key);
                                        }} key={index} active={key === tab} style={key === tab ? style.active_tab :style.tab}>
                                            {
                                                <Text style={key === tab ?style.active_text :style.footer_text}>{text}</Text>
                                            }
                                        </Button>
                                    )
                            
                                })
                            }    
                            </FooterTab>
                        </Footer>
                </View>
        </ImageBackground>

    )

}

export default ImagePart;