import { configureStore } from '@reduxjs/toolkit'

import displayedBoxReducer from './displayedBox/index';


export const store = configureStore({
    reducer: {

        displayedBox: displayedBoxReducer,


    },
})