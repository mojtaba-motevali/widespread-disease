import React from 'react';
import { Container, Text , Button, View, ListItem, List, Icon } from 'native-base';
import { StyleSheet,Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
const sizeWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    modal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    container:{
        height:350,
        borderRadius:20,
        padding:10
    },
    heading:{
        color:'blue',
        fontSize: sizeWidth < 400 ? 12 : 16,
    },
    list:{
        flexDirection:'column',
        alignItems:'flex-end'
        
    },
    listItemText:{
        fontSize: sizeWidth < 400 ? 14 : 16
    },
    button:{
        borderRadius:10,
        width:'100%',
        justifyContent:'center',
        alignSelf:'center',
    },
    buttonText:{
        fontSize: sizeWidth < 400 ? 14 : 18
    }
})

const ModalSigns = ({isVisible,setVisible,signList,selectedSigns,setSelectedDisease}) => {
  
    const toggleModal = () => {
        setSelectedDisease(-1)
        setVisible(false);
    };
    return (
        <Modal animationIn="fadeInDownBig" animationOut="fadeOutDownBig" animationInTiming={1000}
         animationOutTiming={1000}  onBackdropPress={toggleModal}  onBackButtonPress={toggleModal} 
         isVisible={isVisible}>
          <View style={styles.modal}>
            <Container style={styles.container}>
                <View style={{paddingBottom:0,flexDirection:'row-reverse',flexWrap:'nowrap'}}>
                    <Text style={styles.heading}>  در این قسمت لیست علائم بیماری انتخاب شده را مشاهده می کنید </Text>
                </View>
                <List style={{right:-10,marginBottom:10,alignItems:'flex-end'}}>
                    <ListItem  style={{height:0,borderBottomWidth:0}}>
                            <Text style={{fontSize:12}}> این علائم را دارید </Text>
                            <Icon style={{color:'green',fontSize:20}} type='Ionicons' name="checkmark-outline" /> 
                    </ListItem>
                    <ListItem style={{height:0,borderBottomWidth:0}}>
                            <Text style={{fontSize:12}}> این علائم را ندارید </Text>
                            <Icon style={{color:'red',fontSize:20}} type='Ionicons' name="close-outline" /> 
                    </ListItem>
     
                </List>
                <ScrollView >
                    <List style={styles.list}>
                        {
                            signList.map(({signs:{id,name}}) => {
                                    const iconProps = selectedSigns.indexOf(id) >= 0 ? {style:{color:'green'},type:'Ionicons',name:"checkmark-outline" }:{
                                        style:{color:'red'},type:'Ionicons',name:"close-outline" 
                                    }
                                    return (
                                        <ListItem  key={id} icon={true} >
                                            <Text style={styles.listItemText}> {name} </Text> 
                                            <Icon name={iconProps.name} type={iconProps.type} style={iconProps.style} />
                                        </ListItem>

                                    )
                            })
                        }
                    </List>
                </ScrollView>
                <Button  onPress={toggleModal} danger transparent style={styles.button}   >
                        <Text style={styles.buttonText} > مشاهده شد </Text>
                </Button>
            </Container>
          </View>
        </Modal>
    
    );
}

export default ModalSigns;

// flatList implementation for lists

{/* <List style={{flexBasis:'54%'}}>

<FlatList contentContainerStyle={styles.list} initialNumToRender={1} keyExtractor={item=>item.signs.id} data={signList} renderItem={({item:{signs:{id,name}}})=> {
            const iconProps = selectedSigns.indexOf(id) >= 0 ? {style:{color:'green'},type:'Ionicons',name:"checkmark-outline" }:{
                style:{color:'red'},type:'Ionicons',name:"close-outline" 
            }
            return (
                <ListItem  key={id} icon={true} >
                    <Text style={styles.listItemText}> {name} </Text> 
                    <Icon name={iconProps.name} type={iconProps.type} style={iconProps.style} />
                </ListItem>

            )
} } />
</List> */}