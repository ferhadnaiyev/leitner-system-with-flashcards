import axios from "axios";

export const updateFirstLevel = async (firstLevel) => {
    try {

        await axios.put('http://localhost:4000/levels/1', {
            firstLevel: firstLevel,
        });

        console.log('isdiyir');
    } catch (error) {
        console.error('eroor', error);
    }
};