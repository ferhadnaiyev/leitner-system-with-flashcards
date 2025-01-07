"use client"
import { Provider } from "react-redux"
import { store } from './index'
import { StoreProviderProps } from "@/types/interfaces"

function StoreProvider({ children }: StoreProviderProps) {
    return (

        <Provider store={store}>
            {children}
        </Provider>

    )
}

export default StoreProvider

export type RootType = ReturnType<typeof store.getState>;
