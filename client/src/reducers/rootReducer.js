import {combineReducers} from '@reduxjs/toolkit';

//import reducer
import loaderReducer from "./loaderReducer";

export const rootReducer = combineReducers({
    loader: loaderReducer,
})
