import axios from "axios";

export async function fetchData(dataName, id) {
    const BASE_URL = "http://localhost:4000"
    try {
        const url = id ? `${BASE_URL}/${dataName}/${id}` : `${BASE_URL}/${dataName}`;
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        console.error("Error fetching cards:", error);
    }

}