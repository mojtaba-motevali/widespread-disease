import { BASE_URL } from "../../constants";
import { SET_DISEASE } from "../../store/actions/disease";

const parseIds = (ids) => {
    let str = "";
    for(let i = 0 ; i < ids.length ; ++i){
      str += ids[i] + ( i === ids.length-1 ? "": ","); 
    }
    return str;
  }
  const getDiseases = async ({selectedSigns,setIsLoading,dispatch}) => {
    const ids = selectedSigns.map((signs)=> {
      return signs.id;
    })
    if(ids.length > 0){
        setIsLoading(true);
        try {
          const result = await fetch(`${BASE_URL}/diseases?signs=${parseIds(ids)}`)
          const object = await result.json();

          const diseases = object.diseases ? object.diseases.map(disease => {
            const index = object.occurance.findIndex((value)=> value.diseaseId === disease.id);
            disease.matchedSignCount = object.occurance[index].count;
            return disease;
          }):[];
          setIsLoading(false);
          if(diseases.length < 1){
            dispatch(SET_DISEASE([]));
          }else {
            dispatch(SET_DISEASE(diseases));
          }
        }catch(e){
          console.log(e);
          setIsLoading(false);
        }
    }else {
      dispatch(SET_DISEASE([],[]));
    }
  }

  export default getDiseases;