
import { Card } from "@/types/interfaces";
import findID from "./findID";
function incrementBoxID(cardsForToday: Card[], displayedCardValue: number, key: string) {
    return (findID(cardsForToday, displayedCardValue, key)) + 1;

}

export default incrementBoxID
