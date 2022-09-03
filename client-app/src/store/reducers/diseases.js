import {  SET_DISEASE_TYPE } from "../actions/disease";


const defaultState = {
    diseases:[],
}


const diseaseReducer = (state=defaultState,actions) => {
    switch (actions.type) {
        case SET_DISEASE_TYPE:
            const {diseases} = actions.data;
            state ={
                ...state,
                diseases:[...diseases],
            }
            break;

        default:
            break;
    }
    return state;
}

export default diseaseReducer;