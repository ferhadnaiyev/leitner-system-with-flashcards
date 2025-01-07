import { configureStore } from '@reduxjs/toolkit'
import isFlippedReducer from './isFlipped/index';
import displayedCardReducer from '../stores/displayedCard/index';


export const store = configureStore({
    reducer: {
        isFlipped: isFlippedReducer,
        displayedCard: displayedCardReducer,

    },
})