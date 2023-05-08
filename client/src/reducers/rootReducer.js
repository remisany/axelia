import {combineReducers} from '@reduxjs/toolkit';

//import reducer
import loaderReducer from './loaderReducer';
import soundReducer from './soundReducer';
import historyReducer from "./historyReducer";

export const rootReducer = combineReducers({
    loader: loaderReducer,
    sound: soundReducer,
    history: historyReducer
})
