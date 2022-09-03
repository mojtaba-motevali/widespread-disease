import { SET_SELECTED_SIGNS_TYPE } from "../actions/signs";


const defaultState = {
    selectedSigns:[],
}


const signsReducer = (state=defaultState,actions) => {
    switch (actions.type) {
        case SET_SELECTED_SIGNS_TYPE:
            state ={
                ...state,
                selectedSigns:[...actions.data]
            }
            break;
            
        default:
            break;
    }
    return state;
}

export default signsReducer;