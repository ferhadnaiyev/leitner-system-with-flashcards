import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DisplayedBoxState {
    displayedBoxId: number;
    displayedBoxTitle: string;

}
const initialState: DisplayedBoxState = {
    displayedBoxId: 1,
    displayedBoxTitle: "Daily"
}

export const displayedBoxSlice = createSlice({
    name: 'displayedBox',
    initialState,
    reducers: {
        setDisplayedBoxId: (state, action: PayloadAction<number>) => {
            state.displayedBoxId = action.payload

        },
        setDisplayedBoxTitle: (state, action: PayloadAction<string>) => {
            state.displayedBoxTitle = action.payload
        }
    }
})

export const { setDisplayedBoxId, setDisplayedBoxTitle } = displayedBoxSlice.actions

export default displayedBoxSlice.reducer
