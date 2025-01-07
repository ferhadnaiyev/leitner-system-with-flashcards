import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayedCardValue: 1,
}

export const displayedCardSlice = createSlice({
    name: 'displayedCard',
    initialState,
    reducers: {
        incrementDisplayedCard: (state) => {
            state.displayedCardValue = state.displayedCardValue + 1

        },
        decrementDisplayedCard: (state) => {
            if (state.displayedCardValue > 1)
                state.displayedCardValue = state.displayedCardValue - 1;

        },
        resetDisplayedCardValue: (state) => {
            state.displayedCardValue = 1
        }
    }
})
export const { incrementDisplayedCard, decrementDisplayedCard, resetDisplayedCardValue } = displayedCardSlice.actions

export default displayedCardSlice.reducer