

import {  Body, Card, CardItem, Container, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import styles from './totalInfoStyles';

const dangerousLevel = (value) => {
    const result ={
        text:'',
        color:''
    }
    if (value < 34) {
        result.text = 'استراحت در خانه';
        result.color = 'green';
    }else if ( value < 67){
        result.text = 'مراحعه به دکتر';
        result.color = 'orange';
    }else {
        result.text = 'مراجعه سریع به دکتر';
        result.color = 'red'
    }
    return result;
}


const TotalInfo = ({matchedSignCount,signsLength,selectedSignLength,name,spreads}) => {
    const dangerJson = dangerousLevel(((2*matchedSignCount-selectedSignLength)/signsLength)*100);

    return (
        <Container style={styles.title_container}>
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <Body style={styles.cardBody} >
                        <View style={{flexDirection:'row'}} >
                        <Text style={styles.cardTitle} >
                                    نام بیماری:  
                            </Text>
                            <Text style={styles.cardTitle} >
                                    {name}
                            </Text>
 
                        </View>
                        <View style={{flexDirection:'row'}} >
                        <Text style={styles.cardTitle} >
                                    تعداد علائم کلی :  
                            </Text>
                            <Text style={styles.cardTitle} >
                                    {signsLength}
                            </Text>

                        </View>
                    </Body>
                </CardItem>
                <CardItem style={styles.cardItem}>
                    <Body style={styles.cardBody} >
                        <View style={{flexDirection:'row'}} >
                        <Text style={styles.cardTitle} >
                                    مسری:   
                            </Text>
                            <Text style={{...styles.cardTitle,color:spreads ? 'red':'orange'}} >
                                    {spreads ? 'است' : 'نیست'}
                            </Text>
                        </View>
                        <View style={{flexDirection:'row'}} >
                        <Text style={styles.cardTitle} >
                                    پیشنهاد :  
                            </Text>
                            <Text style={{...styles.cardTitle,color:dangerJson.color}} >
                                    {dangerJson.text}
                            </Text>

                        </View>
                    </Body>
                </CardItem>
            </Card>
        </Container>
    )
} 

export default TotalInfo;