import { Card } from "@/types/interfaces";


function findID(cardsForToday: Card[], displayedCardValue: number, key: string) {
    let result: number | null = null;
    for (let i = 0; i < cardsForToday.length; i++) {
        if (cardsForToday[i].queueNumber === displayedCardValue) {
            result = cardsForToday[i][key]

            break;
        }
    }
    return result;
}

export default findID
