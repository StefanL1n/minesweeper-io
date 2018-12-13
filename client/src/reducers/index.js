import {combineReducers} from "redux";
import authReducer from './authReducer';
import mineReducer from './mineReducer';

export default combineReducers({
    auth: authReducer,
    mine: mineReducer
});