import { createStore , combineReducers } from 'redux';
import diseaseReducer from './reducers/diseases';
import signsReducer from './reducers/signs';
import locationReducer from './reducers/location';
const rootRducer = combineReducers({appLocation:locationReducer, appSigns:signsReducer , appDiseases:diseaseReducer})
const store = createStore(rootRducer);

export default store;