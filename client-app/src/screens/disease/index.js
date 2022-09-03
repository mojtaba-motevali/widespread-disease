


import {  Card, CardItem, Icon, List, ListItem, Right, Text } from 'native-base';
import React,{useState} from 'react';
import { View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import AppFooter from '../../components/footer';
import ProgressCircle from 'react-native-progress-circle';
import styles from './styles';
import ModalSigns from './signsModal';
import * as Animatable from 'react-native-animatable';

const computePercent = (matched,selectedLength,total) => {
  return parseInt(((matched - selectedLength)/total)*100,10)
}
const sortDiseases = (selectedLength) => {
    return (a,b) => {      
      const firstPercent = computePercent(a.matchedSignCount,selectedLength - a.matchedSignCount,a.signs_disease_join.length); 
      const secondPercent = computePercent(b.matchedSignCount,selectedLength - b.matchedSignCount,b.signs_disease_join.length);
      if(firstPercent < secondPercent ){
        return 1;
      }else if (firstPercent > secondPercent ) {
        return -1;
      }else{
        return 0;
      }
    }
}
const CustomCardItem = ({onPress,name,nameIcon,typeIcon,styles,textStyle}) => (
  <TouchableOpacity onPress={onPress} containerStyle={{flex:1}}>
      <CardItem style={styles}>
            <Text style={textStyle}>  {name}  </Text>

            <Icon style={{fontSize:25,color:textStyle.color}}
                type={typeIcon} name={nameIcon}  />
        </CardItem>
  </TouchableOpacity>
  
)

const DiseaseList = ({ id,index,setSelectedDisease,signCounts,setModalOpen,notMatchedCount, matchedCount,name,navigation }) => {
  const percent = computePercent(matchedCount,notMatchedCount,signCounts);
  return (
    <Animatable.View animation={index % 2 === 0 ? 'flipInX' : 'flipInY'} duration={1200} delay={500}> 
        <ListItem style={styles.listItem}>
              <Card style={styles.card} >
                  <View style={styles.viewInCard}>
                      <CardItem   >
                          <Right style={{flex:0}}>
                              <Icon style={styles.listIcon}type="FontAwesome5" name="viruses"  />
                          </Right>                        
                      </CardItem>
                      <CardItem  >
                          <View >
                                <Text style={styles.title} > {name} </Text>
                                <View style={{top:2,flex:1,flexDirection:'row-reverse'}}>
                                    <Text style={styles.text} > تعداد علائم منطبق: </Text>
                                    <Text style={{...styles.text,fontWeight:'bold'}} > {matchedCount} </Text>
                                </View>
                                <View style={{top:2,flex:1,flexDirection:'row-reverse'}}>
                                    <Text style={styles.text} >  تعداد علائم نا منطبق: </Text>
                                    <Text style={{...styles.text,fontWeight:'bold'}} > {notMatchedCount} </Text>
                                </View>
                                <View style={{top:2,flex:1,flexDirection:'row-reverse'}}>
                                    <Text style={styles.text} > تعداد کل علائم: </Text>
                                    <Text style={{...styles.text,fontWeight:'bold'}} > {signCounts} </Text>
                                </View>
                 
                          </View>
                          
                      </CardItem>
                      <CardItem style={styles.cardItem} >       
                          <ProgressCircle  percent={percent} radius={35} borderWidth={2} 
                              color="#3399FF"
                              shadowColor="#999" bgColor="#fff" >
                                <Text style={{ fontSize: 16 }}>%{percent}</Text>
                            </ProgressCircle>
                      </CardItem>

                  </View>
                  <View style={styles.bottomCard}>
                      
                      <CustomCardItem onPress={e=>{
                        setSelectedDisease(index);
                        setModalOpen(curr=> !curr);
                      }} styles={{...styles.bottomCardItem,
                      borderBottomLeftRadius:20,backgroundColor:"white"}} typeIcon={"Ionicons"}
                      textStyle={{...styles.bottomCardText,color:"#eb156b"}} name={"علائم"} 
                      nameIcon={"analytics-outline"} />

                      <CustomCardItem onPress={e=>{
                           navigation.navigate('DiseaseDetail',{id})
                      }} styles={{...styles.bottomCardItem,
                      borderBottomRightRadius:20,backgroundColor:"white"}}
                        typeIcon={"MaterialCommunityIcons"}  textStyle={{...styles.bottomCardText,color:"#d18052"}} 
                        name={"اطلاعات بیشتر"} nameIcon={"folder-information"} />

                  </View>
              </Card>
            </ListItem>
    </Animatable.View>
   
  )
}
const DiseaseScreen = props => {
  const {navigation} = props;
  let storedDiseases = useSelector(state=>state.appDiseases.diseases);
  const selectedSigns = useSelector(state=>state.appSigns.selectedSigns.map(sign=>sign.id))
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDisease,setSelectedDisease] = useState(-1); 
  storedDiseases = storedDiseases.sort(sortDiseases(selectedSigns.length))
  return (
      <View style={styles.container}>
            <ModalSigns signList={selectedDisease >= 0 ? storedDiseases[selectedDisease].signs_disease_join:[]} 
            selectedSigns={selectedDisease >= 0 ? selectedSigns :[]}  setSelectedDisease={setSelectedDisease}
            isVisible={isModalVisible} setVisible={setModalVisible} />
            <List style={styles.list}>
                <FlatList initialNumToRender={1} data={storedDiseases} keyExtractor={item=> item.id.toString() } 
                  renderItem={({item,index}) =>  <DiseaseList  
                  navigation={navigation}  
                  setModalOpen={setModalVisible} 
                  id={item.id} 
                  index={index}  
                  setSelectedDisease={setSelectedDisease} 
                  name={item.name} 
                  signsName={item.signs_disease_join.map(sign => sign.signs.name)}
                  notMatchedCount = {selectedSigns.length - item.matchedSignCount}          
                  matchedCount={item.matchedSignCount} 
                  signCounts={item.signs_disease_join.length}    />
                   }
                />
            </List>
            <AppFooter route={props.route} navigation={props.navigation} />
      </View>
  )
}

export default DiseaseScreen;