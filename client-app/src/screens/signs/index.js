


import { Container, List, Spinner } from 'native-base';
import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppFooter from '../../components/footer';
import { Search } from '../../components/search';
import { SET_SELECTED_SIGNS } from '../../store/actions/signs';
import styles from './styles';
import RenderList from './renderList';
import getDiseases from './getDiseases';
import RenderSelectedSigns from './renderSelectedSigns';

const SignsScreen = props => {
  const storedSigns = useSelector(state=>state.appSigns.selectedSigns);

  const [sign,setSign] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [diseaseLoading,setDiseaseLoading] = useState(false);

  const [text,setText] = useState('')
  const [selectedSigns,setSelectedSigns] = useState([...storedSigns]);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(SET_SELECTED_SIGNS(selectedSigns));
    getDiseases({setIsLoading:setDiseaseLoading,dispatch,selectedSigns,});
  },[selectedSigns])


  return (
      <Container style={styles.container}>


        {diseaseLoading ? <Spinner 
        style={{alignSelf:'center'}} color="blue" /> :  <RenderSelectedSigns
         selectedSigns={selectedSigns} setSelectedSigns={setSelectedSigns} /> }
        <Search setSign={setSign} setText={setText} setIsLoading={setIsLoading} text={text} />
        <Container style={{flexBasis:'57%',marginTop:10}}>
          { isLoading ? <Spinner  color="blue" /> : <RenderList

                setSelectedSigns ={setSelectedSigns}
                signs={sign} selectedSigns={selectedSigns}
                /> 
          }

        </Container>
        <AppFooter route={props.route} navigation={props.navigation} />
      </Container>
  )
}

export default SignsScreen;