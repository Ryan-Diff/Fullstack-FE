import { combineReducers } from 'redux';
import plantReducer from './plantReducer';

export default combineReducers({
    plant: plantReducer
});