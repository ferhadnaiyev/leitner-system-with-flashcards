import axios from 'axios';

const getData = async (type: 'cards' | 'boxes') => {
    try {
        const response = await axios.get(`http://localhost:4001/${type}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export default getData