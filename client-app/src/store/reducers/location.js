import {  SET_LOCATION_TYPE } from "../actions/location";


const defaultState = {
    hasPermission:false,
    location:{
        coords:  {
            accuracy: null,
            altitude: null,
            altitudeAccuracy: null,
            heading: null,
            latitude: null,
            longitude: null,
            speed: null,
          },
          mocked: false,
          timestamp: null,
        
    }
}


const locationReducer = (state=defaultState,actions) => {
    switch (actions.type) {
        case SET_LOCATION_TYPE:
            const data = actions.data;
            state ={
                ...state,
                hasPermission:data.hasPermission,
                location:data.location
            }
            break;
        default:
            break;
    }
    return state;
}

export default locationReducer;