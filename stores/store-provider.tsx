"use client"
import { Provider } from "react-redux"
import { store } from './store'
import { ReactNode } from "react";

interface StoreProviderProps {
    children: ReactNode;
}
function StoreProvider({ children }: StoreProviderProps) {
    return (

        <Provider store={store}>
            {children}
        </Provider>

    )
}

export default StoreProvider

export type RootType = ReturnType<typeof store.getState>;
