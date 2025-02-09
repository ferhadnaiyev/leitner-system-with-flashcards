import { createSlice, } from '@reduxjs/toolkit'

interface modalState {
    modal: boolean;
}

const initialState: modalState = {
    modal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        toggle: (state) => {
            state.modal = !state.modal;
        },
    }
})

export const { toggle } = modalSlice.actions

export default modalSlice.reducer 
