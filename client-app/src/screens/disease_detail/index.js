
import React,{useState,useEffect} from 'react';
import { Spinner } from 'native-base';

import { View,ScrollView, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../constants';
import ImagePart from './imageComponent/imagePart';
import TotalInfo from './totalInfoComponent/totalInfo';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import DoctorInfo from './doctorComponent/doctorInfo';


const getDiseaseData = async ({id,hasPerm,location,specialistId,setState,setDoctorInfo,setIsLoading}) => {
    try {
        const {latitude,longitude} = location;
        setIsLoading(true);
        let response = null;
        if(hasPerm){
            response = await fetch(`${BASE_URL}/diseases/${id}?latitude=${latitude}&longitude=${longitude}&specialistid=${specialistId}`);
        }else {
            response = await fetch(`${BASE_URL}/diseases/${id}`);
        }
        setIsLoading(false);
        if (response.status === 200) {
            const data = await response.json();
            const {spreads,description,causedBy,medicrecom,sideeffect} = data.diseases;
            const {specialistname,firstName,lastName,phone,address,latitude,longitude} = data.doctorInfo;
            setState(state => ({
                ...state,spreads,description,
                causedBy,medicrecom,sideeffect
            }))
            setDoctorInfo(state=> ({ ...state,specialistName:specialistname,firstName,lastName,phone,address,latitude,longitude }) );
        }
    }catch(e){
        console.log(e);
        setIsLoading(false);
    }
}


const DiseaseDetailScreen = props => {
    const {route:{params:{id}}} = props;
    const disease = useSelector(state=>state.appDiseases.diseases.find(item => item.id === id));
    const selectedSigns = useSelector(state=>state.appSigns.selectedSigns.map(sign=>sign.id))
    const location = useSelector(state=>state.appLocation)
    const [state,setState] = useState({
        id:id,
        signs:disease.signs_disease_join.map(item=> item.signs.name),
        specialistId:disease.specialistId,
        spreads:false,
        description:"",
        causedBy:[],
        medicrecom:[],
        sideeffect:[]
    });
    const [doctorInfo,setDoctorInfo] = useState({
        specialistName:'',
        firstName:'',
        lastName:'',
        address:'',
        latitude:null,
        longitude:null,
        phone:''
    })
    const [isLoading,setIsLoading] = useState(false);
    const [tab,setTab] = useState('description');
    useEffect(() => {
        getDiseaseData({id,hasPerm:location.hasPermission,location:location.location.coords,
            specialistId:state.specialistId,setState,setDoctorInfo,setIsLoading})
    },[]); 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                { 
                    isLoading ? (
                        <Spinner/>
                    ):(
                       <View>
                            <ImagePart hasLocationPerm={location.hasPermission} setTab={setTab} tab={tab} state={state} />
                            <View style={styles.totalInfoView}>
                                <TotalInfo name={disease.name} selectedSignLength = {selectedSigns.length} spreads={state.spreads}
                                matchedSignCount={disease.matchedSignCount} signsLength={disease.signs_disease_join.length}  />
                            </View>
            
                            <View  style={styles.descriptionView}>
                                    {
                                        ( tab !== 'doctorInfo' && tab !== 'description') ? (
                                            state[tab].map((sentence,index) => {
                                                    if(sentence.charAt(sentence.length - 1 ) !== '.' )
                                                        sentence += '.';
                                                    return (
                                                        <Animatable.Text style={{alignSelf:'flex-end'}} duration={800} delay={100} animation="zoomIn" key={index}>
                                                                {sentence}
                                                        </Animatable.Text>
                                                    )
                                            })
                                        ): tab === 'description' ?  
                                        <Animatable.Text  style={{alignSelf:'flex-end'}} duration={1200} delay={500} animation="zoomIn"> 
                                                        {state[tab]}
                                                </Animatable.Text> :<DoctorInfo {...doctorInfo}  />
                                    }
                            </View>
                       </View>
                    )
                }

            </ScrollView>
        </SafeAreaView>
    )
  }
  
 

  export default DiseaseDetailScreen;