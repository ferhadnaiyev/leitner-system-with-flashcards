import { configureStore } from '@reduxjs/toolkit';
import displayedBoxReducer from './slices/displayedBox/index';
import currentCardIndexReducer from './slices/currentCardIndex/index';
import modalReducer from './slices/modal/index';
import practiceModalIsOpenReducer from './slices/practiceModalIsOpen/index';
import { cardsApi } from './slices/cardsApi';

export const store = configureStore({
    reducer: {
        displayedBox: displayedBoxReducer,
        currentCardIndex: currentCardIndexReducer,
        modal: modalReducer,
        practiceModalIsOpen: practiceModalIsOpenReducer,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
