import { Card } from "@/types/interfaces";
import { getByBoxID } from "./api/actions";


// const stampDate = 2
export const collectData = async () => {
    const stampDate = new Date(2025, 0, 1).getDate()
    const nowDate = new Date().getDate()
    // const nowDate = 23
    const diff = stampDate - nowDate
    const box1Data = await getByBoxID(1);
    let cardsForToday = box1Data;

    if (diff !== 0 && diff % 2 == 0) {
        const box2Data = await getByBoxID(2);
        cardsForToday = cardsForToday.concat(box2Data);



    }
    if (diff !== 0 && diff % 7 == 0) {
        const box3Data = await getByBoxID(3);
        cardsForToday = cardsForToday.concat(box3Data)

    }
    if (diff !== 0 && diff % 7 == 0 && diff % 2 == 0) {
        const box4Data = await getByBoxID(4);
        cardsForToday = cardsForToday.concat(box4Data)

    }

    addQueueNumber(cardsForToday)
    return cardsForToday;

}

const addQueueNumber = (array: Card[]) => {
    let i = 1;
    const length = array.length;

    while (i <= length) {
        if (array[i - 1]) {
            array[i - 1].queueNumber = i;
        }
        i++;
    }

    return array;
};