import axios from "axios";
import { fetchData } from "../fetchData";

export async function boxIDPutRequest(cardID, newBoxID) {
    const BASE_URL = "http://localhost:4000/cards";
    try {

        const card = await fetchData("cards", cardID)


        const updatedCard = {
            ...card,
            boxID: newBoxID,
        };

        const updateResponse = await axios.put(`${BASE_URL}/${cardID}`, updatedCard);
        console.log("Card güncellendi:", updateResponse.data);
        return updateResponse.data;
    } catch (error) {
        console.error("Card güncellenirken bir hata oluştu:", error.message);
        throw error;
    }
}
