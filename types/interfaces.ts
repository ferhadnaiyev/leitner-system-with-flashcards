export interface CardType {
    cardId: number;
    boxID: number;
    termin: string;
    definition: string;
    userId?: string
    createdAt?: number

}
export interface BoxType {
    id: number;
    title: string;
    practiceRequired: boolean;
}