import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DisplayedBoxState {
    displayedBox: number;
}
const initialState: DisplayedBoxState = {
    displayedBox: 1,
}

export const displayedBoxSlice = createSlice({
    name: 'displayedBox',
    initialState,
    reducers: {
        setDisplayedBox: (state, action: PayloadAction<number>) => {
            state.displayedBox = action.payload
        }
    }
})

export const { setDisplayedBox } = displayedBoxSlice.actions

export default displayedBoxSlice.reducer
