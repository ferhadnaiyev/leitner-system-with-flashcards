import { configureStore } from '@reduxjs/toolkit'
import displayedBoxReducer from './slices/displayedBox/index';
import modalReducer from './slices/modal/index';
import { getCardsSlice } from './slices/getCards';
import { getBoxesSlice } from './slices/getBoxes';
import { postCardSlice } from './slices/postCard';

export const store = configureStore({
    reducer: {

        displayedBox: displayedBoxReducer,
        modal: modalReducer,
        [getCardsSlice.reducerPath]: getCardsSlice.reducer,
        [getBoxesSlice.reducerPath]: getBoxesSlice.reducer,
        [postCardSlice.reducerPath]: postCardSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(getCardsSlice.middleware)
            .concat(getBoxesSlice.middleware)
            .concat(postCardSlice.middleware),
})
