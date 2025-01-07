import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isFlipped: true
}
const isFlippedSlice = createSlice({
    name: "isFlipped",
    initialState,
    reducers: {
        setIsFlippedForClick: (state) => {
            state.isFlipped = !state.isFlipped


        },
        setIsFlippedForButton: (state) => {
            if (!state.isFlipped) {
                state.isFlipped = true
            }


        }
    }
})

export const { setIsFlippedForClick, setIsFlippedForButton } = isFlippedSlice.actions;
export default isFlippedSlice.reducer; 