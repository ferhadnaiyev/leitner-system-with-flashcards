import { createSlice, } from '@reduxjs/toolkit'

interface practiceModalIsOpenState {
    practiceModalIsOpen: boolean;
}

const initialState: practiceModalIsOpenState = {
    practiceModalIsOpen: false,
}

export const practiceModalIsOpenSlice = createSlice({
    name: 'practiceModalIsOpen',
    initialState,
    reducers: {
        toggle: (state) => {
            state.practiceModalIsOpen = !state.practiceModalIsOpen;
        },
    }
})

export const { toggle } = practiceModalIsOpenSlice.actions

export default practiceModalIsOpenSlice.reducer 
