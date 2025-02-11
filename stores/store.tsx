import { configureStore } from '@reduxjs/toolkit';
import displayedBoxReducer from './slices/displayedBox/index';

import modalReducer from './slices/modal/index';
import { cardsApi } from './slices/cardsApi';
import { getBoxesSlice } from './slices/getBoxes';


export const store = configureStore({
    reducer: {
        displayedBox: displayedBoxReducer,

        modal: modalReducer,

        [cardsApi.reducerPath]: cardsApi.reducer,
        [getBoxesSlice.reducerPath]: getBoxesSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(cardsApi.middleware)
            .concat(getBoxesSlice.middleware)

});
