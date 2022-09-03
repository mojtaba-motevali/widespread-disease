
import {  Body, Icon, Left, List, ListItem, Right, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { desiredColors } from '../../constants';
import * as Animatable from 'react-native-animatable';


const styles = StyleSheet.create({
    listItem:{
        justifyContent:'flex-end'
    },
    leftIcon:{
        color:desiredColors.redLike
    },
    rightIcon:{
        color:desiredColors.blackLike,
        fontSize:24
    },
    text:{
        fontSize:12
    }
})


const RenderList = props => {
  const {selectedSigns,signs,setSelectedSigns} = props;
  return (
    <List>
        <FlatList initialNumToRender={5} keyExtractor={value=> value.id.toString()}  data={signs} renderItem={itemData=>{
              if( !selectedSigns.find((value) => value.id === itemData.item.id ))
              {
                return (
                  <Animatable.View animation="flipInY" duration={1200}   >
                      <TouchableNativeFeedback onPress={e=>{
                      setSelectedSigns([...selectedSigns,itemData.item]);
                    }}>
                          <ListItem icon style={styles.listItem} iconRight={true}
                          iconLeft={true} icon={true}  key={itemData.item.id}>
                              <Left>
                                  <Icon name="add-outline" type="Ionicons" style={styles.leftIcon}  />
                              </Left>
                              <Body>
                                  <Text style={styles.text}> {itemData.item.name}</Text>
                              </Body>
                              <Right>
                                  <Icon type="Ionicons" style={styles.rightIcon} name="heart-dislike-outline" />
                              </Right>

                          </ListItem>
                      </TouchableNativeFeedback>

                  </Animatable.View>
                  
                )
              }
            }} />

    </List>
    
  )
}
export default RenderList;