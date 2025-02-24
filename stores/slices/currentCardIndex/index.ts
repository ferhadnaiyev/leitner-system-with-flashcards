import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface currentCardIndexState {
    currentCardIndex: number;
}

const initialState: currentCardIndexState = {
    currentCardIndex: 0,

}

export const currentCardIndexSlice = createSlice({
    name: 'currentCardIndex',
    initialState,
    reducers: {
        incrementCurrentCardIndex: (state) => {
            state.currentCardIndex += 1;
        },
        resetCurrentCardIndex: (state) => {
            state.currentCardIndex = 0;
        },

    }
})

export const { incrementCurrentCardIndex, resetCurrentCardIndex } = currentCardIndexSlice.actions

export default currentCardIndexSlice.reducer
