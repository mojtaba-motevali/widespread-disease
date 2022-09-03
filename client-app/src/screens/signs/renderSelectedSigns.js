

import { Card, Icon, List, ListItem, Text } from 'native-base';
import React from 'react';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { desiredColors } from '../../constants';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  text:{
    color:desiredColors.blackLike,
    fontSize:15,
  },
  list:{
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row-reverse',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    flexWrap:'wrap',
  },
  card:{
    backgroundColor:desiredColors.whiteToBlue_1,

    borderRadius:20,
  }, 
  listIcon:{color:'gray',fontSize:22}
})
  const renderSelectedSigns = ({selectedSigns,setSelectedSigns}) => {
    
    const removeFromSelected = (id)=>{
      return ()=>{
        setSelectedSigns([...selectedSigns.filter((value) => value.id !== id)])
      }
    }
    return (
      <List style={styles.list}>
      <FlatList  horizontal={true}  keyExtractor={value=>value.id.toString()} 
            data={selectedSigns} renderItem={({item:{id,name}})=> {
              return (
                <Animatable.View animation="zoomIn" duration={1200} delay={500}>
                    <Card style={styles.card}>
                        <TouchableNativeFeedback onPress={removeFromSelected(id)} key={id}  >

                              <ListItem  iconRight={true}  icon={true} button={true}>
                                      <Text style={styles.text}> {name} </Text>
                                      <Icon type="Ionicons" style={styles.listIcon} name="close-circle" />
                              </ListItem>
                        </TouchableNativeFeedback>

                    </Card>
                </Animatable.View>
                   
                  
              )
            }}
            />

  </List>
    )
  }

  export default renderSelectedSigns;