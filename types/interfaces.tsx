import { ReactNode } from "react";

export interface Card {
    id: number;
    termin: string;
    definition: string;
    queueNumber?: number;
    boxID?: number;
}
export interface CardsDataProps {
    data: Card[];
}
export interface StoreProviderProps {
    children: ReactNode;
}
