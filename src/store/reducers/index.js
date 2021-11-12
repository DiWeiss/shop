import {combineReducers} from 'redux';
import filtersReducer from './filters';
import foodReduser from './food'
import cartReduser from './cart'


const rootReduser=combineReducers({filtersReducer, foodReduser, cartReduser});

export default rootReduser;