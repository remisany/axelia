import {configureStore} from '@reduxjs/toolkit'

//import reducers
import {rootReducer} from '../reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer
})
