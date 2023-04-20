import {combineReducers} from '@reduxjs/toolkit';

//import reducer
import loaderReducer from './loaderReducer';
import soundReducer from './soundReducer';

export const rootReducer = combineReducers({
    loader: loaderReducer,
    sound: soundReducer,
})
