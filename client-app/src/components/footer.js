import React from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StyleSheet } from 'react-native';
import { desiredColors } from '../constants';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

const styles=  StyleSheet.create({
  container:{
    backgroundColor:desiredColors.whiteLike,
  }
})

const AppFooter = props =>  {
    const {route,navigation} = props;
    const numberOfSigns = useSelector(state => state.appSigns.selectedSigns.length);
    const numberOfDiseases = useSelector(state => state.appDiseases.diseases.length);
    const navigateTo = (name)=> {
      return (e) => {
        if(route.name !== name){
          navigation.navigate(name)
        }
      }
    }
    const setColor =  (isDisease) => {
      return  isDisease ? 'red' : 'gray';
    }
    const isDisease = route.name === 'Disease';
    return (
      <Container>
        <Content/>
        <Footer>
          <FooterTab style={styles.container}>
            <Button  style={{borderTopWidth:1,borderTopColor:setColor(!isDisease)}} 
            
            onPress={navigateTo("Signs")} badge={numberOfSigns > 0 } >
              {numberOfSigns > 0 && <Animatable.View  animation="zoomIn" duration={1200}> 
                    <Badge style={{left:12}} info><Text>{numberOfSigns}</Text></Badge>
                </Animatable.View>}
              <Icon style={{color: setColor(!isDisease)}} type="Ionicons" name="analytics-outline" />
              <Text style={{color: setColor(!isDisease)}}> علائم </Text>
            </Button>
            <Button  style={{borderTopWidth:1,borderTopColor:setColor(isDisease)}} onPress={numberOfDiseases > 0 ? navigateTo("Disease") : ()=>{}} 
             badge={numberOfDiseases > 0 }  >
              {numberOfDiseases > 0 && <Animatable.View animation="zoomIn" duration={1200} >
                <Badge style={{left:12}} danger><Text>{numberOfDiseases}</Text></Badge>
              </Animatable.View> 
              }

              <Icon style={{color: setColor(isDisease)}} name="skull" />
              <Text style={{color: setColor(isDisease)}}> بیماری ها</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
}
export default AppFooter;